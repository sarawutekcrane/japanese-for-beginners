import { useSpeak } from "../../../hooks/useSpeech";
import { getGroupExamplesList, groupLabel } from "../../../utils/grammar";
import ConjugatedWord from "../ConjugatedWord";

function FieldBlock({ field, title }) {
  const { speak } = useSpeak();
  const groups = getGroupExamplesList(field, 3);

  return (
    <>
      <h4 className="jp-text past-subheading">{title}</h4>
      {groups.map(({ group, items }) => (
        <div key={group} className="group-rule-card">
          <span className="verb-group th-text">{groupLabel(group)}</span>
          <div className="conj-example-list">
            {items.map(({ verb, conjugated, explanation }, i) => (
              <div key={verb.id} className="conj-example-row" onClick={() => speak(conjugated)} role="button" tabIndex={0}>
                <ConjugatedWord dict={verb.dict} conjugated={conjugated} />
                <span className="example-play">🔊</span>
                {i === 0 && <p className="th-text group-rule-explanation">{explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function TopicPlain() {
  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">🗣️ รูปธรรมดา (ない / た / なかった)</h3>
      <div className="time-note th-text">
        <span>💡</span> รูปธรรมดา (plain form) ใช้พูดกับเพื่อนสนิทหรือคนในครอบครัว ส่วนรูปสุภาพ (ます-form) ใช้ในสถานการณ์ส่วนใหญ่ เช่น
        กับคนแปลกหน้า ที่ทำงาน หรือกับคนที่อาวุโสกว่า ความหมายเหมือนกันทุกประการ ต่างกันแค่ระดับความสุภาพ
      </div>
      <div className="time-note th-text">
        <span>⏰</span> เทียบรูปสุภาพกับรูปธรรมดา: ます (ปัจจุบัน/อนาคต) ↔ รูปพจนานุกรม, ません (ปฏิเสธ) ↔ ない, ました (อดีต) ↔ た,
        ませんでした (อดีตปฏิเสธ) ↔ なかった
      </div>
      <FieldBlock field="nai" title="ない (ปฏิเสธธรรมดา แทน ません)" />
      <FieldBlock field="ta" title="た (อดีตธรรมดา แทน ました)" />
      <FieldBlock field="nakatta" title="なかった (อดีตปฏิเสธธรรมดา แทน ませんでした)" />
    </div>
  );
}
