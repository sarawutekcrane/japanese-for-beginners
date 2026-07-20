import { useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import { useSpeak } from "../hooks/useSpeech";
import { VOCAB_CATEGORIES, getVocab, toCard, sample, shuffle as shuffleArr } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import { useReviewQueue } from "../utils/reviewQueue";

const EMPTY = [];

function CategoryPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">📚 เลือกหมวดคำศัพท์</h3>
        <div className="vocab-grid">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="vocab-card" onClick={() => onPick(c)}>
              <span className="vocab-emoji">{c.emoji}</span>
              <span className="vocab-label">{c.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function buildQuestion(pool, answer) {
  const distractors = sample(
    pool.filter((p) => p.id !== answer.id),
    3
  );
  const options = shuffleArr([answer, ...distractors]);
  return { answer, options };
}

function QuizView({ category, onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [pool] = useState(() => getVocab(category.id).map(toCard));

  const [cursor, setCursor] = useState(0);
  const review = useReviewQueue(shuffleOn ? pool : EMPTY);
  const activeAnswer = shuffleOn ? review.current : pool[cursor % pool.length];

  const [selectedId, setSelectedId] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const question = useMemo(() => (activeAnswer ? buildQuestion(pool, activeAnswer) : null), [pool, activeAnswer]);

  const isCorrect = question && selectedId === question.answer.id;
  const answered = selectedId !== null;
  const finished = shuffleOn && review.finished;

  const playOption = (card) => speak(card.audioText);

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  useEffect(() => {
    setSelectedId(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffleOn]);

  const choose = (opt) => {
    if (answered) return;
    setSelectedId(opt.id);
    setScore((s) => ({ correct: s.correct + (opt.id === question.answer.id ? 1 : 0), total: s.total + 1 }));
    if (opt.id === question.answer.id) playCorrect();
    else playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => playOption(question.answer), 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    if (shuffleOn) review.submit(isCorrect);
    else setCursor((c) => c + 1);
    setSelectedId(null);
  };

  const restart = () => {
    review.restart();
    setScore({ correct: 0, total: 0 });
    setSelectedId(null);
  };

  return (
    <div className="quiz-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {category.label} · คะแนน {score.correct} / {score.total}
        {shuffleOn && ` · ตอบถูกครบแล้ว ${review.totalCount - review.remainingCount} / ${review.totalCount}`}
      </p>

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {finished ? (
        <div className="quiz-card">
          <p className="th-text conversation-complete">เก่งมาก! คุณตอบถูกครบทุกคำในชุดนี้แล้ว 🎉🌸</p>
          <button className="btn btn-success btn-sm" onClick={restart}>
            🔁 เริ่มรอบใหม่ (สุ่มใหม่)
          </button>
        </div>
      ) : (
        <div className="quiz-card">
          <p className="th-text quiz-instruction">คำนี้ภาษาญี่ปุ่นเรียกว่าอะไร?</p>
          <p className="th-text thai-prompt">{question.answer.thai}</p>

          <div className="quiz-options">
            {question.options.map((opt) => {
              let cls = "quiz-option";
              if (answered) {
                if (opt.id === question.answer.id) cls += " correct";
                else if (opt.id === selectedId) cls += " incorrect";
              }
              return (
                <div key={opt.id} className="quiz-option-cell">
                  <button className={cls} onClick={() => choose(opt)} disabled={answered}>
                    <JapaneseText className="jp-text" kana={opt.display} kanji={opt.kanji} />
                    {showRomaji && <span className="quiz-option-hint">{opt.romaji}</span>}
                  </button>
                  <button
                    type="button"
                    className="option-audio-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      playOption(opt);
                    }}
                    aria-label="ฟังเสียง"
                  >
                    🔊
                  </button>
                </div>
              );
            })}
          </div>

          {answered && (
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "เก่งมาก! ถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองฟังคำตอบที่ถูกต้องดู 💪"}
            </p>
          )}

          {answered && (
            <div className="quiz-actions">
              <button className="btn btn-success btn-sm" onClick={next}>
                ข้อถัดไป →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ThaiToJapaneseQuiz() {
  const [category, setCategory] = useState(null);

  if (!category) return <CategoryPicker onPick={setCategory} />;
  return <QuizView category={category} onBack={() => setCategory(null)} />;
}
