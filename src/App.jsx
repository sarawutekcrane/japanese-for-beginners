import { useState } from "react";
import HomeMenu from "./components/HomeMenu";
import Flashcards from "./modules/Flashcards";
import ListeningQuiz from "./modules/ListeningQuiz";
import SpeakingPractice from "./modules/SpeakingPractice";
import ConversationPractice from "./modules/ConversationPractice";
import SentencePatterns from "./modules/SentencePatterns";

const TITLES = {
  flashcards: "แฟลชการ์ด",
  listening: "แบบทดสอบฟัง",
  speaking: "ฝึกพูด",
  conversation: "ฝึกสนทนา",
  sentencePatterns: "แพทเทิร์นประโยค",
};

function App() {
  const [view, setView] = useState("home");
  const [instanceKey, setInstanceKey] = useState(0);

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
          </div>
          {view === "flashcards" && <Flashcards key={instanceKey} />}
          {view === "listening" && <ListeningQuiz key={instanceKey} />}
          {view === "speaking" && <SpeakingPractice key={instanceKey} />}
          {view === "conversation" && <ConversationPractice key={instanceKey} />}
          {view === "sentencePatterns" && <SentencePatterns key={instanceKey} />}
        </>
      )}
    </div>
  );
}

export default App;
