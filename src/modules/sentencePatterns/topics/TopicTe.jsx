import { useSpeak } from "../../../hooks/useSpeech";
import { getTeFormBreakdown, getGroupExamplesList, groupLabel } from "../../../utils/grammar";
import ConjugatedWord from "../ConjugatedWord";

export default function TopicTe() {
  const { speak } = useSpeak();
  const breakdown = getTeFormBreakdown();
  const regularRows = breakdown.filter((row) => row.key !== "exception-iku");
  const exceptionRow = breakdown.find((row) => row.key === "exception-iku");
  const g2g3 = getGroupExamplesList("te", 3).filter((g) => g.group !== 1);

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">🔗 รูป て (สำคัญที่สุด ใช้ได้หลายความหมาย)</h3>
      <div className="time-note th-text">
        <span>💡</span> รูปて ใช้เชื่อมประโยค ขอร้อง (てください) ขออนุญาต (てもいいですか) และอีกหลายโครงสร้าง
      </div>

      <h4 className="jp-text past-subheading">กริยากลุ่ม 1: กฎ 5 ข้อตามเสียงท้าย</h4>
      <div className="te-table">
        {regularRows.map((row) => (
          <div key={row.key} className="te-table-row" onClick={() => speak(row.verb.te, { rate: 0.8 })} role="button" tabIndex={0}>
            <ConjugatedWord dict={row.verb.dict} conjugated={row.verb.te} />
            <span className="example-play">🔊</span>
            <p className="th-text te-table-rule">{row.rule}</p>
          </div>
        ))}
      </div>

      {exceptionRow && (
        <div className="exception-box" onClick={() => speak(exceptionRow.verb.te, { rate: 0.8 })} role="button" tabIndex={0}>
          <span className="exception-label th-text">⚠️ ข้อยกเว้นพิเศษ</span>
          <ConjugatedWord dict={exceptionRow.verb.dict} conjugated={exceptionRow.verb.te} />
          <span className="example-play">🔊</span>
          <p className="th-text te-table-rule">{exceptionRow.rule}</p>
        </div>
      )}

      <h4 className="jp-text past-subheading">กริยากลุ่ม 2 และ 3: กฎง่ายกว่า</h4>
      {g2g3.map(({ group, items }) => (
        <div key={group} className="group-rule-card">
          <span className="verb-group th-text">{groupLabel(group)}</span>
          <p className="th-text group-rule-explanation">
            {group === 2 ? "ตัด る ออกแล้วเติม て ได้ทันที" : "ผันไม่ตามกฎ ต้องจำรูปผันไว้เป็นพิเศษ"}
          </p>
          <div className="conj-example-list">
            {items.map(({ verb, conjugated }) => (
              <div key={verb.id} className="conj-example-row" onClick={() => speak(conjugated, { rate: 0.8 })} role="button" tabIndex={0}>
                <ConjugatedWord dict={verb.dict} conjugated={conjugated} />
                <span className="example-play">🔊</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
