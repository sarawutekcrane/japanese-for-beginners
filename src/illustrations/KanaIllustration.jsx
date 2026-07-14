import { Frame, INK } from "./shared";

/** Light decorative backdrop for kana cards (character itself is rendered as text by the card). */
export default function KanaIllustration({ script, group, id }) {
  const petal = script === "hiragana" ? "#ff9ec7" : "#8fcfff";
  return (
    <Frame id={id || `${script}-${group}`}>
      <g opacity="0.55">
        <path d="M100 40 C 112 55 112 70 100 84 C 88 70 88 55 100 40 Z" fill={petal} />
        <path d="M100 40 C 112 55 112 70 100 84 C 88 70 88 55 100 40 Z" fill={petal} transform="rotate(72 100 84)" />
        <path d="M100 40 C 112 55 112 70 100 84 C 88 70 88 55 100 40 Z" fill={petal} transform="rotate(144 100 84)" />
        <path d="M100 40 C 112 55 112 70 100 84 C 88 70 88 55 100 40 Z" fill={petal} transform="rotate(216 100 84)" />
        <path d="M100 40 C 112 55 112 70 100 84 C 88 70 88 55 100 40 Z" fill={petal} transform="rotate(288 100 84)" />
        <circle cx="100" cy="84" r="8" fill="#ffd166" stroke={INK} strokeWidth="2" />
      </g>
      <text
        x="100"
        y="160"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={INK}
        opacity="0.45"
        fontFamily="'Baloo 2', sans-serif"
      >
        {group === "seion" ? "清音" : group === "dakuon" ? "濁音・半濁音" : "拗音"}
      </text>
    </Frame>
  );
}
