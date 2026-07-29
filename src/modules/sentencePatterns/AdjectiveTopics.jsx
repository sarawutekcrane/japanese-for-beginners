import { useState } from "react";
import AdjectiveIntro from "./adjectives/AdjectiveIntro";
import AdjectiveIForm from "./adjectives/AdjectiveIForm";
import AdjectiveNaForm from "./adjectives/AdjectiveNaForm";
import AdjectiveException from "./adjectives/AdjectiveException";
import AdjectiveComparisonTable from "./adjectives/AdjectiveComparisonTable";

const TOPICS = [
  { id: "intro", emoji: "💡", title: "い-adjective กับ な-adjective ต่างกันอย่างไร", Component: AdjectiveIntro },
  { id: "iform", emoji: "📘", title: "การผัน い-adjective", Component: AdjectiveIForm },
  { id: "naform", emoji: "📗", title: "การผัน な-adjective", Component: AdjectiveNaForm },
  { id: "exception", emoji: "⚠️", title: "ข้อยกเว้นพิเศษ: いい", Component: AdjectiveException },
  { id: "comparison", emoji: "📊", title: "ตารางเปรียบเทียบทุกรูป", Component: AdjectiveComparisonTable },
];

function TopicList({ onPick, onBack }) {
  return (
    <div className="picker">
      <button className="btn btn-outline btn-sm" onClick={onBack} data-swipe-back="true">
        ← เปลี่ยนหมวดหมู่
      </button>

      <section className="picker-section">
        <h3 className="picker-heading">🈺 สอนและอธิบายคำคุณศัพท์ (形容詞)</h3>
        <div className="pattern-list">
          {TOPICS.map((t, i) => (
            <button key={t.id} className="pattern-list-btn" onClick={() => onPick(i)}>
              <span className="pattern-list-order">{t.emoji}</span>
              <span className="pattern-list-title">{t.title}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function TopicDetail({ index, onBackToList, onNext }) {
  const topic = TOPICS[index];
  const isLast = index === TOPICS.length - 1;
  const { Component } = topic;

  return (
    <div className="lesson-view">
      <button className="btn btn-outline btn-sm" onClick={onBackToList} data-swipe-back="true">
        ← หัวข้อทั้งหมด
      </button>
      <Component />
      <button className="btn btn-success" onClick={isLast ? onBackToList : onNext}>
        {isLast ? "กลับไปหัวข้อทั้งหมด" : `หัวข้อถัดไป: ${TOPICS[index + 1].title} →`}
      </button>
    </div>
  );
}

export default function AdjectiveTopics({ onBack }) {
  const [index, setIndex] = useState(null);

  if (index === null) return <TopicList onPick={setIndex} onBack={onBack} />;
  return <TopicDetail index={index} onBackToList={() => setIndex(null)} onNext={() => setIndex((i) => i + 1)} />;
}
