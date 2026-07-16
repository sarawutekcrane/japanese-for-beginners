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
            {items.map(({ verb, conjugated }) => (
              <div key={verb.id} className="conj-example-row" onClick={() => speak(conjugated)} role="button" tabIndex={0}>
                <ConjugatedWord dict={verb.dict} conjugated={conjugated} />
                <span className="example-play">🔊</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function TopicPast() {
  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">⏪ รูปอดีต (ました / ませんでした)</h3>
      <div className="time-note th-text">
        <span>⏰</span> ました ใช้กับเหตุการณ์ที่จบไปแล้วในอดีต ส่วน ませんでした คือรูปปฏิเสธของอดีต ทั้งคู่มักใช้คู่กับคำบอกเวลาที่เป็นอดีต เช่น
        きのう (เมื่อวาน)
      </div>
      <FieldBlock field="mashita" title="ました (อดีต)" />
      <FieldBlock field="masendeshita" title="ませんでした (อดีตปฏิเสธ)" />
    </div>
  );
}
