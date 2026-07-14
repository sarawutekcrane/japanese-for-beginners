import { useState } from "react";
import patterns from "../data/sentencePatterns.json";
import PatternPicker from "./sentencePatterns/PatternPicker";
import LessonView from "./sentencePatterns/LessonView";
import WordOrderPractice from "./sentencePatterns/WordOrderPractice";
import ConjugationPractice from "./sentencePatterns/ConjugationPractice";

const TABS = [
  { id: "lesson", label: "📖 บทเรียน" },
  { id: "wordorder", label: "🧩 เรียงประโยค" },
  { id: "conjugation", label: "✏️ ผันกริยา" },
];

function PatternDetail({ patternId, onBack }) {
  const pattern = patterns.find((p) => p.id === patternId);
  const [section, setSection] = useState("lesson");

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

      {section === "lesson" && <LessonView pattern={pattern} onStartPractice={() => setSection("wordorder")} />}
      {section === "wordorder" && <WordOrderPractice pattern={pattern} onLesson={() => setSection("lesson")} />}
      {section === "conjugation" && <ConjugationPractice pattern={pattern} onLesson={() => setSection("lesson")} />}
    </div>
  );
}

export default function SentencePatterns() {
  const [patternId, setPatternId] = useState(null);

  if (!patternId) return <PatternPicker onPick={setPatternId} />;
  return <PatternDetail patternId={patternId} onBack={() => setPatternId(null)} />;
}
