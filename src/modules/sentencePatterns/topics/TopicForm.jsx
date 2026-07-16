import { useSpeak } from "../../../hooks/useSpeech";
import { getGroupExamplesList, groupLabel } from "../../../utils/grammar";
import ConjugatedWord from "../ConjugatedWord";

/** Shared renderer for a single conjugation field (ます/ません/ました/ませんでした/たい), grouped by verb group. */
export default function TopicForm({ field, heading }) {
  const { speak } = useSpeak();
  const groups = getGroupExamplesList(field, 4);

  return (
    <div className="lesson-card">
      {heading}
      {groups.map(({ group, items }) => (
        <div key={group} className="group-rule-card">
          <span className="verb-group th-text">{groupLabel(group)}</span>
          <div className="conj-example-list">
            {items.map(({ verb, conjugated, explanation }, i) => (
              <div key={verb.id} className="conj-example-row" onClick={() => speak(conjugated)} role="button" tabIndex={0}>
                <ConjugatedWord dict={verb.dict} conjugated={conjugated} />
                <span className="example-play">🔊</span>
                {i === 0 && <p className="th-text group-rule-explanation">{explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
