import counters from "../data/counters.json";
import { shuffle, sample } from "./content";

export { counters };

const KANJI_MAP = new Map();
for (const counter of counters) {
  for (const count of counter.counts) {
    if (count.kanji) KANJI_MAP.set(count.japanese, count.kanji);
  }
}

/** Looks up Kanji+furigana segments for a counted phrase's kana string, e.g. "さんぼん" -> 三本 segments. */
export function kanjiForCount(kana) {
  return KANJI_MAP.get(kana);
}

function buildCounterQuestion(counter, count, object) {
  const distractors = sample(
    counter.counts.filter((c) => c.n !== count.n),
    3
  );
  const optionPairs = shuffle([count, ...distractors]);
  const options = optionPairs.map((c) => c.japanese);
  const optionRomaji = Object.fromEntries(optionPairs.map((c) => [c.japanese, c.romaji]));
  return {
    id: `${counter.id}-${count.n}`,
    counter,
    n: count.n,
    object,
    promptTh: `${object.th} ${count.n} ${object.unitTh}`,
    correct: count.japanese,
    correctRomaji: count.romaji,
    options,
    optionRomaji,
  };
}

/** Combined pool: every counter x every number 1-10, one sample object rotated in for variety. */
export function getAllCounterQuestions() {
  return counters.flatMap((counter) =>
    counter.counts.map((count, i) => buildCounterQuestion(counter, count, counter.objects[i % counter.objects.length]))
  );
}
