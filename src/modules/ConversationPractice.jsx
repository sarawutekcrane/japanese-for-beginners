import { useEffect, useState } from "react";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import { useSpeak } from "../hooks/useSpeech";
import { shuffle } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import conversations from "../data/conversations.json";

const MISUNDERSTANDING = {
  japanese: "すみません、もういちど おねがいします。",
  romaji: "Sumimasen, mou ichido onegaishimasu.",
  thai: "ขอโทษค่ะ ช่วยพูดอีกครั้งได้ไหมคะ",
  kanji: [
    { text: "すみません" },
    { text: "、" },
    { text: "もう" },
    { text: "一度", reading: "いちど" },
    { text: " " },
    { text: "お" },
    { text: "願", reading: "ねが" },
    { text: "いします" },
    { text: "。" },
  ],
};

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
  const { speak, supported } = useSpeak();
  const [nodeId, setNodeId] = useState(topic.start);
  const [options, setOptions] = useState(() => shuffle(topic.nodes[topic.start].options));
  const [showRomaji, setShowRomaji] = useState(false);
  const [showThai, setShowThai] = useState(false);
  const [history, setHistory] = useState([]);
  const [finished, setFinished] = useState(false);
  const [pendingReply, setPendingReply] = useState(null);
  const [misunderstanding, setMisunderstanding] = useState(false);

  const node = topic.nodes[nodeId];
  const currentSystem = misunderstanding ? MISUNDERSTANDING : node.system;

  useEffect(() => {
    speak(topic.nodes[topic.start].system.japanese, { rate: 0.85 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const replay = () => speak(currentSystem.japanese, { rate: 0.85 });

  const replayReply = () => pendingReply && speak(pendingReply.japanese, { rate: 0.85 });

  const choose = (opt) => {
    setPendingReply(opt);
    if (supported) speak(opt.japanese, { rate: 0.85 });
  };

  const confirmAttempt = () => {
    const opt = pendingReply;
    setPendingReply(null);
    if (opt.correct) {
      playCorrect();
      setHistory((h) => [...h, { system: node.system, reply: opt }]);
      if (opt.next) {
        const nextNode = topic.nodes[opt.next];
        setNodeId(opt.next);
        setOptions(shuffle(nextNode.options));
        speak(nextNode.system.japanese, { rate: 0.85 });
      } else {
        setFinished(true);
      }
    } else {
      playIncorrect();
      setMisunderstanding(true);
      speak(MISUNDERSTANDING.japanese, { rate: 0.85 });
    }
  };

  const continueMisunderstanding = () => {
    setMisunderstanding(false);
    setOptions(shuffle(node.options));
    speak(node.system.japanese, { rate: 0.85 });
  };

  const restart = () => {
    setNodeId(topic.start);
    setOptions(shuffle(topic.nodes[topic.start].options));
    setHistory([]);
    setFinished(false);
    setPendingReply(null);
    setMisunderstanding(false);
  };

  return (
    <div className="conversation-view">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนสถานการณ์
      </button>

      <p className="progress-label">
        {topic.emoji} {topic.title} · รอบที่ {history.length + 1}
      </p>

      <div className="toggle-group blue">
        <Toggle label="แสดงคำแปลภาษาไทย" checked={showThai} onChange={setShowThai} />
        <Toggle label="แสดง Romaji" checked={showRomaji} onChange={setShowRomaji} />
      </div>

      <div className="conversation-history scroll-x-safe">
        {history.map((h, i) => (
          <div key={i} className="history-turn">
            <div className="bubble bubble-system">
              <JapaneseText as="p" className="jp-text" kana={h.system.japanese} kanji={h.system.kanji} />
              {showRomaji && <p className="bubble-romaji">{h.system.romaji}</p>}
              {showThai && <p className="th-text bubble-thai">{h.system.thai}</p>}
            </div>
            <div className="bubble bubble-user">
              <JapaneseText as="p" className="jp-text" kana={h.reply.japanese} kanji={h.reply.kanji} />
              {showRomaji && <p className="bubble-romaji">{h.reply.romaji}</p>}
              {showThai && <p className="th-text bubble-thai">{h.reply.thai}</p>}
            </div>
          </div>
        ))}
      </div>

      {!finished ? (
        <div className="conversation-card">
          {misunderstanding ? (
            <>
              <div className="bubble bubble-system bubble-current">
                <JapaneseText as="p" className="jp-text" kana={MISUNDERSTANDING.japanese} kanji={MISUNDERSTANDING.kanji} />
                {showRomaji && <p className="bubble-romaji">{MISUNDERSTANDING.romaji}</p>}
                {showThai && <p className="th-text bubble-thai">{MISUNDERSTANDING.thai}</p>}
              </div>
              <button className="btn btn-outline blue btn-sm" onClick={replay}>
                🔊 ฟังอีกครั้ง
              </button>
              <button className="btn btn-success btn-sm" onClick={continueMisunderstanding}>
                ลองตอบอีกครั้ง →
              </button>
            </>
          ) : !pendingReply ? (
            <>
              <div className="bubble bubble-system bubble-current">
                <JapaneseText as="p" className="jp-text" kana={node.system.japanese} kanji={node.system.kanji} />
                {showRomaji && <p className="bubble-romaji">{node.system.romaji}</p>}
                {showThai && <p className="th-text bubble-thai">{node.system.thai}</p>}
              </div>
              <button className="btn btn-outline blue btn-sm" onClick={replay}>
                🔊 ฟังอีกครั้ง
              </button>

              <p className="th-text conversation-prompt">เลือกคำตอบของคุณ:</p>
              <div className="reply-options">
                {options.map((opt, i) => (
                  <button key={i} className="reply-option" onClick={() => choose(opt)}>
                    <JapaneseText as="span" className="jp-text" kana={opt.japanese} kanji={opt.kanji} />
                    {showRomaji && <span className="bubble-romaji">{opt.romaji}</span>}
                    {showThai && <span className="th-text bubble-thai">{opt.thai}</span>}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="bubble bubble-system">
                <JapaneseText as="p" className="jp-text" kana={node.system.japanese} kanji={node.system.kanji} />
                {showRomaji && <p className="bubble-romaji">{node.system.romaji}</p>}
                {showThai && <p className="th-text bubble-thai">{node.system.thai}</p>}
              </div>
              <div className="bubble bubble-user bubble-current">
                <JapaneseText as="p" className="jp-text" kana={pendingReply.japanese} kanji={pendingReply.kanji} />
                {showRomaji && <p className="bubble-romaji">{pendingReply.romaji}</p>}
                {showThai && <p className="th-text bubble-thai">{pendingReply.thai}</p>}
              </div>
              <button className="btn btn-outline blue btn-sm" onClick={replayReply}>
                🔊 ฟังอีกครั้ง
              </button>
              <button className="btn btn-success btn-sm" onClick={confirmAttempt}>
                ดำเนินการต่อ →
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="conversation-card">
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
  return <DialogueView key={topic.id} topic={topic} onBack={() => setTopic(null)} />;
}
