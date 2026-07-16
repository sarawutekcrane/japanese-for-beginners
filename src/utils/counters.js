import counters from "../data/counters.json";
import { shuffle, sample } from "./content";

export { counters };

function buildCounterQuestion(counter, count, object) {
  const distractors = sample(
    counter.counts.filter((c) => c.n !== count.n),
    3
  );
  const options = shuffle([count.japanese, ...distractors.map((d) => d.japanese)]);
  return {
    id: `${counter.id}-${count.n}`,
    counter,
    n: count.n,
    object,
    promptTh: `${object.th} ${count.n} ${object.unitTh}`,
    correct: count.japanese,
    correctRomaji: count.romaji,
    options,
  };
}

/** Combined pool: every counter x every number 1-10, one sample object rotated in for variety. */
export function getAllCounterQuestions() {
  return counters.flatMap((counter) =>
    counter.counts.map((count, i) => buildCounterQuestion(counter, count, counter.objects[i % counter.objects.length]))
  );
}
