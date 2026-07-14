import { Frame, INK } from "./shared";

function Clock({ face = "#ffffff", hourAngle = -30, minuteAngle = 60 }) {
  const hx = 100 + 22 * Math.sin((hourAngle * Math.PI) / 180);
  const hy = 100 - 22 * Math.cos((hourAngle * Math.PI) / 180);
  const mx = 100 + 32 * Math.sin((minuteAngle * Math.PI) / 180);
  const my = 100 - 32 * Math.cos((minuteAngle * Math.PI) / 180);
  return (
    <g>
      <circle cx="100" cy="100" r="46" fill={face} stroke={INK} strokeWidth="3.5" />
      <circle cx="100" cy="100" r="4" fill={INK} />
      <line x1="100" y1="100" x2={hx} y2={hy} stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="100" x2={mx} y2={my} stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
    </g>
  );
}

export const householdIcons = {
  "house-table": (id) => (
    <Frame id={id}>
      <rect x="54" y="96" width="92" height="14" rx="4" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <rect x="60" y="110" width="10" height="34" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
      <rect x="130" y="110" width="10" height="34" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "house-chair": (id) => (
    <Frame id={id}>
      <rect x="70" y="60" width="60" height="10" rx="3" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="70" y="70" width="10" height="60" fill="#8fcfff" stroke={INK} strokeWidth="2.5" />
      <rect x="70" y="110" width="60" height="12" rx="3" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="70" y="122" width="10" height="26" fill="#5a4a52" opacity="0.6" />
      <rect x="120" y="122" width="10" height="26" fill="#5a4a52" opacity="0.6" />
    </Frame>
  ),
  "house-bed": (id) => (
    <Frame id={id}>
      <rect x="54" y="100" width="92" height="34" rx="6" fill="#ffd6e8" stroke={INK} strokeWidth="3" />
      <rect x="54" y="88" width="26" height="20" rx="6" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
      <rect x="54" y="134" width="92" height="10" fill="#c08a5e" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "house-door": (id) => (
    <Frame id={id}>
      <rect x="72" y="56" width="56" height="90" rx="6" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <circle cx="114" cy="102" r="4" fill="#f6d34c" />
    </Frame>
  ),
  "house-window": (id) => (
    <Frame id={id}>
      <rect x="60" y="60" width="80" height="80" rx="8" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <line x1="100" y1="60" x2="100" y2="140" stroke={INK} strokeWidth="3" />
      <line x1="60" y1="100" x2="140" y2="100" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "house-tv": (id) => (
    <Frame id={id}>
      <rect x="52" y="62" width="96" height="62" rx="8" fill="#2f2b52" stroke={INK} strokeWidth="3" />
      <rect x="62" y="72" width="76" height="42" rx="4" fill="#8fcfff" opacity="0.85" />
      <rect x="90" y="124" width="20" height="10" fill="#5a4a52" />
      <rect x="76" y="134" width="48" height="8" rx="3" fill="#5a4a52" />
    </Frame>
  ),
  "house-fridge": (id) => (
    <Frame id={id}>
      <rect x="66" y="50" width="68" height="104" rx="8" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <line x1="66" y1="90" x2="134" y2="90" stroke={INK} strokeWidth="2.5" />
      <rect x="122" y="60" width="6" height="18" rx="3" fill="#8fcfff" />
      <rect x="122" y="98" width="6" height="18" rx="3" fill="#8fcfff" />
    </Frame>
  ),
  "house-clock": (id) => (
    <Frame id={id}>
      <Clock face="#fff3da" hourAngle={-60} minuteAngle={90} />
    </Frame>
  ),
  "house-phone": (id) => (
    <Frame id={id}>
      <rect x="76" y="52" width="48" height="96" rx="10" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <rect x="84" y="64" width="32" height="60" rx="4" fill="#ffffff" />
      <circle cx="100" cy="136" r="4" fill="#ffffff" />
    </Frame>
  ),
  "house-book": (id) => (
    <Frame id={id}>
      <path d="M 60 60 L 100 68 L 100 148 L 60 140 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 140 60 L 100 68 L 100 148 L 140 140 Z" fill="#ff9ec7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "house-cup": (id) => (
    <Frame id={id}>
      <path d="M 70 96 Q 68 138 100 142 Q 132 138 130 96 Z" fill="#ffffff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 130 104 Q 148 104 146 118 Q 144 130 130 128" fill="none" stroke={INK} strokeWidth="3.5" />
    </Frame>
  ),
  "house-plate": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="112" rx="52" ry="24" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <ellipse cx="100" cy="112" rx="30" ry="13" fill="#dff1ff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "house-spoon": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="76" rx="16" ry="22" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <line x1="100" y1="96" x2="100" y2="150" stroke="#c9ccd6" strokeWidth="10" strokeLinecap="round" />
      <line x1="100" y1="96" x2="100" y2="150" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
  "house-fork": (id) => (
    <Frame id={id}>
      <line x1="86" y1="56" x2="86" y2="90" stroke="#c9ccd6" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="56" x2="100" y2="90" stroke="#c9ccd6" strokeWidth="6" strokeLinecap="round" />
      <line x1="114" y1="56" x2="114" y2="90" stroke="#c9ccd6" strokeWidth="6" strokeLinecap="round" />
      <path d="M 84 90 Q 100 100 116 90 L 112 100 Q 100 106 88 100 Z" fill="#c9ccd6" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <line x1="100" y1="100" x2="100" y2="150" stroke="#c9ccd6" strokeWidth="10" strokeLinecap="round" />
    </Frame>
  ),
  "house-towel": (id) => (
    <Frame id={id}>
      <rect x="64" y="66" width="72" height="88" rx="10" fill="#ffd6e8" stroke={INK} strokeWidth="3" />
      <line x1="64" y1="90" x2="136" y2="90" stroke="#ffffff" strokeWidth="6" opacity="0.7" />
      <line x1="64" y1="112" x2="136" y2="112" stroke="#ffffff" strokeWidth="6" opacity="0.7" />
    </Frame>
  ),
  "house-freezer": (id) => (
    <Frame id={id}>
      <rect x="66" y="60" width="68" height="90" rx="8" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <line x1="66" y1="98" x2="134" y2="98" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 70 L 100 88 M 91 74 L 109 84 M 109 74 L 91 84" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="122" y="112" width="6" height="18" rx="3" fill="#8fcfff" />
    </Frame>
  ),
  "house-washer": (id) => (
    <Frame id={id}>
      <rect x="60" y="56" width="80" height="90" rx="8" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="102" r="28" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="102" r="18" fill="#ffffff" opacity="0.6" />
      <rect x="72" y="66" width="14" height="8" rx="3" fill="#5a4a52" opacity="0.5" />
    </Frame>
  ),
  "house-microwave": (id) => (
    <Frame id={id}>
      <rect x="54" y="74" width="92" height="58" rx="6" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <rect x="62" y="82" width="58" height="42" rx="4" fill="#8fa0b8" stroke={INK} strokeWidth="2" />
      <circle cx="132" cy="90" r="4" fill="#5a4a52" />
      <rect x="126" y="100" width="12" height="6" fill="#5a4a52" opacity="0.6" />
      <rect x="126" y="112" width="12" height="6" fill="#5a4a52" opacity="0.6" />
    </Frame>
  ),
  "house-ricecooker": (id) => (
    <Frame id={id}>
      <path d="M 62 100 Q 62 138 100 140 Q 138 138 138 100 Z" fill="#e8e2e5" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="56" y="90" width="88" height="14" rx="6" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <path d="M 84 76 Q 78 62 86 52 M 100 76 Q 94 62 102 52 M 116 76 Q 110 62 118 52" stroke="#c7b6bd" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.55" />
    </Frame>
  ),
  "house-aircon": (id) => (
    <Frame id={id}>
      <rect x="52" y="70" width="96" height="34" rx="8" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <line x1="64" y1="88" x2="136" y2="88" stroke="#8fcfff" strokeWidth="3" opacity="0.6" />
      <path d="M 70 104 Q 70 120 60 128 M 100 104 Q 100 124 92 132 M 130 104 Q 130 120 140 128" stroke="#8fcfff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </Frame>
  ),
  "house-curtain": (id) => (
    <Frame id={id}>
      <rect x="56" y="56" width="88" height="10" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
      <path d="M 60 66 Q 68 100 60 146 L 76 146 Q 70 100 78 66 Z" fill="#b07ae0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 140 66 Q 132 100 140 146 L 124 146 Q 130 100 122 66 Z" fill="#b07ae0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "house-shelf": (id) => (
    <Frame id={id}>
      <rect x="56" y="56" width="88" height="90" rx="4" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <line x1="56" y1="86" x2="144" y2="86" stroke={INK} strokeWidth="2.5" />
      <line x1="56" y1="116" x2="144" y2="116" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="64" width="10" height="20" fill="#8fcfff" stroke={INK} strokeWidth="1.5" />
      <rect x="78" y="64" width="10" height="20" fill="#ff9ec7" stroke={INK} strokeWidth="1.5" />
    </Frame>
  ),
  "house-mirror": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="94" rx="38" ry="46" fill="#dff1ff" stroke={INK} strokeWidth="4" />
      <ellipse cx="88" cy="72" rx="8" ry="14" fill="#ffffff" opacity="0.6" />
      <rect x="94" y="138" width="12" height="18" fill="#c9ccd6" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "house-light": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="88" r="30" fill="#ffe9a6" stroke={INK} strokeWidth="3.5" />
      <rect x="90" y="118" width="20" height="14" rx="3" fill="#c9ccd6" stroke={INK} strokeWidth="2" />
      <line x1="94" y1="132" x2="94" y2="140" stroke={INK} strokeWidth="2" />
      <line x1="106" y1="132" x2="106" y2="140" stroke={INK} strokeWidth="2" />
      <path d="M 60 88 L 50 88 M 140 88 L 150 88 M 100 50 L 100 40" stroke="#ffcf6b" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </Frame>
  ),
  "house-trashcan": (id) => (
    <Frame id={id}>
      <path d="M 68 84 L 76 144 L 124 144 L 132 84 Z" fill="#c9ccd6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="60" y="74" width="80" height="12" rx="4" fill="#a6a6ae" stroke={INK} strokeWidth="2.5" />
      <line x1="90" y1="94" x2="94" y2="132" stroke={INK} strokeWidth="2" opacity="0.4" />
      <line x1="110" y1="94" x2="106" y2="132" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
};
