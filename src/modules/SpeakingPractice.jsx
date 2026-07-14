import { useState } from "react";
import Mascot from "../components/Mascot";
import Illustration from "../illustrations";
import Toggle from "../components/Toggle";
import { useSpeak, useSpeechRecognition, matchesJapanese, isKanaOnly } from "../hooks/useSpeech";
import { VOCAB_CATEGORIES, getVocab, toCard, shuffle as shuffleArr } from "../utils/content";

function CategoryPicker({ shuffleOn, onShuffleChange, onPick }) {
  return (
    <div className="picker">
      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่มลำดับคำศัพท์ (Shuffle)" checked={shuffleOn} onChange={onShuffleChange} />
      </div>
      <section className="picker-section">
        <h3 className="picker-heading">📚 เลือกหมวดคำศัพท์เพื่อฝึกพูด</h3>
        <div className="picker-row">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="btn btn-sm" onClick={() => onPick(c)}>
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

const STATUS = { idle: "idle", listening: "listening", match: "match", nomatch: "nomatch", error: "error" };

function SpeakingView({ category, shuffleOn, onBack }) {
  const { speak } = useSpeak();
  const { supported, listening, start } = useSpeechRecognition();

  const [cards] = useState(() => {
    const base = getVocab(category.id).map(toCard);
    return shuffleOn ? shuffleArr(base) : base;
  });
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(STATUS.idle);
  const [heard, setHeard] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  const card = cards[index];

  const hearExample = () => speak(card.audioText, { rate: 0.85 });

  const record = () => {
    setStatus(STATUS.listening);
    setHeard("");
    start({
      onResult: (transcript, alternatives = [transcript]) => {
        // Prefer showing a kana-only alternative (Chrome often returns kanji
        // for common words even though this app only teaches kana readings).
        const displayText = alternatives.find(isKanaOnly) || transcript;
        setHeard(displayText);
        const ok = alternatives.some(
          (alt) => matchesJapanese(alt, card.answerText) || matchesJapanese(alt, card.reading || "")
        );
        setStatus(ok ? STATUS.match : STATUS.nomatch);
      },
      onError: () => setStatus(STATUS.error),
    });
  };

  const retry = () => {
    setStatus(STATUS.idle);
    setHeard("");
  };

  const next = () => {
    setIndex((i) => (i + 1) % cards.length);
    setStatus(STATUS.idle);
    setHeard("");
    setRevealed(false);
  };

  const mood = status === STATUS.match ? "excited" : status === STATUS.nomatch ? "sad" : status === STATUS.listening ? "wink" : "neutral";

  return (
    <div className="speaking-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {category.label} · {index + 1} / {cards.length}
      </p>

      <div className="speaking-card">
        <Mascot mood={mood} size={90} />
        <div className="flashcard-illustration">
          <Illustration item={{ icon: card.icon, value: card.value, hex: card.hex, id: card.id }} />
        </div>

        <button className="btn btn-outline btn-sm" onClick={hearExample}>
          🔊 ฟังตัวอย่างเสียง
        </button>

        {!supported && (
          <p className="speaking-note th-text">
            เบราว์เซอร์นี้ไม่รองรับการรู้จำเสียงพูด กรุณาลองใช้ Google Chrome บนคอมพิวเตอร์
          </p>
        )}

        <button className="btn btn-round" disabled={!supported || listening} onClick={record} aria-label="พูดออกเสียง">
          🎤
        </button>

        {status === STATUS.listening && <p className="th-text">กำลังฟัง... พูดคำศัพท์ได้เลย</p>}

        {status === STATUS.match && (
          <p className="quiz-feedback feedback-correct th-text">เยี่ยมมาก! ออกเสียงตรงกันเลย 🎉</p>
        )}
        {status === STATUS.nomatch && (
          <div className="speaking-feedback">
            <p className="quiz-feedback feedback-incorrect th-text">ยังไม่ตรงนะ ลองอีกครั้ง 💪</p>
            {heard && <p className="th-text speaking-heard">ระบบได้ยินว่า: 「{heard}」</p>}
          </div>
        )}
        {status === STATUS.error && <p className="th-text speaking-heard">ไม่ได้ยินเสียง กรุณาลองใหม่อีกครั้ง</p>}

        {(status === STATUS.nomatch || status === STATUS.error) && (
          <button className="btn btn-outline btn-sm" onClick={retry}>
            🔁 ลองอีกครั้ง
          </button>
        )}

        {revealed && (
          <div className="quiz-reveal jp-text">
            <p>เฉลย: {card.answerText}</p>
          </div>
        )}
        {showRomaji && <p className="flashcard-romaji">{card.romaji}</p>}
        {showThai && <p className="flashcard-thai th-text">{card.thai}</p>}

        <div className="toggle-group">
          <Toggle label="แสดงคำแปลภาษาไทย" checked={showThai} onChange={setShowThai} />
          <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
        </div>

        <div className="quiz-actions">
          <button className="btn btn-outline btn-sm" onClick={() => setRevealed(true)}>
            เฉลยคำตอบ
          </button>
          <button className="btn btn-success btn-sm" onClick={next}>
            คำถัดไป →
          </button>
        </div>
      </div>

      <p className="speaking-disclaimer th-text">
        💡 ฟีเจอร์นี้ทำงานได้ดีที่สุดบน <strong>Google Chrome บนคอมพิวเตอร์</strong> และเป็นเพียงการตรวจสอบคร่าวๆ
        ไม่ใช่การประเมินสำเนียงหรือการออกเสียงที่แม่นยำ
      </p>
    </div>
  );
}

export default function SpeakingPractice() {
  const [category, setCategory] = useState(null);
  const [shuffleOn, setShuffleOn] = useState(false);

  if (!category) return <CategoryPicker shuffleOn={shuffleOn} onShuffleChange={setShuffleOn} onPick={setCategory} />;
  return <SpeakingView category={category} shuffleOn={shuffleOn} onBack={() => setCategory(null)} />;
}
