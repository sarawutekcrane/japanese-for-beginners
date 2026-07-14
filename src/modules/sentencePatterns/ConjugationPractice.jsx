import { useEffect, useMemo, useState } from "react";
import Mascot from "../../components/Mascot";
import Toggle from "../../components/Toggle";
import { useSpeak } from "../../hooks/useSpeech";
import { getConjugationQuestions, groupLabel } from "../../utils/grammar";
import { shuffle as shuffleArr } from "../../utils/content";

export default function ConjugationPractice({ pattern, onLesson }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const baseQuestions = useMemo(() => getConjugationQuestions(pattern), [pattern]);
  const questions = useMemo(
    () => (shuffleOn ? shuffleArr(baseQuestions) : baseQuestions),
    [baseQuestions, shuffleOn]
  );

  const [index, setIndex] = useState(0);
  const question = questions[index % questions.length];
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setIndex(0);
    setSelected(null);
  }, [questions]);

  const answered = selected !== null;
  const isCorrect = selected === question.correct;

  const choose = (opt) => {
    if (answered) return;
    setSelected(opt);
    setScore((s) => ({ correct: s.correct + (opt === question.correct ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline blue btn-sm" onClick={onLesson}>
          🈺 กลับไปวิธีผันกริยา
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
        <Mascot mood={!answered ? "neutral" : isCorrect ? "excited" : "sad"} size={80} />

        <div className="verb-card">
          <p className="jp-text verb-dict" onClick={() => speak(question.verb.dict, { rate: 0.8 })} role="button" tabIndex={0}>
            {question.verb.dict} 🔊
          </p>
          <p className="verb-group th-text">{groupLabel(question.verb.group)}</p>
          {showThai && <p className="th-text verb-meaning">{question.verb.meaningTh}</p>}
        </div>

        <p className="th-text conjugation-instruction">
          จงผัน <span className="jp-text">{question.verb.dict}</span> เป็นรูป <span className="jp-text">{pattern.formLabel}</span>
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

        {answered && (
          <>
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "ถูกต้อง! เก่งมาก 🎉" : "ยังไม่ถูก ลองอ่านคำอธิบายด้านล่าง 💪"}
            </p>
            {showRomaji && <p className="flashcard-romaji">{question.correctRomaji}</p>}
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
