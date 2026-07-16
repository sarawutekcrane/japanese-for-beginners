import { useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../../components/Toggle";
import { useSpeak } from "../../hooks/useSpeech";
import { getAllConjugationQuestions, groupLabel } from "../../utils/grammar";
import { shuffle as shuffleArr } from "../../utils/content";
import { playCorrect, playIncorrect } from "../../utils/sound";

const BASE_QUESTIONS = getAllConjugationQuestions();

export default function ConjugationPractice({ onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const questions = useMemo(() => (shuffleOn ? shuffleArr(BASE_QUESTIONS) : BASE_QUESTIONS), [shuffleOn]);

  const [index, setIndex] = useState(0);
  const question = questions[index % questions.length];
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setIndex(0);
    setSelected(null);
  }, [questions]);

  const answered = selected !== null;
  const isCorrect = selected === question.correct;

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  const choose = (opt) => {
    if (answered) return;
    setSelected(opt);
    setScore((s) => ({ correct: s.correct + (opt === question.correct ? 1 : 0), total: s.total + 1 }));
    if (opt === question.correct) playCorrect();
    else playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => {
      speak(question.correct, { rate: 0.8 });
    }, 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline blue btn-sm" onClick={onBack}>
          ← กลับ
        </button>
        <p className="progress-label">
          {(index % questions.length) + 1} / {questions.length} · คะแนน {score.correct}/{score.total}
        </p>
      </div>

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่มลำดับคำถาม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="แสดงคำแปลภาษาไทย" checked={showThai} onChange={setShowThai} />
        <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      <div className="practice-card blue">
        <div className="verb-card">
          <p className="jp-text verb-dict" onClick={() => speak(question.verb.dict, { rate: 0.8 })} role="button" tabIndex={0}>
            {question.verb.dict} 🔊
          </p>
          <p className="verb-group th-text">{groupLabel(question.verb.group)}</p>
          {showThai && <p className="th-text verb-meaning">{question.verb.meaningTh}</p>}
        </div>

        <p className="th-text conjugation-instruction">
          จงผัน <span className="jp-text">{question.verb.dict}</span> เป็นรูป <span className="jp-text">{question.formLabel}</span>
        </p>

        <div className="quiz-options">
          {question.options.map((opt) => {
            let cls = "quiz-option";
            if (answered) {
              if (opt === question.correct) cls += " correct";
              else if (opt === selected) cls += " incorrect";
            }
            return (
              <button key={opt} className={cls} onClick={() => choose(opt)} disabled={answered}>
                <span className="jp-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {showRomaji && <p className="flashcard-romaji">{question.correctRomaji}</p>}

        {answered && (
          <>
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "ถูกต้อง! เก่งมาก 🎉" : "ยังไม่ถูก ลองอ่านคำอธิบายด้านล่าง 💪"}
            </p>
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
