import { useSpeak } from "../../../hooks/useSpeech";
import { verbs, groupLabel, kanjiForVerbForm } from "../../../utils/grammar";
import JapaneseText from "../../../components/JapaneseText";

function GroupCard({ group, note, children }) {
  return (
    <div className="group-rule-card">
      <span className="verb-group th-text">{groupLabel(group)}</span>
      {note && <p className="th-text group-rule-explanation">{note}</p>}
      <div className="verb-chip-row">{children}</div>
    </div>
  );
}

export default function TopicGroups() {
  const { speak } = useSpeak();
  const g1 = verbs.filter((v) => v.group === 1).slice(0, 4);
  const g2 = verbs.filter((v) => v.group === 2).slice(0, 4);
  const g3 = verbs.filter((v) => v.group === 3);

  const say = (verb) => speak(verb.dict, { rate: 0.8 });

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">🔤 กริยากลุ่ม 1 (godan / u-verbs)</h3>
      <GroupCard group={1} note="กริยาที่ลงท้ายด้วยเสียงแถว う เช่น う・つ・る・む・ぶ・ぬ・く・ぐ・す">
        {g1.map((v) => (
          <button key={v.id} className="verb-chip jp-text" onClick={() => say(v)}>
            <JapaneseText kana={v.dict} kanji={kanjiForVerbForm(v.dict)} /> 🔊
          </button>
        ))}
      </GroupCard>

      <h3 className="lesson-heading">🔤 กริยากลุ่ม 2 (ichidan / ru-verbs)</h3>
      <GroupCard group={2} note="กริยาที่ลงท้ายด้วย いる หรือ える ส่วนใหญ่ (มีข้อยกเว้นบางคำ)">
        {g2.map((v) => (
          <button key={v.id} className="verb-chip jp-text" onClick={() => say(v)}>
            <JapaneseText kana={v.dict} kanji={kanjiForVerbForm(v.dict)} /> 🔊
          </button>
        ))}
      </GroupCard>

      <h3 className="lesson-heading">🔤 กริยากลุ่ม 3 (ผันไม่ตามกฎ)</h3>
      <GroupCard group={3} note="ในภาษาญี่ปุ่นมีกริยากลุ่มนี้แค่ 2 คำเท่านั้น จำได้ง่าย">
        {g3.map((v) => (
          <button key={v.id} className="verb-chip jp-text" onClick={() => say(v)}>
            <JapaneseText kana={v.dict} kanji={kanjiForVerbForm(v.dict)} /> 🔊
          </button>
        ))}
      </GroupCard>

      <div className="time-note th-text">
        <span>💡</span> วิธีสังเกตคร่าวๆ: กริยาที่ลงท้ายด้วย いる/える มักเป็นกลุ่ม 2 เช่น たべる, みる แต่ก็มีข้อยกเว้นที่ลงท้ายแบบนี้แต่จริงๆ
        เป็นกลุ่ม 1 เช่น かえる (กลับบ้าน), はいる (เข้าไป) ซึ่งต้องจำเป็นกรณีพิเศษ ส่วนกลุ่ม 3 มีแค่ する กับ くる เท่านั้น
        นอกนั้นถ้าลงท้ายด้วยเสียงแถว う ให้ถือว่าเป็นกลุ่ม 1 ไว้ก่อน
      </div>
    </div>
  );
}
