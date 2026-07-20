import { useMemo, useState } from "react";
import { detectInAppBrowser } from "../utils/inAppBrowser";

/**
 * Warns the learner when Speaking Practice is opened inside a known in-app
 * browser (LINE, Facebook, Instagram) where microphone-based speech recognition
 * typically doesn't work. Purely advisory — never blocks the mic button, since
 * some WebViews may partially support it despite the detection.
 */
export default function InAppBrowserNotice() {
  const browser = useMemo(() => detectInAppBrowser(), []);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!browser || dismissed) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="inapp-browser-notice">
      <p className="th-text">
        📱 คุณกำลังเปิดแอปนี้ผ่านเบราว์เซอร์ในแอป {browser.name} ซึ่งฟีเจอร์พูดตอบ (ไมโครโฟน) อาจไม่ทำงานอย่างถูกต้อง
        กรุณาเปิดในเบราว์เซอร์ปกติ (เช่น Chrome หรือ Safari) เพื่อการใช้งานที่ดีที่สุด
      </p>

      {browser.openExternally ? (
        <div className="inapp-browser-actions">
          <button className="btn btn-success btn-sm" onClick={browser.openExternally}>
            🌐 เปิดในเบราว์เซอร์
          </button>
          <button className="btn btn-outline btn-sm" onClick={() => setDismissed(true)}>
            ปิด
          </button>
        </div>
      ) : (
        <>
          <p className="th-text inapp-browser-hint">กรุณาคัดลอกลิงก์นี้แล้วเปิดใน Chrome หรือ Safari</p>
          <div className="inapp-browser-actions">
            <button className="btn btn-success btn-sm" onClick={copyLink}>
              {copied ? "คัดลอกแล้ว ✓" : "📋 คัดลอกลิงก์"}
            </button>
            <button className="btn btn-outline btn-sm" onClick={() => setDismissed(true)}>
              ปิด
            </button>
          </div>
        </>
      )}
    </div>
  );
}
