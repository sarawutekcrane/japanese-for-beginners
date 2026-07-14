import { useEffect, useMemo, useState } from "react";
import Mascot from "../../components/Mascot";
import Toggle from "../../components/Toggle";
import { useSpeak } from "../../hooks/useSpeech";
import { shuffle as shuffleArr } from "../../utils/content";

function makeItems(chunks) {
  return shuffleArr(chunks.map((text, i) => ({ key: `${i}-${text}`, text })));
}

export default function WordOrderPractice({ pattern, onLesson }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const questions = useMemo(
    () => (shuffleOn ? shuffleArr(pattern.wordOrderQuestions) : pattern.wordOrderQuestions),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pattern, shuffleOn]
  );

  const [index, setIndex] = useState(0);
  const question = questions[index % questions.length];

  const [poolItems, setPoolItems] = useState(() => makeItems(question.chunks));
  const [answerItems, setAnswerItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
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

  const submit = () => {
    const userOrder = answerItems.map((a) => a.text);
    const correct = JSON.stringify(userOrder) === JSON.stringify(question.correctOrder);
    setIsCorrect(correct);
    setSubmitted(true);
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => setIndex((i) => i + 1);

  const playCorrect = () => speak(question.correctOrder.join(""), { rate: 0.8 });

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline btn-sm" onClick={onLesson}>
          📖 กลับไปบทเรียน
        </button>
        <p className="progress-label">
          {(index % questions.length) + 1} / {questions.length} · คะแนน {score.correct}/{score.total}
        </p>
      </div>

      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่มลำดับคำถาม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="แสดงคำแปลภาษาไทย" checked={showThai} onChange={setShowThai} />
        <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      <div className="practice-card">
        <Mascot mood={!submitted ? "neutral" : isCorrect ? "excited" : "sad"} size={80} />
        <p className="th-text word-order-prompt">{question.promptThai}</p>

        <div className="answer-slot">
          {answerItems.length === 0 && <span className="answer-slot-hint th-text">แตะคำด้านล่างตามลำดับ</span>}
          {answerItems.map((item) => (
            <button key={item.key} className="chunk-pill placed jp-text" onClick={() => tapAnswer(item)} disabled={submitted}>
              {item.text}
            </button>
          ))}
        </div>

        <div className="chunk-pool">
          {poolItems.map((item) => (
            <button key={item.key} className="chunk-pill jp-text" onClick={() => tapPool(item)} disabled={submitted}>
              {item.text}
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
              <p className="jp-text">{question.correctOrder.join(" ")}</p>
              {showRomaji && <p className="flashcard-romaji">{question.romaji}</p>}
              {showThai && <p className="flashcard-thai th-text">{question.thai}</p>}
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
    </div>
  );
}
