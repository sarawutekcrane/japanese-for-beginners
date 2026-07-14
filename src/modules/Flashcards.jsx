import { useMemo, useState } from "react";
import Illustration from "../illustrations";
import { useSpeak } from "../hooks/useSpeech";
import { KANA_GROUPS, VOCAB_CATEGORIES, getKanaByGroup, getVocab, toCard } from "../utils/content";

function CategoryPicker({ onPick }) {
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

function FlashcardView({ selection, onBack }) {
  const { speak } = useSpeak();
  const [index, setIndex] = useState(0);

  const cards = useMemo(() => {
    const raw = selection.kind === "kana" ? getKanaByGroup(selection.script, selection.group) : getVocab(selection.category);
    return raw.map(toCard);
  }, [selection]);

  const card = cards[index];

  const say = () => speak(card.audioText, { rate: card.kind === "kana" ? 0.75 : 0.85 });

  const go = (delta) => {
    setIndex((i) => (i + delta + cards.length) % cards.length);
  };

  return (
    <div className="flashcards-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {selection.label} · {index + 1} / {cards.length}
      </p>

      <div className="flashcard" onClick={say} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && say()}>
        <div className="flashcard-illustration">
          <Illustration item={card.kind === "kana" ? { script: card.script, group: card.group, id: card.id } : { icon: card.icon, value: card.value, hex: card.hex, id: card.id }} />
        </div>
        <p className={`flashcard-text ${card.kind === "kana" ? "jp-text kana-big" : "jp-text"}`}>{card.display}</p>
        <p className="flashcard-hint th-text">แตะเพื่อฟังเสียง 🔊</p>
      </div>

      <div className="flashcard-nav">
        <button className="btn btn-round btn-outline" onClick={() => go(-1)} aria-label="ก่อนหน้า">
          ‹
        </button>
        <button className="btn btn-round" onClick={say} aria-label="ฟังเสียง">
          🔊
        </button>
        <button className="btn btn-round btn-outline" onClick={() => go(1)} aria-label="ถัดไป">
          ›
        </button>
      </div>
    </div>
  );
}

export default function Flashcards() {
  const [selection, setSelection] = useState(null);

  if (!selection) return <CategoryPicker onPick={setSelection} />;
  return <FlashcardView selection={selection} onBack={() => setSelection(null)} />;
}
