import { useSpeak } from "../../../hooks/useSpeech";
import { adjectives, FORM_FIELDS, formLabel } from "../../../utils/adjectives";

const SAMPLE_IDS = ["ookii", "takai", "oishii"];

export default function AdjectiveIForm() {
  const { speak } = useSpeak();
  const samples = SAMPLE_IDS.map((id) => adjectives.find((a) => a.id === id));

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📘 การผัน い-adjective</h3>
      <div className="time-note th-text">
        <span>⏰</span> ตัด い ท้ายคำออก แล้วเติมส่วนขยายแทน: บอกเล่า (~いです) ปฏิเสธ (~くないです) อดีต (~かったです)
        ปฏิเสธอดีต (~くなかったです)
      </div>

      {samples.map((adj) => (
        <div key={adj.id} className="group-rule-card">
          <span className="verb-group th-text">
            {adj.dict} ({adj.meaningTh})
          </span>
          <div className="conj-example-list">
            {FORM_FIELDS.map((field) => (
              <div
                key={field}
                className="conj-example-row"
                onClick={() => speak(adj.forms[field].japanese, { rate: 0.8 })}
                role="button"
                tabIndex={0}
              >
                <span className="jp-text conj-word">{adj.forms[field].japanese}</span>
                <span className="example-play">🔊</span>
                <p className="th-text group-rule-explanation">{formLabel(field)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
