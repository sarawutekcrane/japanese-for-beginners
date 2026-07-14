import { Frame, INK, Sparkle } from "./shared";

function Calendar({ headerColor = "#f45c5c", label = "", labelColor = INK }) {
  return (
    <g>
      <rect x="52" y="56" width="96" height="86" rx="10" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <rect x="52" y="56" width="96" height="28" rx="10" fill={headerColor} stroke={INK} strokeWidth="3" />
      <rect x="70" y="44" width="8" height="20" rx="4" fill={INK} opacity="0.7" />
      <rect x="122" y="44" width="8" height="20" rx="4" fill={INK} opacity="0.7" />
      {label && (
        <text x="100" y="118" fontSize="26" fontWeight="800" fill={labelColor} fontFamily="Baloo 2, sans-serif" textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  );
}

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

function Sun({ cx, cy, r, color = "#ffcf6b" }) {
  const rays = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const x1 = cx + Math.cos(a) * (r + 6);
    const y1 = cy + Math.sin(a) * (r + 6);
    const x2 = cx + Math.cos(a) * (r + 16);
    const y2 = cy + Math.sin(a) * (r + 16);
    rays.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="5" strokeLinecap="round" />);
  }
  return (
    <g>
      {rays}
      <circle cx={cx} cy={cy} r={r} fill={color} stroke={INK} strokeWidth="3" />
    </g>
  );
}

