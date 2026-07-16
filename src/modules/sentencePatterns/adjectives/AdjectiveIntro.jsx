import { useSpeak } from "../../../hooks/useSpeech";

export default function AdjectiveIntro() {
  const { speak } = useSpeak();

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">💡 い-adjective กับ な-adjective ต่างกันอย่างไร</h3>
      <p className="th-text group-rule-explanation">
        คำคุณศัพท์ในภาษาญี่ปุ่นแบ่งเป็น 2 กลุ่มหลัก คือ い-adjective (คำที่ลงท้ายด้วยเสียง い ในรูปพจนานุกรม)
        และ な-adjective (คำที่ต้องเติม な ก่อนนำไปขยายคำนาม) ทั้งสองกลุ่มผันรูปต่างกัน จึงต้องแยกให้ออกก่อนผัน
      </p>

      <div className="group-rule-card" onClick={() => speak("おおきい", { rate: 0.8 })} role="button" tabIndex={0}>
        <span className="verb-group th-text">い-adjective</span>
        <p className="th-text group-rule-explanation">
          ลงท้ายด้วย い เสมอในรูปพจนานุกรม เช่น おおきい (ใหญ่) ผันรูปได้ด้วยตัวเอง ไม่ต้องมีคำช่วยอื่น
        </p>
        <div className="verb-chip-row">
          <span className="verb-chip jp-text">おおきい 🔊</span>
        </div>
      </div>

      <div className="group-rule-card" onClick={() => speak("きれいなひと", { rate: 0.8 })} role="button" tabIndex={0}>
        <span className="verb-group th-text">な-adjective</span>
        <p className="th-text group-rule-explanation">
          ต้องเติม な ก่อนนำไปขยายคำนามโดยตรง เช่น きれいな ひと (คนสวย) แต่ผันรูป です/でした แบบเดียวกับคำนาม ไม่ผันแบบ い-adjective
        </p>
        <div className="verb-chip-row">
          <span className="verb-chip jp-text">きれいな ひと 🔊</span>
        </div>
      </div>

      <div className="time-note th-text">
        <span>💡</span> วิธีสังเกตง่ายๆ: ถ้าคำลงท้ายด้วย い และเป็นคำคุณศัพท์ (ไม่ใช่คำนามที่บังเอิญลงท้าย い เช่น
        たべもの) มักเป็น い-adjective ส่วนคำอื่นๆ ที่ไม่ลงท้าย い มักเป็น な-adjective
      </div>
    </div>
  );
}
