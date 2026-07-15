import { Frame, INK } from "./shared";

/** Kana card backdrop: shows the character itself, large and centered. */
export default function KanaIllustration({ script, group, char = "", id }) {
  const fontSize = char.length > 2 ? "56" : char.length > 1 ? "70" : "92";
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
    </Frame>
  );
}
