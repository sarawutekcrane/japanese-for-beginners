import { useSpeak } from "../../../hooks/useSpeech";
import { adjectives, FORM_FIELDS, formLabel } from "../../../utils/adjectives";
import JapaneseText from "../../../components/JapaneseText";

const SAMPLE_IDS = ["kirei", "shizuka", "genki"];

export default function AdjectiveNaForm() {
  const { speak } = useSpeak();
  const samples = SAMPLE_IDS.map((id) => adjectives.find((a) => a.id === id));

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📗 การผัน な-adjective</h3>
      <div className="time-note th-text">
        <span>⏰</span> ตัวคำไม่เปลี่ยน แค่เปลี่ยนคำลงท้าย (ผันแบบเดียวกับคำนาม): บอกเล่า (~です) ปฏิเสธ (~じゃないです)
        อดีต (~でした) ปฏิเสธอดีต (~じゃなかったです)
      </div>

      {samples.map((adj) => (
        <div key={adj.id} className="group-rule-card">
          <span className="verb-group th-text">
            <JapaneseText kana={adj.dict} kanji={adj.kanji} /> ({adj.meaningTh})
          </span>
          <div className="conj-example-list">
            {FORM_FIELDS.map((field) => (
              <div
                key={field}
                className="conj-example-row"
                onClick={() => speak(adj.forms[field].japanese)}
                role="button"
                tabIndex={0}
              >
                <JapaneseText
                  as="span"
                  className="jp-text conj-word"
                  kana={adj.forms[field].japanese}
                  kanji={adj.forms[field].kanji}
                />
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
