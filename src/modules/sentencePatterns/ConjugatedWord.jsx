import { useSettings } from "../../context/SettingsContext";
import JapaneseText from "../../components/JapaneseText";
import { kanjiForVerbForm } from "../../utils/grammar";

function commonPrefixLength(a, b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

/**
 * Renders dict -> conjugated. When Kanji is off (or no Kanji form exists for
 * either side), shows the kana with the changing ending highlighted, e.g.
 * か|う -> か|って. When Kanji is on, shows the Kanji forms (with furigana
 * per that toggle) side by side instead, since the stem-highlight concept
 * doesn't carry over cleanly to Kanji orthography.
 */
export default function ConjugatedWord({ dict, conjugated }) {
  const { showKanji } = useSettings();
  const dictKanji = kanjiForVerbForm(dict);
  const conjugatedKanji = kanjiForVerbForm(conjugated);

  if (showKanji && dictKanji && conjugatedKanji) {
    return (
      <span className="conj-word jp-text">
        <JapaneseText kana={dict} kanji={dictKanji} />
        <span className="conj-arrow"> → </span>
        <JapaneseText kana={conjugated} kanji={conjugatedKanji} />
      </span>
    );
  }

  const i = commonPrefixLength(dict, conjugated);
  const stem = dict.slice(0, i);
  const dictEnd = dict.slice(i) || dict;
  const conjEnd = conjugated.slice(i) || conjugated;

  return (
    <span className="conj-word jp-text">
      <span>{stem}</span>
      <span className="conj-ending conj-old">{dictEnd}</span>
      <span className="conj-arrow"> → </span>
      <span>{stem}</span>
      <span className="conj-ending conj-new">{conjEnd}</span>
    </span>
  );
}
