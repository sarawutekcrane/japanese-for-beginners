import { useState } from "react";
import patterns from "../data/sentencePatterns.json";
import SectionPicker from "./sentencePatterns/SectionPicker";
import PatternPicker from "./sentencePatterns/PatternPicker";
import LessonView from "./sentencePatterns/LessonView";
import ConjugationLesson from "./sentencePatterns/ConjugationLesson";
import ConjugationPractice from "./sentencePatterns/ConjugationPractice";
import WordOrderPractice from "./sentencePatterns/WordOrderPractice";

const TABS = [
  { id: "lesson", label: "📖 แพทเทิร์นประโยค" },
  { id: "conjugationLesson", label: "🈺 สอนผันกริยา" },
  { id: "conjugationPractice", label: "✏️ ฝึกผันกริยา" },
  { id: "wordorder", label: "🧩 ฝึกเรียงประโยค" },
];

function PatternDetail({ patternId, initialSection, onBack }) {
  const pattern = patterns.find((p) => p.id === patternId);
  const [section, setSection] = useState(initialSection);

  return (
    <div className="pattern-detail">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนแพทเทิร์น
      </button>

      <h3 className="pattern-detail-title">
        {pattern.order}. {pattern.title}
      </h3>

      <div className="pattern-tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`pattern-tab ${section === t.id ? "active" : ""}`} onClick={() => setSection(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {section === "lesson" && <LessonView pattern={pattern} onStartPractice={() => setSection("conjugationLesson")} />}
      {section === "conjugationLesson" && <ConjugationLesson pattern={pattern} onStartPractice={() => setSection("conjugationPractice")} />}
      {section === "conjugationPractice" && <ConjugationPractice pattern={pattern} onLesson={() => setSection("conjugationLesson")} />}
      {section === "wordorder" && <WordOrderPractice pattern={pattern} onLesson={() => setSection("lesson")} />}
    </div>
  );
}

export default function SentencePatterns() {
  const [section, setSection] = useState(null);
  const [patternId, setPatternId] = useState(null);

  if (!section) return <SectionPicker onPick={setSection} />;
  if (!patternId) return <PatternPicker onPick={setPatternId} onBack={() => setSection(null)} />;
  return <PatternDetail patternId={patternId} initialSection={section} onBack={() => setPatternId(null)} />;
}
