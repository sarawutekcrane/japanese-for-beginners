import { useEffect, useMemo, useState } from "react";
import Illustration from "../illustrations";
import Toggle from "../components/Toggle";
import { useSpeak } from "../hooks/useSpeech";
import { VOCAB_CATEGORIES, getKanaCombinedDeck, getVocab, toCard, shuffle as shuffleArr } from "../utils/content";

function CategoryPicker({ onPick }) {
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

function FlashcardView({ selection, onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [index, setIndex] = useState(0);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const cards = useMemo(() => {
    const raw = selection.kind === "kana" ? getKanaCombinedDeck(selection.script) : getVocab(selection.category);
    const base = raw.map(toCard);
    return shuffleOn ? shuffleArr(base) : base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, shuffleOn]);

  useEffect(() => {
    setIndex(0);
    setShowThai(false);
    setShowRomaji(false);
  }, [cards]);

  const card = cards[index];

  const say = () => speak(card.audioText, { rate: card.kind === "kana" ? 0.75 : 0.85 });

  const go = (delta) => {
    setIndex((i) => (i + delta + cards.length) % cards.length);
    setShowThai(false);
    setShowRomaji(false);
  };

  const isLongKana = card.kind === "kana" && card.display.length > 2;

  return (
    <div className="flashcards-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {selection.label} · {index + 1} / {cards.length}
      </p>

      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่มลำดับการ์ด (Shuffle)" checked={shuffleOn} onChange={setShuffleOn} />
      </div>

      <div className="flashcard" onClick={say} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && say()}>
        <div className="flashcard-illustration">
          <Illustration item={card.kind === "kana" ? { script: card.script, group: card.group, id: card.id } : { icon: card.icon, value: card.value, hex: card.hex, id: card.id }} />
        </div>
        <p className={`flashcard-text jp-text ${card.kind === "kana" ? (isLongKana ? "" : "kana-big") : ""}`}>{card.display}</p>
        {showRomaji && <p className="flashcard-romaji">{card.romaji}</p>}
        {showThai && <p className="flashcard-thai th-text">{card.thai}</p>}
        <p className="flashcard-hint th-text">แตะเพื่อฟังเสียง 🔊</p>
      </div>

      <div className="toggle-group">
        <Toggle label={card.kind === "kana" ? "แสดงคำอ่านไทย" : "แสดงคำแปลภาษาไทย"} checked={showThai} onChange={setShowThai} />
        <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
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
