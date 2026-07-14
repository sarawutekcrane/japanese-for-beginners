import TopicForm from "./TopicForm";

export default function TopicMasen() {
  return (
    <TopicForm
      field="masen"
      heading={
        <>
          <h3 className="lesson-heading">🚫 รูป ません (ปฏิเสธ)</h3>
          <div className="time-note th-text">
            <span>💡</span> ません คือรูปปฏิเสธของ ます ใช้โครงสร้างการผันแบบเดียวกัน เปลี่ยนแค่ส่วนท้ายจาก ます เป็น ません
          </div>
        </>
      }
    />
  );
}
