import { useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../../components/Toggle";
import JapaneseText from "../../components/JapaneseText";
import { PracticeProgress, PracticeResults } from "../../components/PracticeSessionUI";
import { useSpeak } from "../../hooks/useSpeech";
import { shuffle as shuffleArr } from "../../utils/content";
import { playCorrect as playCorrectSound, playIncorrect as playIncorrectSound } from "../../utils/sound";
import { usePracticeSession } from "../../utils/practiceSession";

function makeItems(chunks) {
  return shuffleArr(chunks.map((chunk, i) => ({ key: `${i}-${chunk.text}`, text: chunk.text, kanji: chunk.kanji, romaji: chunk.romaji })));
}

export default function WordOrderPractice({ pattern, onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const baseQuestions = useMemo(() => pattern.wordOrderQuestions, [pattern]);
  const review = usePracticeSession(baseQuestions, shuffleOn);
  const finished = review.finished;
  const question = review.current;

  const [poolItems, setPoolItems] = useState(() => (question ? makeItems(question.chunks) : []));
  const [answerItems, setAnswerItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!question) return;
    setPoolItems(makeItems(question.chunks));
    setAnswerItems([]);
    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  const tapPool = (item) => {
    if (submitted) return;
    setPoolItems((p) => p.filter((x) => x.key !== item.key));
    setAnswerItems((a) => [...a, item]);
  };

  const tapAnswer = (item) => {
    if (submitted) return;
    setAnswerItems((a) => a.filter((x) => x.key !== item.key));
    setPoolItems((p) => [...p, item]);
  };

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  const submit = () => {
    const userOrder = answerItems.map((a) => a.text);
    const correct = JSON.stringify(userOrder) === JSON.stringify(question.correctOrder);
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) playCorrectSound();
    else playIncorrectSound();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => {
      speak(question.correctOrder.join(""));
    }, 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    review.submit(isCorrect);
  };

  const restart = () => {
    review.restart();
  };

  const playCorrect = () => speak(question.correctOrder.join(""));

  const kanjiByText = question ? Object.fromEntries(question.chunks.map((c) => [c.text, c.kanji])) : {};

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline btn-sm" onClick={onBack}>
          ← เปลี่ยนแพทเทิร์น
        </button>
        <h3 className="pattern-detail-title">
          {pattern.order}. {pattern.title}
        </h3>
        <PracticeProgress current={review.answeredCount} total={review.totalCount} correct={review.correctCount} />
      </div>

      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {finished ? (
        <div className="practice-card">
          <PracticeResults
            correct={review.correctCount}
            total={review.totalCount}
            celebration="เก่งมาก! คุณเรียงประโยคถูกครบทุกข้อในชุดนี้แล้ว 🎉🌸"
            onRetryWrong={review.startRetryRound}
            onRestart={restart}
          />
        </div>
      ) : (
        <div className="practice-card">
          <p className="th-text word-order-prompt">{question.promptThai}</p>

          <div className="answer-slot">
            {answerItems.length === 0 && <span className="answer-slot-hint th-text">แตะคำด้านล่างตามลำดับ</span>}
            {answerItems.map((item) => (
              <button key={item.key} className="chunk-pill placed jp-text" onClick={() => tapAnswer(item)} disabled={submitted}>
                <JapaneseText kana={item.text} kanji={item.kanji} />
                {showRomaji && <span className="chunk-romaji-hint">{item.romaji}</span>}
              </button>
            ))}
          </div>

          <div className="chunk-pool">
            {poolItems.map((item) => (
              <button key={item.key} className="chunk-pill jp-text" onClick={() => tapPool(item)} disabled={submitted}>
                <JapaneseText kana={item.text} kanji={item.kanji} />
                {showRomaji && <span className="chunk-romaji-hint">{item.romaji}</span>}
              </button>
            ))}
          </div>

          {!submitted ? (
            <button className="btn btn-success" onClick={submit} disabled={poolItems.length > 0}>
              ตรวจคำตอบ
            </button>
          ) : (
            <>
              <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
                {isCorrect ? "เก่งมาก! เรียงถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองดูเฉลยด้านล่าง 💪"}
              </p>
              <div className="quiz-reveal">
                <p className="jp-text">
                  {question.correctOrder.map((word, i) => (
                    <span key={i}>
                      {i > 0 && " "}
                      <JapaneseText kana={word} kanji={kanjiByText[word]} />
                    </span>
                  ))}
                </p>
                <p className="flashcard-romaji">{question.romaji}</p>
              </div>
              <button className="btn btn-outline btn-sm" onClick={playCorrect}>
                🔊 ฟังประโยคที่ถูกต้อง
              </button>
              <p className="explanation-box th-text">💡 {question.explanation}</p>
              <button className="btn btn-success btn-sm" onClick={next}>
                ข้อถัดไป →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
