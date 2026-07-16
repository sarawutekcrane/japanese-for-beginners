import { useSpeak } from "../../../hooks/useSpeech";
import { adjectives, FORM_FIELDS, formLabel } from "../../../utils/adjectives";
import JapaneseText from "../../../components/JapaneseText";

export default function AdjectiveException() {
  const { speak } = useSpeak();
  const ii = adjectives.find((a) => a.id === "ii");

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">⚠️ ข้อยกเว้นพิเศษ: いい (ดี)</h3>
      <div className="time-note th-text">
        <span>💡</span> いい เป็น い-adjective ที่ผันไม่ตามกฎ รูปบอกเล่าปัจจุบันใช้ いい แต่รูปอื่นๆ ทั้งหมดผันจากคำเก่า
        よい แทน ต้องจำแยกเป็นกรณีพิเศษ
      </div>

      <div className="exception-box" onClick={() => speak(ii.dict, { rate: 0.8 })} role="button" tabIndex={0}>
        <span className="exception-label th-text">⚠️ ข้อยกเว้นพิเศษ</span>
        <JapaneseText as="span" className="jp-text conj-word" kana={ii.dict} kanji={ii.kanji} />
        <span className="example-play">🔊</span>
        <p className="th-text te-table-rule">รูปพจนานุกรม: いい (แต่ผันจาก よい ในทุกรูปอื่น)</p>
      </div>

      <div className="conj-example-list">
        {FORM_FIELDS.map((field) => (
          <div
            key={field}
            className="conj-example-row"
            onClick={() => speak(ii.forms[field].japanese, { rate: 0.8 })}
            role="button"
            tabIndex={0}
          >
            <JapaneseText
              as="span"
              className="jp-text conj-word"
              kana={ii.forms[field].japanese}
              kanji={ii.forms[field].kanji}
            />
            <span className="example-play">🔊</span>
            <p className="th-text group-rule-explanation">{formLabel(field)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
