import verbs from "../data/verbs.json";
import patterns from "../data/sentencePatterns.json";
import { shuffle } from "./content";

export const CONJUGATION_FIELDS = ["masu", "masen", "mashita", "masendeshita", "te", "tai", "nai", "ta", "nakatta"];

const KANJI_MAP = new Map();
for (const verb of verbs) {
  if (!verb.kanji) continue;
  for (const [field, segs] of Object.entries(verb.kanji)) {
    KANJI_MAP.set(verb[field], segs);
  }
}

/** Looks up Kanji+furigana segments for a verb form's kana string, e.g. "たべます" -> 食べます segments. */
export function kanjiForVerbForm(kana) {
  return KANJI_MAP.get(kana);
}

const GROUP_LABEL_TH = {
  1: "กลุ่ม 1 (godan)",
  2: "กลุ่ม 2 (ichidan)",
  3: "กลุ่ม 3 (ผันไม่ตามกฎ)",
};

export function groupLabel(group) {
  return GROUP_LABEL_TH[group] || "";
}

const TE_RULE_TH = {
  "u-tsu-ru": "กริยากลุ่ม 1 ที่ลงท้ายด้วย う・つ・る เปลี่ยนท้ายเป็น って",
  "mu-bu-nu": "กริยากลุ่ม 1 ที่ลงท้ายด้วย む・ぶ・ぬ เปลี่ยนท้ายเป็น んで",
  ku: "กริยากลุ่ม 1 ที่ลงท้ายด้วย く เปลี่ยนท้ายเป็น いて",
  gu: "กริยากลุ่ม 1 ที่ลงท้ายด้วย ぐ เปลี่ยนท้ายเป็น いで",
  su: "กริยากลุ่ม 1 ที่ลงท้ายด้วย す เปลี่ยนท้ายเป็น して",
  "exception-iku": "คำนี้เป็นข้อยกเว้น: いく → いって (ไม่ใช่ いいて)",
  ichidan: "กริยากลุ่ม 2 (ichidan): ตัด る ออกแล้วเติมส่วนขยายได้ทันที",
  irregular: "กริยากลุ่ม 3 ผันไม่ตามกฎ ต้องจำรูปผันไว้เป็นพิเศษ",
};

/** Thai explanation of the conjugation rule that applies to a verb+field. */
export function explanationFor(verb, field) {
  if (field === "te") {
    return TE_RULE_TH[verb.teGroup] || "";
  }
  if (field === "nai") {
    if (verb.group === 1) {
      const exception = verb.dict.endsWith("う") ? " (ข้อยกเว้น: ลงท้ายด้วย う เปลี่ยนเป็น わ ไม่ใช่ あ)" : "";
      return "กริยากลุ่ม 1 (godan): เปลี่ยนเสียงท้ายจากแถว อุ เป็นแถว อะ แล้วเติม ない" + exception + " เช่น " + verb.dict + " → " + verb.nai;
    }
    if (verb.group === 2) {
      return "กริยากลุ่ม 2 (ichidan): ตัด る ออกแล้วเติม ない เช่น " + verb.dict + " → " + verb.nai;
    }
    return "กริยากลุ่ม 3 ผันไม่ตามกฎ ต้องจำรูปปฏิเสธธรรมดาของ " + verb.dict + " ไว้เป็นพิเศษ";
  }
  if (field === "ta") {
    if (verb.group === 3) {
      return "กริยากลุ่ม 3 ผันไม่ตามกฎ ต้องจำรูปอดีตธรรมดาของ " + verb.dict + " ไว้เป็นพิเศษ";
    }
    return "เปลี่ยนเสียงท้ายแบบเดียวกับรูปて (" + (TE_RULE_TH[verb.teGroup] || "") + ") แต่ลงท้ายด้วย だ/た แทน で/て เช่น " + verb.te + " → " + verb.ta;
  }
  if (field === "nakatta") {
    return "ผันจากรูปปฏิเสธธรรมดา (ない) โดยเปลี่ยน い ท้ายเป็น かった เช่น " + verb.nai + " → " + verb.nakatta;
  }
  if (verb.group === 1) {
    return "กริยากลุ่ม 1 (godan): เปลี่ยนเสียงท้ายจากแถว อุ เป็นแถว อิ แล้วเติมส่วนขยาย เช่น " + verb.dict + " → " + verb.masu;
  }
  if (verb.group === 2) {
    return "กริยากลุ่ม 2 (ichidan): ตัด る ออกแล้วเติมส่วนขยายได้ทันที เช่น " + verb.dict + " → " + verb.masu;
  }
  return "กริยากลุ่ม 3 ผันไม่ตามกฎ ต้องจำรูปผันของ " + verb.dict + " ไว้เป็นพิเศษ";
}

