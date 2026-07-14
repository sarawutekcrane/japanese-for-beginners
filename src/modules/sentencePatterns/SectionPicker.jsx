const SECTIONS = [
  { id: "lesson", emoji: "📖", title: "แพทเทิร์นประโยค", subtitle: "โครงสร้าง คำช่วย & ตัวอย่างประโยค", color: "pink" },
  { id: "conjugationLesson", emoji: "🈺", title: "สอนและอธิบายวิธีการผันกริยา", subtitle: "กฎการผันตามกลุ่มกริยา", color: "blue" },
  { id: "conjugationPractice", emoji: "✏️", title: "ฝึกผันกริยา", subtitle: "เลือกรูปผันที่ถูกต้อง", color: "pink" },
  { id: "wordorder", emoji: "🧩", title: "ฝึกเรียงประโยค", subtitle: "แตะคำให้เรียงถูกลำดับ", color: "blue" },
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
