import Mascot from "./Mascot";

const MODULES = [
  {
    id: "flashcards",
    emoji: "🎴",
    title: "แฟลชการ์ด",
    subtitle: "อักษร & คำศัพท์",
    color: "pink",
  },
  {
    id: "listening",
    emoji: "🎧",
    title: "แบบทดสอบฟัง",
    subtitle: "ฟังแล้วเลือกคำตอบ",
    color: "blue",
  },
  {
    id: "speaking",
    emoji: "🎤",
    title: "ฝึกพูด",
    subtitle: "พูดตามให้ถูกต้อง",
    color: "pink",
  },
  {
    id: "conversation",
    emoji: "💬",
    title: "ฝึกสนทนา",
    subtitle: "บทสนทนาสถานการณ์จริง",
    color: "blue",
  },
  {
    id: "sentencePatterns",
    emoji: "🧩",
    title: "แพทเทิร์นประโยค",
    subtitle: "โครงสร้างประโยค & ผันกริยา",
    color: "pink",
  },
];

export default function HomeMenu({ onSelect }) {
  return (
    <div className="home-menu">
      <header className="home-header">
        <Mascot mood="excited" size={110} />
        <h1 className="home-title">
          Japanese <span>for</span> Beginners
        </h1>
      </header>

      <div className="module-grid">
        {MODULES.map((m) => (
          <button
            key={m.id}
            className={`module-card module-${m.color}`}
            onClick={() => onSelect(m.id)}
          >
            <span className="module-emoji">{m.emoji}</span>
            <span className="module-title">{m.title}</span>
            <span className="module-subtitle th-text">{m.subtitle}</span>
          </button>
        ))}
      </div>

      <p className="home-footer th-text">แตะโมดูลด้านบนเพื่อเริ่มเรียนรู้กันเลย! 🌸</p>
    </div>
  );
}