/** Builds one multiple-choice conjugation question for a verb under the given sentence pattern. */
export function buildConjugationQuestion(verb, pattern) {
  const suffix = pattern.conjugationSuffix || "";
  const suffixRomaji = pattern.conjugationSuffixRomaji || "";
  const correct = verb[pattern.conjugationField] + suffix;
  const correctRomaji = verb.romaji[pattern.conjugationField] + suffixRomaji;
  const otherFields = shuffle(CONJUGATION_FIELDS.filter((f) => f !== pattern.conjugationField)).slice(0, 3);
  const distractorPairs = otherFields.map((f) => ({ text: verb[f] + suffix, romaji: verb.romaji[f] + suffixRomaji }));
  const optionPairs = shuffle([{ text: correct, romaji: correctRomaji }, ...distractorPairs]);
  const options = optionPairs.map((p) => p.text);
  const optionRomaji = Object.fromEntries(optionPairs.map((p) => [p.text, p.romaji]));
  return {
    id: `${pattern.id}-${verb.id}`,
    verb,
    formLabel: pattern.formLabel,
    correct,
    correctRomaji,
    dictRomaji: verb.romaji.dict,
    options,
    optionRomaji,
    explanation: explanationFor(verb, pattern.conjugationField),
  };
}

/** All conjugation questions (one per verb) for a given sentence pattern. */
export function getConjugationQuestions(pattern) {
  if (!pattern.conjugationField) return [];
  return verbs.map((v) => buildConjugationQuestion(v, pattern));
}

/** Combined pool: every verb x every sentence pattern's target form (used by practice mode). */
export function getAllConjugationQuestions() {
  return patterns
    .filter((pattern) => pattern.conjugationField)
    .flatMap((pattern) => verbs.map((v) => buildConjugationQuestion(v, pattern)));
}

/** One representative worked example per verb group (1/2/3) for a { conjugationField, conjugationSuffix } shape. */
export function getGroupExamples(formSpec) {
  const suffix = formSpec.conjugationSuffix || "";
  return [1, 2, 3]
    .map((group) => verbs.find((v) => v.group === group))
    .filter(Boolean)
    .map((verb) => ({
      group: verb.group,
      verb,
      conjugated: verb[formSpec.conjugationField] + suffix,
      explanation: explanationFor(verb, formSpec.conjugationField),
    }));
}

/** Several worked examples per verb group for a given conjugation field (used by the conjugation lesson topics). */
export function getGroupExamplesList(field, count = 4) {
  return [1, 2, 3].map((group) => ({
    group,
    items: verbs
      .filter((v) => v.group === group)
      .slice(0, count)
      .map((v) => ({ verb: v, conjugated: v[field], explanation: explanationFor(v, field) })),
  }));
}

const TE_RULE_ORDER = ["u-tsu-ru", "mu-bu-nu", "ku", "gu", "su", "exception-iku"];

/** Sound-change breakdown table for the て form, one example verb per ending category. */
export function getTeFormBreakdown() {
  return TE_RULE_ORDER.map((key) => ({
    key,
    rule: TE_RULE_TH[key],
    verb: verbs.find((v) => v.teGroup === key),
  })).filter((row) => row.verb);
}

export { verbs };
