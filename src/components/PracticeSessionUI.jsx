/** Shared in-session progress line for every shuffle-mode practice round —
 * identical wording/format everywhere so the experience feels uniform. */
export function PracticeProgress({ current, total, correct }) {
  return (
    <p className="progress-label">
      ทำไปแล้ว {current}/{total} ข้อ · คะแนน {correct}/{total}
    </p>
  );
}

/** Shared end-of-round results screen content (rendered inside the module's
 * own card wrapper). All-correct shows the module's own celebration text and
 * a single restart button; anything wrong shows the score plus a
 * retry-wrong-only button ahead of restart — identical wording everywhere. */
export function PracticeResults({ correct, total, celebration, onRetryWrong, onRestart }) {
  const allCorrect = total > 0 && correct === total;

  return (
    <>
      <p className="th-text conversation-complete">{allCorrect ? celebration : `คะแนน ${correct}/${total}`}</p>
      <div className="quiz-actions">
        {!allCorrect && (
          <button className="btn btn-outline btn-sm" onClick={onRetryWrong}>
            ลองทำเฉพาะข้อที่ตอบผิด
          </button>
        )}
        <button className="btn btn-success btn-sm" onClick={onRestart}>
          เริ่มใหม่
        </button>
      </div>
    </>
  );
}
