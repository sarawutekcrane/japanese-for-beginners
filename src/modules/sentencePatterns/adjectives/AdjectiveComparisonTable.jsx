import { useSpeak } from "../../../hooks/useSpeech";
import { adjectives, FORM_FIELDS, formLabel, typeLabel } from "../../../utils/adjectives";

const SAMPLE_IDS = ["ookii", "takai", "kirei", "shizuka", "ii"];

export default function AdjectiveComparisonTable() {
  const { speak } = useSpeak();
  const samples = SAMPLE_IDS.map((id) => adjectives.find((a) => a.id === id));

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📊 ตารางเปรียบเทียบทุกรูป</h3>
      <p className="th-text group-rule-explanation">แตะคำในตารางเพื่อฟังเสียง</p>

      <div className="scroll-x-safe">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="jp-text">พจนานุกรม</th>
              {FORM_FIELDS.map((f) => (
                <th key={f} className="jp-text">
                  {formLabel(f)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {samples.map((adj) => (
              <tr key={adj.id}>
                <td>
                  <span className="jp-text comparison-dict">{adj.dict}</span>
                  <span className="th-text comparison-group">{typeLabel(adj.type)}</span>
                </td>
                {FORM_FIELDS.map((f) => (
                  <td
                    key={f}
                    className="jp-text comparison-cell"
                    onClick={() => speak(adj.forms[f].japanese, { rate: 0.8 })}
                    role="button"
                    tabIndex={0}
                  >
                    {adj.forms[f].japanese}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
