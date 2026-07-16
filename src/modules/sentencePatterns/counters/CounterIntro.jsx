import { useSpeak } from "../../../hooks/useSpeech";
import { counters } from "../../../utils/counters";

const SAMPLE_IDS = ["tsu", "hon", "nin"];

export default function CounterIntro() {
  const { speak } = useSpeak();
  const samples = SAMPLE_IDS.map((id) => counters.find((c) => c.id === id));

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">💡 助数詞 (じょすうし) คืออะไร</h3>
      <p className="th-text group-rule-explanation">
        ภาษาญี่ปุ่นไม่ได้นับสิ่งของด้วยตัวเลขเปล่าๆ แบบภาษาไทยหรืออังกฤษ แต่ต้องเติม "ตัวนับ" (助数詞) ต่อท้ายตัวเลขเสมอ
        และตัวนับจะเปลี่ยนไปตามประเภทของสิ่งที่นับ เช่น นับคนใช้คำหนึ่งแบบ นับสัตว์ใช้อีกแบบ นับของยาวๆ ใช้อีกแบบ
        ต่างจากภาษาไทย/อังกฤษที่มักใช้คำนับแบบเดียวหรือไม่ต้องมีคำนับเลย
      </p>
      <div className="time-note th-text">
        <span>⚠️</span> ถ้าเลือกตัวนับผิดประเภท คนญี่ปุ่นจะยังพอเข้าใจ แต่จะฟังดูแปลกๆ เหมือนพูดผิดหลักไวยากรณ์
        ดังนั้นควรจำตัวนับที่ใช้บ่อยให้ได้แม่นๆ
      </div>

      <h4 className="jp-text past-subheading">ตัวอย่าง: คำว่า "หนึ่ง (1)" ในบริบทต่างกัน</h4>
      <div className="conj-example-list">
        {samples.map((c) => (
          <div key={c.id} className="conj-example-row" onClick={() => speak(c.counts[0].japanese, { rate: 0.8 })} role="button" tabIndex={0}>
            <span className="jp-text conj-word">{c.counts[0].japanese}</span>
            <span className="example-play">🔊</span>
            <p className="th-text group-rule-explanation">{c.titleTh}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
