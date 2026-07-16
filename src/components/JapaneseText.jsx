import { useSettings } from "../context/SettingsContext";

/**
 * Renders Japanese text, switching between the plain Hiragana/Katakana
 * fallback and a Kanji + furigana form based on the global settings toggle.
 * `kanji` is an array of segments: { text, reading? } — segments with a
 * reading render as ruby/rt when the furigana toggle is on, plain text
 * (kanji, no reading shown) when it's off. Absent `kanji` always falls
 * back to `kana`, regardless of toggle state.
 */
export default function JapaneseText({ kana, kanji, className, as: Tag = "span" }) {
  const { showKanji, showFurigana } = useSettings();

  if (!showKanji || !kanji) {
    return <Tag className={className}>{kana}</Tag>;
  }

  return (
    <Tag className={className}>
      {kanji.map((seg, i) =>
        seg.reading && showFurigana ? (
          <ruby key={i}>
            {seg.text}
            <rt>{seg.reading}</rt>
          </ruby>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </Tag>
  );
}
