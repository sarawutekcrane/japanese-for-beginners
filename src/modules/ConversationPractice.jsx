import { useEffect, useState } from "react";
import Mascot from "../components/Mascot";
import { useSpeak } from "../hooks/useSpeech";
import conversations from "../data/conversations.json";

function TopicPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">💬 เลือกสถานการณ์ที่อยากฝึก</h3>
        <div className="topic-grid">
          {conversations.map((topic) => (
            <button key={topic.id} className="topic-card" onClick={() => onPick(topic)}>
              <span className="module-emoji">{topic.emoji}</span>
              <span className="module-title">{topic.title}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function DialogueView({ topic, onBack }) {
  const { speak } = useSpeak();
  const [nodeIndex, setNodeIndex] = useState(0);
  const [showRomaji, setShowRomaji] = useState(false);
  const [history, setHistory] = useState([]);
  const [finished, setFinished] = useState(false);

  const node = topic.nodes[nodeIndex];

  useEffect(() => {
    if (node) speak(node.system.japanese, { rate: 0.85 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, nodeIndex]);

  const replay = () => node && speak(node.system.japanese, { rate: 0.85 });

  const choose = (opt) => {
    setHistory((h) => [...h, { system: node.system, reply: opt }]);
    if (nodeIndex + 1 < topic.nodes.length) {
      setNodeIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setNodeIndex(0);
    setHistory([]);
    setFinished(false);
  };

  return (
    <div className="conversation-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนสถานการณ์
      </button>

      <p className="progress-label">
        {topic.emoji} {topic.title} · {Math.min(nodeIndex + 1, topic.nodes.length)} / {topic.nodes.length}
      </p>

      <label className="romaji-toggle th-text">
        <input type="checkbox" checked={showRomaji} onChange={(e) => setShowRomaji(e.target.checked)} />
        แสดง Romaji
      </label>

      <div className="conversation-history scroll-x-safe">
        {history.map((h, i) => (
          <div key={i} className="history-turn">
            <div className="bubble bubble-system">
              <p className="jp-text">{h.system.japanese}</p>
              {showRomaji && <p className="bubble-romaji">{h.system.romaji}</p>}
              <p className="th-text bubble-thai">{h.system.thai}</p>
            </div>
            <div className="bubble bubble-user">
              <p className="jp-text">{h.reply.japanese}</p>
              {showRomaji && <p className="bubble-romaji">{h.reply.romaji}</p>}
              <p className="th-text bubble-thai">{h.reply.thai}</p>
            </div>
          </div>
        ))}
      </div>

      {!finished ? (
        <div className="conversation-card">
          <Mascot mood="happy" size={80} />
          <div className="bubble bubble-system bubble-current">
            <p className="jp-text">{node.system.japanese}</p>
            {showRomaji && <p className="bubble-romaji">{node.system.romaji}</p>}
            <p className="th-text bubble-thai">{node.system.thai}</p>
          </div>
          <button className="btn btn-outline blue btn-sm" onClick={replay}>
            🔊 ฟังอีกครั้ง
          </button>

          <p className="th-text conversation-prompt">เลือกคำตอบของคุณ:</p>
          <div className="reply-options">
            {node.options.map((opt, i) => (
              <button key={i} className="reply-option" onClick={() => choose(opt)}>
                <span className="jp-text">{opt.japanese}</span>
                {showRomaji && <span className="bubble-romaji">{opt.romaji}</span>}
                <span className="th-text bubble-thai">{opt.thai}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="conversation-card">
          <Mascot mood="excited" size={100} />
          <p className="th-text conversation-complete">จบบทสนทนาแล้ว! เก่งมากๆ เลย 🌸✨</p>
          <div className="quiz-actions">
            <button className="btn btn-outline btn-sm" onClick={restart}>
              🔁 ฝึกอีกครั้ง
            </button>
            <button className="btn btn-success btn-sm" onClick={onBack}>
              เลือกสถานการณ์อื่น →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ConversationPractice() {
  const [topic, setTopic] = useState(null);
  if (!topic) return <TopicPicker onPick={setTopic} />;
  return <DialogueView topic={topic} onBack={() => setTopic(null)} />;
}
