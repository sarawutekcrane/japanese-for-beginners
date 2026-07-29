import { useEffect, useState } from "react";
import HomeMenu from "./components/HomeMenu";
import SettingsPanel from "./components/SettingsPanel";
import Flashcards from "./modules/Flashcards";
import ListeningQuiz from "./modules/ListeningQuiz";
import SpeakingPractice from "./modules/SpeakingPractice";
import ConversationPractice from "./modules/ConversationPractice";
import SentencePatterns from "./modules/SentencePatterns";
import ThaiToJapaneseQuiz from "./modules/ThaiToJapaneseQuiz";
import { playClick } from "./utils/sound";

const CLICKABLE_SELECTOR = "button, .topic-card, .reply-option, .quiz-option, .chunk-pill";

// Whole-screen swipe-to-go-back: recognized starting from any point on screen,
// not just a left-edge strip. Elements with their own competing horizontal
// touch interaction (drag-reorder, horizontally-scrollable content) opt out via
// data-swipe-exempt="true" - a touch starting inside one is never tracked as a
// swipe-back candidate at all, so that element's own handling gets it untouched.
const SWIPE_EXEMPT_SELECTOR = '[data-swipe-exempt="true"]';
// Minimum horizontal travel before a swipe counts as a deliberate back gesture.
// Larger than the old edge-only version's threshold, since the gesture now has
// to distinguish itself from ordinary content interaction anywhere on screen,
// not just from the narrow band of touches that could start at the edge.
const SWIPE_MIN_DISTANCE_PX = 70;
// Horizontal movement must exceed vertical movement by at least this ratio -
// roughly a ±26 degree cone around pure horizontal - to count as a horizontal
// swipe rather than a vertical scroll. Tightened from the edge-only version's
// 1.5x, since there's no longer a narrow detection zone doing part of that
// disambiguation job for free.
const SWIPE_DIRECTION_RATIO = 2;
// Once movement looks like a real horizontal swipe-in-progress (past this small
// intent threshold, using the same ratio), we preventDefault() on touchmove so
// the page doesn't scroll and so iOS Safari's own native edge-swipe-back doesn't
// also fire alongside ours.
const SWIPE_INTENT_PX = 15;

function triggerBackNavigation() {
  // Whichever back-styled button is currently mounted for the deepest active
  // nesting level (only one such button is ever mounted at a time, since every
  // screen in this app is a plain state-based conditional render, never a
  // stack of simultaneously-mounted views) takes priority over the top-level
  // module -> home back button, so the gesture always goes back exactly one
  // level - the same level the visible back button already goes back to.
  const nested = document.querySelector('[data-swipe-back="true"]');
  if (nested) {
    nested.click();
    return;
  }
  const topLevel = document.querySelector(".back-btn");
  if (topLevel) topLevel.click();
}

const TITLES = {
  flashcards: "แฟลชการ์ด",
  listening: "แบบทดสอบฟัง",
  speaking: "ฝึกพูด",
  conversation: "ฝึกสนทนา",
  sentencePatterns: "แพทเทิร์นประโยค",
  thaiToJapanese: "แปลไทย → ญี่ปุ่น",
};

function App() {
  const [view, setView] = useState("home");
  const [instanceKey, setInstanceKey] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest(CLICKABLE_SELECTOR);
      if (el && !el.disabled) playClick();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    let tracking = false;
    // "committed" = movement so far is clearly a horizontal swipe, not a vertical
    // scroll - decided once from a small early threshold, then never revisited
    // until the next gesture, so we don't fight the user mid-scroll.
    let committed = false;
    let startX = 0;
    let startY = 0;

    const reset = () => {
      tracking = false;
      committed = false;
    };

    const onTouchStart = (e) => {
      const t = e.touches[0];
      if (!t || (e.target instanceof Element && e.target.closest(SWIPE_EXEMPT_SELECTOR))) {
        reset();
        return;
      }
      tracking = true;
      committed = false;
      startX = t.clientX;
      startY = t.clientY;
    };

    const onTouchMove = (e) => {
      if (!tracking) return;
      const t = e.touches[0];
      if (!t) return;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (!committed) {
        if (Math.abs(dx) < SWIPE_INTENT_PX && Math.abs(dy) < SWIPE_INTENT_PX) return;
        if (dx > 0 && dx > Math.abs(dy) * SWIPE_DIRECTION_RATIO) {
          committed = true;
        } else {
          // Vertical scroll (or a leftward drag) - let the browser handle it normally.
          reset();
          return;
        }
      }
      // Block page scroll and iOS Safari's own native edge-swipe-back so they
      // don't fire alongside our in-app back navigation.
      e.preventDefault();
    };

    const onTouchEnd = (e) => {
      if (!tracking) return;
      const wasCommitted = committed;
      const t = e.changedTouches[0];
      reset();
      if (!wasCommitted || !t) return;
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (dx > SWIPE_MIN_DISTANCE_PX && dx > Math.abs(dy) * SWIPE_DIRECTION_RATIO) {
        triggerBackNavigation();
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("touchcancel", reset, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", reset);
    };
  }, []);

  const goHome = () => {
    setView("home");
    setInstanceKey((k) => k + 1);
  };

  const openView = (next) => {
    setView(next);
    setInstanceKey((k) => k + 1);
  };

  return (
    <div className="app-shell">
      {view === "home" ? (
        <HomeMenu onSelect={openView} />
      ) : (
        <>
          <div className="top-bar">
            <button className="back-btn" onClick={goHome} aria-label="กลับหน้าหลัก">
              ←
            </button>
            <h2>{TITLES[view]}</h2>
            <button className="top-bar-settings-btn" onClick={() => setSettingsOpen(true)} aria-label="ตั้งค่า">
              ⚙️
            </button>
          </div>
          {view === "flashcards" && <Flashcards key={instanceKey} />}
          {view === "listening" && <ListeningQuiz key={instanceKey} />}
          {view === "speaking" && <SpeakingPractice key={instanceKey} />}
          {view === "conversation" && <ConversationPractice key={instanceKey} />}
          {view === "sentencePatterns" && <SentencePatterns key={instanceKey} />}
          {view === "thaiToJapanese" && <ThaiToJapaneseQuiz key={instanceKey} />}
          {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
        </>
      )}
    </div>
  );
}

export default App;