export const timeDaysIcons = {
  "time-today": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#ff9ec7" />
      <Sparkle x={100} y={100} s={1.1} />
    </Frame>
  ),
  "time-tomorrow": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#8fcfff" />
      <path d="M 88 100 L 112 100 M 104 90 L 116 100 L 104 110" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-yesterday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#c9ccd6" />
      <path d="M 112 100 L 88 100 M 96 90 L 84 100 L 96 110" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-morning": (id) => (
    <Frame id={id}>
      <rect x="0" y="130" width="200" height="70" fill="#ffe3c2" />
      <Sun cx={100} cy={128} r={28} color="#ffb347" />
    </Frame>
  ),
  "time-afternoon": (id) => (
    <Frame id={id}>
      <rect x="0" y="150" width="200" height="50" fill="#fff3da" />
      <Sun cx={100} cy={70} r={26} color="#ffcf6b" />
    </Frame>
  ),
  "time-evening": (id) => (
    <Frame id={id}>
      <rect x="0" y="130" width="200" height="70" fill="#e7d3ff" />
      <circle cx="100" cy="140" r="28" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "time-night": (id) => (
    <Frame id={id}>
      <rect x="0" y="0" width="200" height="200" fill="#2f2b52" opacity="0.1" />
      <path d="M 120 60 A 34 34 0 1 0 122 128 A 44 44 0 1 1 120 60 Z" fill="#ffe9a6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <Sparkle x={60} y={60} s={0.7} />
      <Sparkle x={150} y={90} s={0.5} />
    </Frame>
  ),
  "time-now": (id) => (
    <Frame id={id}>
      <Clock face="#fff3da" hourAngle={-20} minuteAngle={40} />
      <Sparkle x={148} y={56} s={0.8} />
    </Frame>
  ),
  "time-later": (id) => (
    <Frame id={id}>
      <Clock face="#dff1ff" hourAngle={40} minuteAngle={140} />
      <path d="M 150 140 L 168 140 M 160 132 L 170 140 L 160 148" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-week": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#7bcf9e" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <circle key={i} cx={64 + i * 12} cy={122} r={4} fill={i === 3 ? "#ff9ec7" : "#c9ccd6"} stroke={INK} strokeWidth="1.5" />
      ))}
    </Frame>
  ),
  "time-month": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#f6d34c" />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2, 3].map((c) => <rect key={`${r}-${c}`} x={64 + c * 14} y={98 + r * 14} width="8" height="8" rx="2" fill="#e8e2e5" />)
      )}
    </Frame>
  ),
  "time-year": (id) => (
    <Frame id={id}>
      <g transform="translate(-10,-6) scale(0.92)">
        <Calendar headerColor="#b07ae0" />
      </g>
      <g transform="translate(14,10) scale(0.92)">
        <Calendar headerColor="#8fcfff" />
      </g>
    </Frame>
  ),
  "time-monday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#ff9ec7" label="げつ" />
    </Frame>
  ),
  "time-tuesday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#f45c5c" label="か" />
    </Frame>
  ),
  "time-wednesday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#8fcfff" label="すい" />
    </Frame>
  ),
  "time-thursday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#7bcf9e" label="もく" />
    </Frame>
  ),
  "time-friday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#f6d34c" label="きん" />
    </Frame>
  ),
  "time-saturday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#5a4a52" label="ど" labelColor="#ffffff" />
    </Frame>
  ),
  "time-sunday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#ff7a7a" label="にち" />
    </Frame>
  ),
  "time-oclock": (id) => (
    <Frame id={id}>
      <Clock face="#ffffff" hourAngle={0} minuteAngle={0} />
    </Frame>
  ),
  "time-minute": (id) => (
    <Frame id={id}>
      <Clock face="#ffffff" hourAngle={20} minuteAngle={200} />
      <circle cx="100" cy="100" r="46" fill="none" stroke="#ff9ec7" strokeWidth="2" strokeDasharray="2 6" opacity="0.6" />
    </Frame>
  ),
  "time-spring": (id) => (
    <Frame id={id}>
      <circle cx="76" cy="86" r="16" fill="#ffd6e8" stroke={INK} strokeWidth="2.5" />
      <circle cx="112" cy="70" r="16" fill="#ffd6e8" stroke={INK} strokeWidth="2.5" />
      <circle cx="132" cy="102" r="16" fill="#ffd6e8" stroke={INK} strokeWidth="2.5" />
      <circle cx="94" cy="112" r="16" fill="#ffd6e8" stroke={INK} strokeWidth="2.5" />
      <circle cx="76" cy="86" r="5" fill="#f6d34c" />
      <circle cx="112" cy="70" r="5" fill="#f6d34c" />
      <circle cx="132" cy="102" r="5" fill="#f6d34c" />
      <circle cx="94" cy="112" r="5" fill="#f6d34c" />
    </Frame>
  ),
  "time-summer": (id) => (
    <Frame id={id}>
      <Sun cx={100} cy={80} r={30} color="#ffcf6b" />
      <path d="M 80 128 Q 76 108 88 96 M 120 128 Q 124 108 112 96" stroke="#5fbf77" strokeWidth="7" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "time-autumn": (id) => (
    <Frame id={id}>
      <path d="M 100 60 Q 130 70 128 100 Q 126 130 100 140 Q 74 130 72 100 Q 70 70 100 60 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="100" y1="60" x2="100" y2="140" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="140" x2="100" y2="156" stroke="#a2704c" strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "time-winter": (id) => (
    <Frame id={id}>
      <line x1="100" y1="54" x2="100" y2="154" stroke="#8fcfff" strokeWidth="5" strokeLinecap="round" />
      <line x1="56" y1="76" x2="144" y2="132" stroke="#8fcfff" strokeWidth="5" strokeLinecap="round" />
      <line x1="144" y1="76" x2="56" y2="132" stroke="#8fcfff" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="104" r="6" fill="#dff1ff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "time-everyday": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#7bcf9e" />
      <path d="M 78 118 A 16 16 0 1 1 122 118 M 122 118 L 128 112 M 122 118 L 128 124" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-lastweek": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#c9ccd6" />
      <path d="M 112 108 L 88 118 L 112 128" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-nextweek": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#8fcfff" />
      <path d="M 88 108 L 112 118 L 88 128" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "time-lastmonth": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#c9ccd6" />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2, 3].map((c) => <rect key={`${r}-${c}`} x={64 + c * 14} y={98 + r * 14} width="8" height="8" rx="2" fill="#e8e2e5" opacity="0.5" />)
      )}
    </Frame>
  ),
  "time-nextmonth": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#f6d34c" />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2, 3].map((c) => <rect key={`${r}-${c}`} x={64 + c * 14} y={98 + r * 14} width="8" height="8" rx="2" fill="#ffd166" />)
      )}
    </Frame>
  ),
  "time-thisyear": (id) => (
    <Frame id={id}>
      <Calendar headerColor="#b07ae0" />
      <Sparkle x={100} y={112} s={1.1} />
    </Frame>
  ),
};
