import { Frame, INK } from "./shared";

const GROUP_LABEL = {
  seion: "清音",
  dakuon: "濁音・半濁音",
  youon: "拗音",
  sokuon: "促音",
  hatsuon: "撥音",
};

/** Kana card backdrop: shows the character itself, large and centered. */
export default function KanaIllustration({ script, group, char = "", id }) {
  const fontSize = char.length > 2 ? "52" : char.length > 1 ? "64" : "84";
  return (
    <Frame id={id || `${script}-${group}`}>
      <text
        x="100"
        y="104"
        fontSize={fontSize}
        fontWeight="700"
        textAnchor="middle"
        dominantBaseline="central"
        fill={INK}
        fontFamily="'M PLUS Rounded 1c', 'Baloo 2', sans-serif"
      >
        {char}
      </text>
      <text
        x="100"
        y="164"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={INK}
        opacity="0.45"
        fontFamily="'Baloo 2', sans-serif"
      >
        {GROUP_LABEL[group] || ""}
      </text>
    </Frame>
  );
}
