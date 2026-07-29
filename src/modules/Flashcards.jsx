import { useEffect, useMemo, useState } from "react";
import Illustration from "../illustrations";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import { useSpeak } from "../hooks/useSpeech";
import { useSettings } from "../context/SettingsContext";
import { VOCAB_CATEGORIES, getKanaCombinedDeck, getVocab, toCard, shuffle as shuffleArr } from "../utils/content";
import { playKanaAudio } from "../utils/kanaAudio";
import { groupLabel } from "../utils/grammar";

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
        <div className="vocab-grid">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="vocab-card" onClick={() => onPick({ kind: "vocab", category: c.id, label: c.label })}>
              <span className="vocab-emoji">{c.emoji}</span>
              <span className="vocab-label">{c.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function FlashcardView({ selection, onBack }) {
  const { speak } = useSpeak();
  const { speechRate } = useSettings();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [index, setIndex] = useState(0);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [round, setRound] = useState(0);
  const [completed, setCompleted] = useState(false);

  const cards = useMemo(() => {
    const raw = selection.kind === "kana" ? getKanaCombinedDeck(selection.script) : getVocab(selection.category);
    const base = raw.map(toCard);
    return shuffleOn ? shuffleArr(base) : base;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, shuffleOn, round]);

  useEffect(() => {
    setIndex(0);
    setCompleted(false);
  }, [cards]);

  const card = cards[index];

  const say = () => {
    if (card.kind === "kana") {
      playKanaAudio(card.script, card, { rate: speechRate, onFallback: () => speak(card.audioText) });
    } else {
      speak(card.audioText);
    }
  };

  const go = (delta) => {
    if (shuffleOn) {
      if (delta === 1 && index === cards.length - 1) {
        setCompleted(true);
        return;
      }
      if (delta === -1 && index === 0) return;
    }
    setIndex((i) => (i + delta + cards.length) % cards.length);
  };

  const restart = () => {
    setRound((r) => r + 1);
  };

  return (
    <div className="flashcards-view">
      <button className="btn btn-outline btn-sm" onClick={onBack} data-swipe-back="true">
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {selection.label} · {index + 1} / {cards.length}
      </p>

      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="แปล" checked={showThai} onChange={setShowThai} />
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {completed ? (
        <div className="flashcard">
          <p className="th-text conversation-complete">คุณดูครบทุกการ์ดในชุดนี้แล้ว! 🎉🌸</p>
          <button className="btn btn-success btn-sm" onClick={restart}>
            🔁 เริ่มรอบใหม่ (สุ่มใหม่)
          </button>
        </div>
      ) : (
        <>
          <div className="flashcard" onClick={say} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && say()}>
            <div className="flashcard-illustration">
              <Illustration item={card.kind === "kana" ? { script: card.script, group: card.group, char: card.display, id: card.id } : { icon: card.icon, value: card.value, hex: card.hex, id: card.id }} />
            </div>
            {card.kind !== "kana" && (
              <JapaneseText as="p" className="flashcard-text jp-text" kana={card.display} kanji={card.kanji} />
            )}
            {card.verbGroup != null && <p className="verb-group th-text">{groupLabel(card.verbGroup)}</p>}
            {showRomaji && <p className="flashcard-romaji">{card.romaji}</p>}
            {showThai && <p className="flashcard-thai th-text">{card.thai}</p>}
            <p className="flashcard-hint th-text">แตะเพื่อฟังเสียง 🔊</p>
          </div>

          <div className="flashcard-nav">
            <button className="btn btn-round btn-outline" onClick={() => go(-1)} aria-label="ก่อนหน้า" disabled={shuffleOn && index === 0}>
              ‹
            </button>
            <button className="btn btn-round" onClick={say} aria-label="ฟังเสียง">
              🔊
            </button>
            <button className="btn btn-round btn-outline" onClick={() => go(1)} aria-label="ถัดไป">
              ›
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function Flashcards() {
  const [selection, setSelection] = useState(null);

  if (!selection) return <CategoryPicker onPick={setSelection} />;
  return <FlashcardView selection={selection} onBack={() => setSelection(null)} />;
}
