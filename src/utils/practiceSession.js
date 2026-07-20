import { useState } from "react";
import { shuffle } from "./content";

function buildRound(items, shuffleOrder) {
  return { queue: shuffleOrder ? shuffle(items) : [...items], index: 0, correctCount: 0, missed: [] };
}

/**
 * Drives a single-pass, scored practice round over a fixed item list:
 * present each item exactly once (shuffled, or in original order when
 * `shuffleOrder` is false), and never re-insert a missed item back into the
 * same round. Tracks which items were answered incorrectly so the caller can
 * spin up a smaller "retry wrong answers only" round afterward via
 * startRetryRound — which itself follows the same single-pass rule (and the
 * same order preference), so it can be called again on a retry round's own
 * misses.
 *
 * restart() always goes back to the original full item list, regardless of
 * which round (initial or a retry round) is currently active.
 *
 * Rebuilds as soon as `items` changes reference or `shuffleOrder` flips (e.g.
 * the user toggles shuffle mid-session). The rebuild is computed into a local
 * variable and used directly for this render's return value — not just
 * scheduled via setState — so there's never a render where a consumer reads
 * a stale/empty round for the old `items`/order.
 */
export function usePracticeSession(items, shuffleOrder = true) {
  const [round, setRound] = useState(() => buildRound(items, shuffleOrder));
  const [trackedItems, setTrackedItems] = useState(items);
  const [trackedShuffleOrder, setTrackedShuffleOrder] = useState(shuffleOrder);

  let activeRound = round;
  if (items !== trackedItems || shuffleOrder !== trackedShuffleOrder) {
    activeRound = buildRound(items, shuffleOrder);
    setTrackedItems(items);
    setTrackedShuffleOrder(shuffleOrder);
    setRound(activeRound);
  }

  const submit = (isCorrect) => {
    setRound((r) => {
      const item = r.queue[r.index];
      return {
        ...r,
        index: r.index + 1,
        correctCount: r.correctCount + (isCorrect ? 1 : 0),
        missed: isCorrect ? r.missed : [...r.missed, item],
      };
    });
  };

  const restart = () => setRound(buildRound(items, shuffleOrder));

  const startRetryRound = () => setRound(buildRound(activeRound.missed, shuffleOrder));

  const totalCount = activeRound.queue.length;

  return {
    current: activeRound.queue[activeRound.index] ?? null,
    answeredCount: activeRound.index,
    totalCount,
    correctCount: activeRound.correctCount,
    finished: totalCount > 0 && activeRound.index >= totalCount,
    hasMissed: activeRound.missed.length > 0,
    submit,
    restart,
    startRetryRound,
  };
}
