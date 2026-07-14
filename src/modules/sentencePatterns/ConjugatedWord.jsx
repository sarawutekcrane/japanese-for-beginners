function commonPrefixLength(a, b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

/** Renders dict -> conjugated with the changing ending highlighted, e.g. か|う -> か|って. */
export default function ConjugatedWord({ dict, conjugated }) {
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
