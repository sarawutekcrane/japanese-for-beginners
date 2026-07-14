import { useSpeak } from "../../hooks/useSpeech";
import { getGroupExamples, getTeFormBreakdown, groupLabel } from "../../utils/grammar";

export default function ConjugationLesson({ pattern, onStartPractice }) {
  const { speak } = useSpeak();
  const groupExamples = getGroupExamples(pattern);
  const teBreakdown = pattern.conjugationField === "te" ? getTeFormBreakdown() : [];

  return (
    <div className="lesson-view">
      <div className="lesson-card">
        <h3 className="lesson-heading">
          🈺 วิธีผันกริยาเป็นรูป <span className="jp-text">{pattern.formLabel}</span>
        </h3>

        <div className="group-rule-list">
          {groupExamples.map(({ group, verb, conjugated, explanation }) => (
            <div key={group} className="group-rule-card" onClick={() => speak(conjugated, { rate: 0.8 })} role="button" tabIndex={0}>
              <span className="verb-group th-text">{groupLabel(group)}</span>
              <p className="jp-text group-rule-example">
                {verb.dict} → {conjugated}
              </p>
              <p className="th-text group-rule-explanation">{explanation}</p>
            </div>
          ))}
        </div>

        {teBreakdown.length > 0 && (
          <>
            <h3 className="lesson-heading">🔍 การเปลี่ยนเสียงของรูปて (กริยากลุ่ม 1)</h3>
            <div className="te-table">
              {teBreakdown.map((row) => (
                <div key={row.key} className="te-table-row">
                  <p className="jp-text te-table-example">
                    {row.verb.dict} → {row.verb.te}
                  </p>
                  <p className="th-text te-table-rule">{row.rule}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <button className="btn btn-success" onClick={onStartPractice}>
        เริ่มฝึกผันกริยา →
      </button>
    </div>
  );
}
