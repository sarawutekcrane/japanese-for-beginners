import { useSpeak } from "../../../hooks/useSpeech";
import { adjectives, FORM_FIELDS, formLabel, typeLabel } from "../../../utils/adjectives";
import JapaneseText from "../../../components/JapaneseText";

const SAMPLE_IDS = ["ookii", "takai", "kirei", "shizuka", "ii"];

export default function AdjectiveComparisonTable() {
  const { speak } = useSpeak();
  const samples = SAMPLE_IDS.map((id) => adjectives.find((a) => a.id === id));

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📊 ตารางเปรียบเทียบทุกรูป</h3>
      <p className="th-text group-rule-explanation">แตะคำในตารางเพื่อฟังเสียง</p>

      <div className="scroll-x-safe" data-swipe-exempt="true">
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
                  <JapaneseText as="span" className="jp-text comparison-dict" kana={adj.dict} kanji={adj.kanji} />
                  <span className="th-text comparison-group">{typeLabel(adj.type)}</span>
                </td>
                {FORM_FIELDS.map((f) => (
                  <td
                    key={f}
                    className="jp-text comparison-cell"
                    onClick={() => speak(adj.forms[f].japanese)}
                    role="button"
                    tabIndex={0}
                  >
                    <JapaneseText kana={adj.forms[f].japanese} kanji={adj.forms[f].kanji} />
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
