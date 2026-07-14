import TopicForm from "./TopicForm";

export default function TopicMasu() {
  return (
    <TopicForm
      field="masu"
      heading={
        <>
          <h3 className="lesson-heading">✅ รูป ます (ปัจจุบัน/อนาคต)</h3>
          <div className="time-note th-text">
            <span>⏰</span> รูป ます เป็นรูป non-past ใช้ได้ทั้งเหตุการณ์ปัจจุบันและอนาคต ความหมายที่แท้จริงขึ้นอยู่กับคำบอกเวลาในประโยค
          </div>
        </>
      }
    />
  );
}
