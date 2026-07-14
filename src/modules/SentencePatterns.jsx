import { useState } from "react";
import patterns from "../data/sentencePatterns.json";
import SectionPicker from "./sentencePatterns/SectionPicker";
import PatternPicker from "./sentencePatterns/PatternPicker";
import LessonView from "./sentencePatterns/LessonView";
import ConjugationTopics from "./sentencePatterns/ConjugationTopics";
import ConjugationPractice from "./sentencePatterns/ConjugationPractice";
import WordOrderPractice from "./sentencePatterns/WordOrderPractice";

function PatternFlow({ Component, onBackToSections }) {
  const [patternId, setPatternId] = useState(null);
  if (!patternId) return <PatternPicker onPick={setPatternId} onBack={onBackToSections} />;
  const pattern = patterns.find((p) => p.id === patternId);
  return <Component pattern={pattern} onBack={() => setPatternId(null)} />;
}

export default function SentencePatterns() {
  const [section, setSection] = useState(null);

  if (!section) return <SectionPicker onPick={setSection} />;

  const backToSections = () => setSection(null);

  if (section === "lesson") return <PatternFlow Component={LessonView} onBackToSections={backToSections} />;
  if (section === "conjugationLesson") return <ConjugationTopics onBack={backToSections} />;
  if (section === "conjugationPractice") return <ConjugationPractice onBack={backToSections} />;
  if (section === "wordorder") return <PatternFlow Component={WordOrderPractice} onBackToSections={backToSections} />;
  return null;
}
