import { useSpeak } from "../../hooks/useSpeech";
import JapaneseText from "../../components/JapaneseText";

export default function LessonView({ pattern, onBack }) {
  const { speak } = useSpeak();

  return (
    <div className="lesson-view">
      <button className="btn btn-outline btn-sm" onClick={onBack} data-swipe-back="true">
        ← เปลี่ยนแพทเทิร์น
      </button>

      <h3 className="pattern-detail-title">
        {pattern.order}. {pattern.title}
      </h3>

      <div className="lesson-card">
        <h3 className="lesson-heading">📐 โครงสร้างประโยค</h3>
        <p className="lesson-structure jp-text">{pattern.structure}</p>

        <h3 className="lesson-heading">🔤 คำช่วย (Particles)</h3>
        <div className="particle-list">
          {pattern.particles.map((p) => (
            <div key={p.particle} className="particle-item">
              <span className="particle-chip jp-text">{p.particle}</span>
              <span className="particle-role th-text">{p.role}</span>
            </div>
          ))}
        </div>

        {pattern.timeNote && (
          <div className="time-note th-text">
            <span>⏰</span> {pattern.timeNote}
          </div>
        )}

        <h3 className="lesson-heading">💬 ตัวอย่างประโยค</h3>
        <div className="example-list">
          {pattern.examples.map((ex, i) => (
            <div key={i} className="example-card" onClick={() => speak(ex.japanese)} role="button" tabIndex={0}>
              <JapaneseText as="p" className="jp-text example-jp" kana={ex.japanese} kanji={ex.kanji} />
              <p className="example-romaji">{ex.romaji}</p>
              <p className="th-text example-thai">{ex.thai}</p>
              <span className="example-play">🔊 แตะเพื่อฟัง</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
