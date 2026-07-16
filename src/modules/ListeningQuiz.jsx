import { useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../components/Toggle";
import { useSpeak } from "../hooks/useSpeech";
import { VOCAB_CATEGORIES, getKanaCombinedDeck, getVocab, toCard, sample, shuffle as shuffleArr } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import { playKanaAudio } from "../utils/kanaAudio";
import { useReviewQueue } from "../utils/reviewQueue";

const EMPTY = [];

function PoolPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">あ / ア ตัวอักษร (Characters)</h3>
        <div className="picker-row">
          <button className="btn btn-outline btn-sm" onClick={() => onPick({ kind: "kana", script: "hiragana", label: "Hiragana (ครบทุกกลุ่ม)" })}>
            あ Hiragana
          </button>
          <button className="btn btn-outline blue btn-sm" onClick={() => onPick({ kind: "kana", script: "katakana", label: "Katakana (ครบทุกกลุ่ม)" })}>
            ア Katakana
          </button>
        </div>
      </section>
      <section className="picker-section">
        <h3 className="picker-heading">📚 คำศัพท์ (Vocabulary)</h3>
        <div className="picker-row">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="btn btn-sm" onClick={() => onPick({ kind: "vocab", category: c.id, label: c.label })}>
              {c.emoji} {c.label}
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

function QuizView({ selection, onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [pool] = useState(() => {
    const raw = selection.kind === "kana" ? getKanaCombinedDeck(selection.script) : getVocab(selection.category);
    return raw.map(toCard);
  });

  const [cursor, setCursor] = useState(0);
  const review = useReviewQueue(shuffleOn ? pool : EMPTY);
  const activeAnswer = shuffleOn ? review.current : pool[cursor % pool.length];

  const [selectedId, setSelectedId] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const question = useMemo(() => (activeAnswer ? buildQuestion(pool, activeAnswer) : null), [pool, activeAnswer]);

  const isCorrect = question && selectedId === question.answer.id;
  const answered = selectedId !== null;
  const finished = shuffleOn && review.finished;

  // Auto-reveal the Thai translation and Japanese reading on a correct
  // answer, as if the toggles below were switched on.
  const effectiveShowThai = showThai || (answered && isCorrect);
  const effectiveShowRomaji = showRomaji || (answered && isCorrect);
  const effectiveRevealed = revealed || (answered && isCorrect);

  const play = () => {
    const answer = question.answer;
    if (answer.kind === "kana") {
      playKanaAudio(answer.script, answer, { onFallback: () => speak(answer.audioText, { rate: 0.75 }) });
    } else {
      speak(answer.audioText, { rate: 0.85 });
    }
  };

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  useEffect(() => {
    setSelectedId(null);
    setRevealed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffleOn]);

  const choose = (opt) => {
    if (answered) return;
    setSelectedId(opt.id);
    setScore((s) => ({ correct: s.correct + (opt.id === question.answer.id ? 1 : 0), total: s.total + 1 }));
    if (opt.id === question.answer.id) playCorrect();
    else playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(play, 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    if (shuffleOn) review.submit(isCorrect);
    else setCursor((c) => c + 1);
    setSelectedId(null);
    setRevealed(false);
  };

  const restart = () => {
    review.restart();
    setScore({ correct: 0, total: 0 });
    setSelectedId(null);
    setRevealed(false);
  };

  return (
    <div className="quiz-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {selection.label} · คะแนน {score.correct} / {score.total}
        {shuffleOn && ` · ตอบถูกครบแล้ว ${review.totalCount - review.remainingCount} / ${review.totalCount}`}
      </p>

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่มลำดับคำถาม (Shuffle)" checked={shuffleOn} onChange={setShuffleOn} />
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
          <button className="btn btn-round btn-blue" onClick={() => play()} aria-label="เล่นเสียง">
            🔊
          </button>
          <p className="th-text quiz-instruction">ฟังเสียงแล้วเลือกตัวอักษร/คำที่ตรงกัน</p>

          <div className="quiz-options">
            {question.options.map((opt) => {
              let cls = "quiz-option";
              if (answered) {
                if (opt.id === question.answer.id) cls += " correct";
                else if (opt.id === selectedId) cls += " incorrect";
              }
              return (
                <button key={opt.id} className={cls} onClick={() => choose(opt)} disabled={answered}>
                  <span className="jp-text">{opt.display}</span>
                  {effectiveShowRomaji && <span className="quiz-option-hint">{opt.romaji}</span>}
                  {effectiveShowThai && <span className="quiz-option-hint th-text">{opt.thai}</span>}
                </button>
              );
            })}
          </div>

          <div className="toggle-group blue">
            <Toggle label={selection.kind === "kana" ? "แสดงคำอ่านไทย" : "แสดงคำแปลภาษาไทย"} checked={showThai} onChange={setShowThai} />
            <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
          </div>

          {answered && (
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "เก่งมาก! ถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองฟังใหม่อีกครั้ง 💪"}
            </p>
          )}

          {effectiveRevealed && (
            <p className="quiz-reveal jp-text">
              เฉลย: {question.answer.display}
              {question.answer.romaji ? ` (${question.answer.romaji})` : ""}
            </p>
          )}

          <div className="quiz-actions">
            <button className="btn btn-outline btn-sm" onClick={() => setRevealed(true)}>
              เฉลยคำตอบ
            </button>
            {answered && (
              <button className="btn btn-success btn-sm" onClick={next}>
                ข้อถัดไป →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ListeningQuiz() {
  const [selection, setSelection] = useState(null);

  if (!selection) return <PoolPicker onPick={setSelection} />;
  return <QuizView selection={selection} onBack={() => setSelection(null)} />;
}
