import { useEffect, useMemo, useRef, useState } from "react";
import Illustration from "../illustrations";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import InAppBrowserNotice from "../components/InAppBrowserNotice";
import { useSpeak, useSpeechRecognition, matchesJapanese, isKanaOnly, kanjiToKana } from "../hooks/useSpeech";
import { VOCAB_CATEGORIES, getVocab, toCard } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import { useReviewQueue } from "../utils/reviewQueue";

const NUMERIC_ONLY = /^\d+$/;
const EMPTY = [];

function CategoryPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">📚 เลือกหมวดคำศัพท์เพื่อฝึกพูด</h3>
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

const STATUS = { idle: "idle", listening: "listening", match: "match", nomatch: "nomatch", error: "error" };

function SpeakingView({ category, onBack }) {
  const { speak } = useSpeak();
  const { supported, listening, start } = useSpeechRecognition();

  const [shuffleOn, setShuffleOn] = useState(false);
  const baseCards = useMemo(() => getVocab(category.id).map(toCard), [category]);
  const review = useReviewQueue(shuffleOn ? baseCards : EMPTY);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(STATUS.idle);
  const [heard, setHeard] = useState("");
  const [showThai, setShowThai] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);

  useEffect(() => {
    setIndex(0);
    setStatus(STATUS.idle);
    setHeard("");
  }, [category, shuffleOn]);

  const finished = shuffleOn && review.finished;
  const card = shuffleOn ? review.current : baseCards[index % baseCards.length];

  // Chrome's speech recognition transcribes spoken number words (e.g. "ろく")
  // as bare Arabic numerals (e.g. "6"). This maps each number card's value
  // back to its kana reading, for both matching and display.
  const numberKanaMap = useMemo(() => {
    const map = {};
    for (const c of baseCards) {
      if (c.value != null) map[c.value] = c.reading || c.answerText;
    }
    return map;
  }, [baseCards]);

  const hearExample = () => speak(card.audioText);

  const speakTimeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(speakTimeoutRef.current), []);

  const record = () => {
    setStatus(STATUS.listening);
    setHeard("");
    clearTimeout(speakTimeoutRef.current);
    start({
      onResult: (transcript, alternatives = [transcript]) => {
        const numericAlt = alternatives.find((alt) => NUMERIC_ONLY.test(alt.trim()));
        const numericValue = numericAlt != null ? parseInt(numericAlt, 10) : null;

        // Prefer showing a kana-only alternative (Chrome often returns kanji
        // for common words even though this app only teaches kana readings).
        // Convert a recognized digit or kanji spelling back to kana so the
        // displayed text is always Japanese, never a raw number or kanji.
        let displayText;
        if (numericValue != null && numberKanaMap[numericValue]) {
          displayText = numberKanaMap[numericValue];
        } else {
          const kanaAlt = alternatives.find((alt) => isKanaOnly(alt) && !NUMERIC_ONLY.test(alt.trim()));
          displayText = kanjiToKana(kanaAlt || transcript);
        }
        setHeard(displayText);

        const ok =
          alternatives.some(
            (alt) => matchesJapanese(alt, card.answerText) || matchesJapanese(alt, card.reading || "")
          ) || (card.value != null && numericValue === card.value);
        setStatus(ok ? STATUS.match : STATUS.nomatch);
        if (ok) playCorrect();
        else playIncorrect();
        speakTimeoutRef.current = setTimeout(() => {
          speak(card.audioText);
        }, 500);
      },
      onError: () => setStatus(STATUS.error),
    });
  };

  const retry = () => {
    setStatus(STATUS.idle);
    setHeard("");
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    if (shuffleOn) review.submit(status === STATUS.match);
    else setIndex((i) => (i + 1) % baseCards.length);
    setStatus(STATUS.idle);
    setHeard("");
  };

  const restart = () => {
    review.restart();
    setIndex(0);
    setStatus(STATUS.idle);
    setHeard("");
  };

  // Auto-reveal the Thai translation and Japanese reading on a correct
  // answer, as if the toggles below were switched on.
  const effectiveShowRomaji = showRomaji || status === STATUS.match;
  const effectiveShowThai = showThai || status === STATUS.match;

  return (
    <div className="speaking-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <p className="progress-label">
        {category.label} ·{" "}
        {shuffleOn ? `ตอบถูกครบแล้ว ${review.totalCount - review.remainingCount} / ${review.totalCount}` : `${index + 1} / ${baseCards.length}`}
      </p>

      <div className="toggle-group">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        <Toggle label="แปล" checked={showThai} onChange={setShowThai} />
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      {finished ? (
        <div className="speaking-card">
          <p className="th-text conversation-complete">เก่งมาก! คุณฝึกพูดครบทุกคำในหมวดนี้แล้ว 🎉🌸</p>
          <button className="btn btn-success btn-sm" onClick={restart}>
            🔁 เริ่มรอบใหม่ (สุ่มใหม่)
          </button>
        </div>
      ) : (
        <div className="speaking-card">
          <div className="flashcard-illustration">
            <Illustration item={{ icon: card.icon, value: card.value, hex: card.hex, id: card.id }} />
          </div>

          <JapaneseText as="p" className="flashcard-text jp-text" kana={card.answerText} kanji={card.kanji} />

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

          {effectiveShowRomaji && <p className="flashcard-romaji">{card.romaji}</p>}
          {effectiveShowThai && <p className="flashcard-thai th-text">{card.thai}</p>}

          <div className="quiz-actions">
            <button className="btn btn-success btn-sm" onClick={next}>
              คำถัดไป →
            </button>
          </div>
        </div>
      )}

      <p className="speaking-disclaimer th-text">
        💡 ฟีเจอร์นี้ทำงานได้ดีที่สุดบน <strong>Google Chrome บนคอมพิวเตอร์</strong> และเป็นเพียงการตรวจสอบคร่าวๆ
        ไม่ใช่การประเมินสำเนียงหรือการออกเสียงที่แม่นยำ
      </p>
    </div>
  );
}

export default function SpeakingPractice() {
  const [category, setCategory] = useState(null);

  return (
    <>
      <InAppBrowserNotice />
      {!category ? (
        <CategoryPicker onPick={setCategory} />
      ) : (
        <SpeakingView category={category} onBack={() => setCategory(null)} />
      )}
    </>
  );
}
