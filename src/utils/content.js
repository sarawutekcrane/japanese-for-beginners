import hiragana from "../data/hiragana.json";
import katakana from "../data/katakana.json";
import vocabulary from "../data/vocabulary.json";

export const KANA_GROUPS = [
  { id: "seion", label: "เสียงพื้นฐาน (清音)", labelJa: "清音" },
  { id: "dakuon", label: "เสียงก้อง/กึ่งก้อง (濁音・半濁音)", labelJa: "濁音・半濁音" },
  { id: "youon", label: "เสียงควบ (拗音)", labelJa: "拗音" },
  { id: "sokuon", label: "เสียงกักซ้ำ (促音)", labelJa: "促音" },
  { id: "hatsuon", label: "เสียงนาสิก (撥音)", labelJa: "撥音" },
];

const KANA_GROUP_ORDER = ["seion", "dakuon", "youon", "sokuon", "hatsuon"];

export const VOCAB_CATEGORIES = [
  { id: "greetings", label: "คำทักทาย", emoji: "👋" },
  { id: "numbers", label: "ตัวเลข 1-20", emoji: "🔢" },
  { id: "colors", label: "สีสัน", emoji: "🎨" },
  { id: "foodDrinks", label: "อาหารและเครื่องดื่ม", emoji: "🍙" },
  { id: "animals", label: "สัตว์", emoji: "🐶" },
  { id: "family", label: "ครอบครัว", emoji: "👪" },
  { id: "bodyParts", label: "ส่วนต่างๆ ของร่างกาย", emoji: "✋" },
  { id: "places", label: "สถานที่", emoji: "🏫" },
  { id: "timeDays", label: "เวลาและวัน", emoji: "🕐" },
  { id: "household", label: "ของใช้ในบ้าน", emoji: "🛋️" },
  { id: "work", label: "งานและอาชีพ", emoji: "💼" },
  { id: "transportation", label: "การเดินทาง", emoji: "🚃" },
];

export function getKana(script) {
  return script === "hiragana" ? hiragana : katakana;
}

export function getKanaByGroup(script, group) {
  return getKana(script).filter((k) => k.group === group);
}

/** Full deck for a script, ordered: basic -> voiced/semi-voiced -> combined -> sokuon -> hatsuon. */
export function getKanaCombinedDeck(script) {
  const all = getKana(script);
  return KANA_GROUP_ORDER.flatMap((group) => all.filter((k) => k.group === group));
}

export function getVocab(category) {
  return vocabulary[category] || [];
}

export function getAllVocab() {
  return Object.values(vocabulary).flat();
}

export function getAllKana() {
  return [...hiragana, ...katakana];
}

/** Normalizes a kana or vocab entry into a common shape for quiz/flashcard use. */
export function toCard(entry) {
  if (entry.script) {
    return {
      id: entry.id,
      kind: "kana",
      display: entry.char,
      audioText: entry.char,
      answerText: entry.char,
      romaji: entry.romaji,
      thai: entry.thai,
      script: entry.script,
      group: entry.group,
    };
  }
  return {
    id: entry.id,
    kind: "vocab",
    display: entry.japanese,
    audioText: entry.japanese,
    answerText: entry.japanese,
    reading: entry.reading,
    romaji: entry.romaji,
    thai: entry.thai,
    icon: entry.icon,
    value: entry.value,
    hex: entry.hex,
  };
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
