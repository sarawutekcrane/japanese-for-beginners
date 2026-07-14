import { useMemo, useState } from "react";
import Mascot from "../components/Mascot";
import { useSpeak } from "../hooks/useSpeech";
import { KANA_GROUPS, VOCAB_CATEGORIES, getKanaByGroup, getVocab, toCard, sample } from "../utils/content";

function PoolPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">あ Hiragana</h3>
        <div className="picker-row">
          {KANA_GROUPS.map((g) => (
            <button key={g.id} className="btn btn-outline btn-sm" onClick={() => onPick({ kind: "kana", script: "hiragana", group: g.id, label: `Hiragana · ${g.label}` })}>
              {g.labelJa}
            </button>
          ))}
        </div>
      </section>
      <section className="picker-section">
        <h3 className="picker-heading">ア Katakana</h3>
        <div className="picker-row">
          {KANA_GROUPS.map((g) => (
            <button key={g.id} className="btn btn-outline blue btn-sm" onClick={() => onPick({ kind: "kana", script: "katakana", group: g.id, label: `Katakana · ${g.label}` })}>
              {g.labelJa}
            </button>
          ))}
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

function buildQuestion(pool) {
  const [answer, ...distractors] = sample(pool, 4);
  const options = [answer, ...distractors].sort(() => Math.random() - 0.5);
  return { answer, options };
}

function QuizView({ selection, onBack }) {
  const { speak } = useSpeak();
  const pool = useMemo(() => {
    const raw = selection.kind === "kana" ? getKanaByGroup(selection.script, selection.group) : getVocab(selection.category);
    return raw.map(toCard);
  }, [selection]);

  const [question, setQuestion] = useState(() => buildQuestion(pool));
  const [selectedId, setSelectedId] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const isCorrect = selectedId === question.answer.id;
  const answered = selectedId !== null;

  const play = (rate) => speak(question.answer.audioText, { rate: rate ?? (question.answer.kind === "kana" ? 0.75 : 0.85) });

  const choose = (opt) => {
    if (answered) return;
    setSelectedId(opt.id);
    setScore((s) => ({ correct: s.correct + (opt.id === question.answer.id ? 1 : 0), total: s.total + 1 }));
  };

  const next = () => {
    setQuestion(buildQuestion(pool));
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
      </p>

      <div className="quiz-card">
        <Mascot mood={!answered ? "neutral" : isCorrect ? "excited" : "sad"} size={90} />
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
              </button>
            );
          })}
        </div>

        {answered && (
          <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
            {isCorrect ? "เก่งมาก! ถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองฟังใหม่อีกครั้ง 💪"}
          </p>
        )}

        {revealed && (
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
    </div>
  );
}

export default function ListeningQuiz() {
  const [selection, setSelection] = useState(null);
  if (!selection) return <PoolPicker onPick={setSelection} />;
  return <QuizView selection={selection} onBack={() => setSelection(null)} />;
}
