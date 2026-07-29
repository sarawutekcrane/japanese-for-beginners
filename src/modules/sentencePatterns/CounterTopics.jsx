import { useState } from "react";
import CounterIntro from "./counters/CounterIntro";
import CounterDetail from "./counters/CounterDetail";
import CounterComparisonTable from "./counters/CounterComparisonTable";

const TOPICS = [
  { id: "intro", emoji: "💡", title: "ตัวนับคืออะไร", Component: CounterIntro },
  { id: "tsu", emoji: "🔢", title: "つ - ตัวนับทั่วไป", Component: () => <CounterDetail counterId="tsu" /> },
  { id: "ko", emoji: "🥚", title: "こ - ของชิ้นเล็กทั่วไป", Component: () => <CounterDetail counterId="ko" /> },
  { id: "nin", emoji: "🧑", title: "にん - คน", Component: () => <CounterDetail counterId="nin" /> },
  { id: "hon", emoji: "🖊️", title: "ほん - ของยาวๆ", Component: () => <CounterDetail counterId="hon" /> },
  { id: "mai", emoji: "📄", title: "まい - ของแบนๆ", Component: () => <CounterDetail counterId="mai" /> },
  { id: "hiki", emoji: "🐱", title: "ひき - สัตว์ตัวเล็ก", Component: () => <CounterDetail counterId="hiki" /> },
  { id: "dai", emoji: "🚗", title: "だい - เครื่องจักร/ยานพาหนะ", Component: () => <CounterDetail counterId="dai" /> },
  { id: "satsu", emoji: "📚", title: "さつ - หนังสือ", Component: () => <CounterDetail counterId="satsu" /> },
  { id: "comparison", emoji: "📊", title: "ตารางเปรียบเทียบ 1-10", Component: CounterComparisonTable },
];

function TopicList({ onPick, onBack }) {
  return (
    <div className="picker">
      <button className="btn btn-outline btn-sm" onClick={onBack} data-swipe-back="true">
        ← เปลี่ยนหมวดหมู่
      </button>

      <section className="picker-section">
        <h3 className="picker-heading">🔢 สอนและอธิบายตัวนับ (助数詞)</h3>
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

export default function CounterTopics({ onBack }) {
  const [index, setIndex] = useState(null);

  if (index === null) return <TopicList onPick={setIndex} onBack={onBack} />;
  return <TopicDetail index={index} onBackToList={() => setIndex(null)} onNext={() => setIndex((i) => i + 1)} />;
}
