import { useSpeak } from "../../../hooks/useSpeech";
import { counters } from "../../../utils/counters";
import JapaneseText from "../../../components/JapaneseText";

const NUMBERS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function CounterComparisonTable() {
  const { speak } = useSpeak();

  return (
    <div className="lesson-card">
      <h3 className="lesson-heading">📊 ตารางเปรียบเทียบตัวนับทั้งหมด (1-10)</h3>
      <p className="th-text group-rule-explanation">แตะคำในตารางเพื่อฟังเสียง</p>

      <div className="scroll-x-safe">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>เลข</th>
              {counters.map((c) => (
                <th key={c.id} className="jp-text">
                  {c.char}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {NUMBERS.map((n) => (
              <tr key={n}>
                <td>{n}</td>
                {counters.map((c) => {
                  const count = c.counts.find((x) => x.n === n);
                  return (
                    <td
                      key={c.id}
                      className="jp-text comparison-cell"
                      onClick={() => speak(count.japanese, { rate: 0.8 })}
                      role="button"
                      tabIndex={0}
                    >
                      <JapaneseText kana={count.japanese} kanji={count.kanji} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
