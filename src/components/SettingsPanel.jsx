import Toggle from "./Toggle";
import { useSettings } from "../context/SettingsContext";

export default function SettingsPanel({ onClose }) {
  const { showKanji, setShowKanji, showFurigana, setShowFurigana } = useSettings();

  return (
    <div className="settings-overlay" onClick={onClose} role="presentation">
      <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
        <div className="settings-panel-header">
          <h3 className="th-text">⚙️ ตั้งค่า</h3>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            ปิด
          </button>
        </div>

        <div className="toggle-group">
          <Toggle label="แสดงคันจิ (Kanji)" checked={showKanji} onChange={setShowKanji} />
          {showKanji && <Toggle label="แสดงฟุริงานะ (Furigana)" checked={showFurigana} onChange={setShowFurigana} />}
        </div>

        <p className="th-text settings-note">
          เมื่อเปิด "แสดงคันจิ" คำศัพท์ที่มีคันจิมาตรฐานจะแสดงเป็นคันจิแทนฮิรางานะ/คาตากานะทั่วทั้งแอป
          (ยกเว้นการ์ดฝึกอ่านตัวอักษรฮิรางานะ/คาตากานะซึ่งจะแสดงเป็นตัวอักษรเสมอ) การตั้งค่านี้จะถูกจดจำไว้ตลอดการใช้งาน
        </p>
      </div>
    </div>
  );
}
