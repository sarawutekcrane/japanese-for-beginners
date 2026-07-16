import { useSpeak } from "../../../hooks/useSpeech";
import { counters } from "../../../utils/counters";

/** Shared renderer for a single counter's 1-10 count list, used by each individual counter topic. */
export default function CounterDetail({ counterId }) {
  const { speak } = useSpeak();
  const counter = counters.find((c) => c.id === counterId);

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">🔢 {counter.titleTh}</h3>
      <div className="time-note th-text">
        <span>💡</span> {counter.usageTh}
      </div>

      <div className="conj-example-list">
        {counter.counts.map((c) => (
          <div key={c.n} className="conj-example-row" onClick={() => speak(c.japanese, { rate: 0.8 })} role="button" tabIndex={0}>
            <span className="jp-text conj-word">
              {c.n}. {c.japanese}
            </span>
            <span className="example-play">🔊</span>
          </div>
        ))}
      </div>
    </div>
  );
}
