import adjectives from "../data/adjectives.json";
import { shuffle } from "./content";

export { adjectives };

const KANJI_MAP = new Map();
for (const adj of adjectives) {
  if (adj.kanji) KANJI_MAP.set(adj.dict, adj.kanji);
  for (const form of Object.values(adj.forms)) {
    if (form.kanji) KANJI_MAP.set(form.japanese, form.kanji);
  }
}

/** Looks up Kanji+furigana segments for an adjective's kana string, e.g. "たかいです" -> 高いです segments. */
export function kanjiForAdjective(kana) {
  return KANJI_MAP.get(kana);
}

export const FORM_FIELDS = ["affirmative", "negative", "past", "pastNegative"];

const FORM_LABEL_TH = {
  affirmative: "บอกเล่า (ปัจจุบัน)",
  negative: "ปฏิเสธ (ปัจจุบัน)",
  past: "อดีต",
  pastNegative: "ปฏิเสธอดีต",
};

const TYPE_LABEL_TH = {
  i: "い-adjective",
  na: "な-adjective",
  irregular: "คำยกเว้นพิเศษ",
};

export function formLabel(field) {
  return FORM_LABEL_TH[field] || field;
}

export function typeLabel(type) {
  return TYPE_LABEL_TH[type] || "";
}

/** Builds one multiple-choice conjugation question for an adjective targeting one of its 4 forms. */
export function buildAdjectiveQuestion(adj, field) {
  const correct = adj.forms[field].japanese;
  const correctRomaji = adj.forms[field].romaji;
  const otherFields = FORM_FIELDS.filter((f) => f !== field);
  const optionPairs = shuffle([
    { text: correct, romaji: correctRomaji },
    ...otherFields.map((f) => ({ text: adj.forms[f].japanese, romaji: adj.forms[f].romaji })),
  ]);
  const options = optionPairs.map((p) => p.text);
  const optionRomaji = Object.fromEntries(optionPairs.map((p) => [p.text, p.romaji]));
  return {
    id: `${adj.id}-${field}`,
    adj,
    field,
    formLabel: formLabel(field),
    correct,
    correctRomaji,
    options,
    optionRomaji,
  };
}

/** Combined pool: every adjective x every one of its 4 forms. */
export function getAllAdjectiveQuestions() {
  return adjectives.flatMap((adj) => FORM_FIELDS.map((field) => buildAdjectiveQuestion(adj, field)));
}
