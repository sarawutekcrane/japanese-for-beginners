import TopicForm from "./TopicForm";

export default function TopicTai() {
  return (
    <TopicForm
      field="tai"
      heading={
        <>
          <h3 className="lesson-heading">💭 รูป たい (อยากทำ)</h3>
          <div className="time-note th-text">
            <span>💡</span> ตัดส่วน ます ออกจากรูป ます (เหลือ "รากกริยา" หรือ masu-stem) แล้วเติม たいです ใช้บอกความต้องการของผู้พูดเอง
          </div>
        </>
      }
    />
  );
}
