import { useEffect, useRef, useState } from "react";
import Toggle from "../../components/Toggle";
import JapaneseText from "../../components/JapaneseText";
import { useSpeak } from "../../hooks/useSpeech";
import { getAllConjugationQuestions, groupLabel, kanjiForVerbForm } from "../../utils/grammar";
import { playCorrect, playIncorrect } from "../../utils/sound";
import { useReviewQueue } from "../../utils/reviewQueue";

const BASE_QUESTIONS = getAllConjugationQuestions();
const EMPTY = [];

export default function ConjugationPractice({ onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const review = useReviewQueue(shuffleOn ? BASE_QUESTIONS : EMPTY);
  const [index, setIndex] = useState(0);
  const finished = shuffleOn && review.finished;
  const question = shuffleOn ? review.current : BASE_QUESTIONS[index % BASE_QUESTIONS.length];
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setIndex(0);
    setSelected(null);
  }, [shuffleOn]);

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
    if (shuffleOn) review.submit(isCorrect);
    else setIndex((i) => i + 1);
  };

  const restart = () => {
    review.restart();
    setIndex(0);
    setSelected(null);
    setScore({ correct: 0, total: 0 });
  };

  return (
    <div className="practice-view">
      <div className="practice-topbar">
        <button className="btn btn-outline blue btn-sm" onClick={onBack}>
          ← กลับ
        </button>
        <p className="progress-label">
          {shuffleOn
            ? `ผันถูกครบแล้ว ${review.totalCount - review.remainingCount} / ${review.totalCount}`
            : `${(index % BASE_QUESTIONS.length) + 1} / ${BASE_QUESTIONS.length}`}{" "}
          · คะแนน {score.correct}/{score.total}
        </p>
      </div>

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่มลำดับคำถาม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="แสดงคำแปลภาษาไทย" checked={showThai} onChange={setShowThai} />
        <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {finished ? (
        <div className="practice-card blue">
          <p className="th-text conversation-complete">เก่งมาก! คุณผันกริยาถูกครบทุกข้อในชุดนี้แล้ว 🎉🌸</p>
          <button className="btn btn-success btn-sm" onClick={restart}>
            🔁 เริ่มรอบใหม่ (สุ่มใหม่)
          </button>
        </div>
      ) : (
        <div className="practice-card blue">
          <div className="verb-card">
            <p className="jp-text verb-dict" onClick={() => speak(question.verb.dict, { rate: 0.8 })} role="button" tabIndex={0}>
              <JapaneseText kana={question.verb.dict} kanji={kanjiForVerbForm(question.verb.dict)} /> 🔊
            </p>
            <p className="verb-group th-text">{groupLabel(question.verb.group)}</p>
            {showThai && <p className="th-text verb-meaning">{question.verb.meaningTh}</p>}
          </div>

          <p className="th-text conjugation-instruction">
            จงผัน <JapaneseText kana={question.verb.dict} kanji={kanjiForVerbForm(question.verb.dict)} className="jp-text" /> เป็นรูป{" "}
            <span className="jp-text">{question.formLabel}</span>
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
                  <JapaneseText className="jp-text" kana={opt} kanji={kanjiForVerbForm(opt)} />
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
      )}
    </div>
  );
}
