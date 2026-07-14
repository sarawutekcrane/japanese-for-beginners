import { useSpeak } from "../../hooks/useSpeech";

export default function LessonView({ pattern, onStartPractice }) {
  const { speak } = useSpeak();

  return (
    <div className="lesson-view">
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
            <div key={i} className="example-card" onClick={() => speak(ex.japanese, { rate: 0.8 })} role="button" tabIndex={0}>
              <p className="jp-text example-jp">{ex.japanese}</p>
              <p className="example-romaji">{ex.romaji}</p>
              <p className="th-text example-thai">{ex.thai}</p>
              <span className="example-play">🔊 แตะเพื่อฟัง</span>
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-success" onClick={onStartPractice}>
        เริ่มฝึกฝน →
      </button>
    </div>
  );
}
