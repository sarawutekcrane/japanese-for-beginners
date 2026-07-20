import { useEffect, useRef, useState } from "react";
import Toggle from "../../components/Toggle";
import JapaneseText from "../../components/JapaneseText";
import { PracticeProgress, PracticeResults } from "../../components/PracticeSessionUI";
import { useSpeak } from "../../hooks/useSpeech";
import { getAllCounterQuestions, kanjiForCount } from "../../utils/counters";
import { playCorrect, playIncorrect } from "../../utils/sound";
import { usePracticeSession } from "../../utils/practiceSession";

const BASE_QUESTIONS = getAllCounterQuestions();

export default function CounterPractice({ onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const review = usePracticeSession(BASE_QUESTIONS, shuffleOn);
  const finished = review.finished;
  const question = review.current;
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [question]);

  const answered = selected !== null;
  const isCorrect = question ? selected === question.correct : false;

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  const choose = (opt) => {
    if (answered) return;
    setSelected(opt);
    if (opt === question.correct) playCorrect();
    else playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => {
      speak(question.correct);
    }, 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    review.submit(isCorrect);
  };

  const restart = () => {
    review.restart();
  };

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline blue btn-sm" onClick={onBack}>
          ← กลับ
        </button>
        <PracticeProgress current={review.answeredCount} total={review.totalCount} correct={review.correctCount} />
      </div>

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {finished ? (
        <div className="practice-card blue">
          <PracticeResults
            correct={review.correctCount}
            total={review.totalCount}
            celebration="เก่งมาก! คุณนับถูกครบทุกข้อในชุดนี้แล้ว 🎉🌸"
            onRetryWrong={review.startRetryRound}
            onRestart={restart}
          />
        </div>
      ) : (
        <div className="practice-card blue">
          <div className="verb-card">
            <p className="th-text word-order-prompt">{question.promptTh}</p>
          </div>

          <p className="th-text conjugation-instruction">เลือกคำนับที่ถูกต้อง</p>

          <div className="quiz-options">
            {question.options.map((opt) => {
              let cls = "quiz-option";
              if (answered) {
                if (opt === question.correct) cls += " correct";
                else if (opt === selected) cls += " incorrect";
              }
              return (
                <button key={opt} className={cls} onClick={() => choose(opt)} disabled={answered}>
                  <JapaneseText className="jp-text" kana={opt} kanji={kanjiForCount(opt)} />
                  {showRomaji && <span className="quiz-option-hint">{question.optionRomaji[opt]}</span>}
                </button>
              );
            })}
          </div>

          {answered && (
            <>
              <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
                {isCorrect ? "ถูกต้อง! เก่งมาก 🎉" : "ยังไม่ถูก คำตอบที่ถูกต้องคือตัวเลือกสีเขียว 💪"}
              </p>
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
