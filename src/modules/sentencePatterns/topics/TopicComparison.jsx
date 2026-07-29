import { useSpeak } from "../../../hooks/useSpeech";
import { verbs, groupLabel, kanjiForVerbForm } from "../../../utils/grammar";
import JapaneseText from "../../../components/JapaneseText";

const COLUMNS = [
  { field: "masu", label: "ます" },
  { field: "masen", label: "ません" },
  { field: "mashita", label: "ました" },
  { field: "masendeshita", label: "ませんでした" },
  { field: "te", label: "て" },
  { field: "tai", label: "たい" },
  { field: "nai", label: "ない" },
  { field: "ta", label: "た" },
  { field: "nakatta", label: "なかった" },
];

const SAMPLE_IDS = ["nomu", "taberu", "suru", "kuru"];

export default function TopicComparison() {
  const { speak } = useSpeak();
  const sampleVerbs = SAMPLE_IDS.map((id) => verbs.find((v) => v.id === id)).filter(Boolean);

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📊 ตารางเปรียบเทียบทุกรูป</h3>
      <p className="th-text group-rule-explanation">แตะคำในตารางเพื่อฟังเสียง</p>

      <div className="scroll-x-safe">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="jp-text">พจนานุกรม</th>
              {COLUMNS.map((c) => (
                <th key={c.field} className="jp-text">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleVerbs.map((verb) => (
              <tr key={verb.id}>
                <td>
                  <JapaneseText as="span" className="jp-text comparison-dict" kana={verb.dict} kanji={kanjiForVerbForm(verb.dict)} />
                  <span className="th-text comparison-group">{groupLabel(verb.group)}</span>
                </td>
                {COLUMNS.map((c) => (
                  <td key={c.field} className="jp-text comparison-cell" onClick={() => speak(verb[c.field])} role="button" tabIndex={0}>
                    <JapaneseText kana={verb[c.field]} kanji={kanjiForVerbForm(verb[c.field])} />
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
