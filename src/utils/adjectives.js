import adjectives from "../data/adjectives.json";
import { shuffle } from "./content";

export { adjectives };

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
  const distractors = FORM_FIELDS.filter((f) => f !== field).map((f) => adj.forms[f].japanese);
  const options = shuffle([correct, ...distractors]);
  return {
    id: `${adj.id}-${field}`,
    adj,
    field,
    formLabel: formLabel(field),
    correct,
    correctRomaji,
    options,
  };
}

/** Combined pool: every adjective x every one of its 4 forms. */
export function getAllAdjectiveQuestions() {
  return adjectives.flatMap((adj) => FORM_FIELDS.map((field) => buildAdjectiveQuestion(adj, field)));
}
