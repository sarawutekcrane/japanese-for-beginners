import { useState } from "react";
import TopicGroups from "./topics/TopicGroups";
import TopicMasu from "./topics/TopicMasu";
import TopicMasen from "./topics/TopicMasen";
import TopicPast from "./topics/TopicPast";
import TopicTe from "./topics/TopicTe";
import TopicTai from "./topics/TopicTai";
import TopicPlain from "./topics/TopicPlain";
import TopicComparison from "./topics/TopicComparison";

const TOPICS = [
  { id: "groups", emoji: "🔤", title: "3 กลุ่มกริยา", Component: TopicGroups },
  { id: "masu", emoji: "✅", title: "ます-form (ปัจจุบัน/อนาคต)", Component: TopicMasu },
  { id: "masen", emoji: "🚫", title: "ません (ปฏิเสธ)", Component: TopicMasen },
  { id: "past", emoji: "⏪", title: "ました / ませんでした (อดีต)", Component: TopicPast },
  { id: "te", emoji: "🔗", title: "て-form (5 กฎ + ข้อยกเว้น)", Component: TopicTe },
  { id: "tai", emoji: "💭", title: "たい-form (อยากทำ)", Component: TopicTai },
  { id: "plain", emoji: "🗣️", title: "รูปธรรมดา (ない/た/なかった)", Component: TopicPlain },
  { id: "comparison", emoji: "📊", title: "ตารางเปรียบเทียบทุกรูป", Component: TopicComparison },
];

function TopicList({ onPick, onBack }) {
  return (
    <div className="picker">
      <button className="btn btn-outline btn-sm" onClick={onBack}>
        ← เปลี่ยนหมวดหมู่
      </button>

      <section className="picker-section">
        <h3 className="picker-heading">🈺 สอนและอธิบายวิธีการผันกริยา</h3>
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
      <button className="btn btn-outline btn-sm" onClick={onBackToList}>
        ← หัวข้อทั้งหมด
      </button>
      <Component />
      <button className="btn btn-success" onClick={isLast ? onBackToList : onNext}>
        {isLast ? "กลับไปหัวข้อทั้งหมด" : `หัวข้อถัดไป: ${TOPICS[index + 1].title} →`}
      </button>
    </div>
  );
}

export default function ConjugationTopics({ onBack }) {
  const [index, setIndex] = useState(null);

  if (index === null) return <TopicList onPick={setIndex} onBack={onBack} />;
  return <TopicDetail index={index} onBackToList={() => setIndex(null)} onNext={() => setIndex((i) => i + 1)} />;
}
