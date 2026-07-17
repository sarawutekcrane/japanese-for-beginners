const SECTIONS = [
  { id: "lesson", emoji: "📖", title: "แพทเทิร์นประโยค", subtitle: "โครงสร้าง คำช่วย & ตัวอย่างประโยค", color: "pink" },
  { id: "wordorder", emoji: "🧩", title: "ฝึกเรียงประโยค", subtitle: "แตะคำให้เรียงถูกลำดับ", color: "blue" },
  { id: "conjugationLesson", emoji: "🈺", title: "สอนและอธิบายวิธีการผันกริยา", subtitle: "กฎการผันตามกลุ่มกริยา", color: "pink" },
  { id: "conjugationPractice", emoji: "✏️", title: "ฝึกผันกริยา", subtitle: "เลือกรูปผันที่ถูกต้อง", color: "blue" },
  { id: "counterLesson", emoji: "🔢", title: "สอนและอธิบายตัวนับ", subtitle: "助数詞 นับคน สัตว์ สิ่งของ", color: "pink" },
  { id: "counterPractice", emoji: "🧮", title: "ฝึกใช้ตัวนับ", subtitle: "เลือกตัวนับที่ถูกต้อง", color: "blue" },
  { id: "adjectiveLesson", emoji: "🎨", title: "สอนและอธิบายคำคุณศัพท์", subtitle: "い-adjective & な-adjective", color: "pink" },
  { id: "adjectivePractice", emoji: "💫", title: "ฝึกผันคำคุณศัพท์", subtitle: "เลือกรูปผันที่ถูกต้อง", color: "blue" },
];

export default function SectionPicker({ onPick }) {
  return (
    <div className="module-grid">
      {SECTIONS.map((s) => (
        <button key={s.id} className={`module-card module-${s.color}`} onClick={() => onPick(s.id)}>
          <span className="module-emoji">{s.emoji}</span>
          <span className="module-title">{s.title}</span>
          <span className="module-subtitle th-text">{s.subtitle}</span>
        </button>
      ))}
    </div>
  );
}
