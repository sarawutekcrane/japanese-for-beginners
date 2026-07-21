import { Frame, INK } from "./shared";

export const adjectivesIIcons = {
  "adj-big": (id) => (
    <Frame id={id}>
      <circle cx="88" cy="112" r="50" fill="#8fcfff" stroke={INK} strokeWidth="3.5" />
      <circle cx="142" cy="136" r="18" fill="#dff1ff" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "adj-small": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="118" r="18" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="118" r="46" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 6" opacity="0.4" />
    </Frame>
  ),
  "adj-expensive": (id) => (
    <Frame id={id}>
      <path d="M 70 70 L 118 70 L 148 100 L 108 140 L 60 100 Z" fill="#f6d34c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="86" cy="86" r="6" fill="#fff" />
      <text x="100" y="112" fontSize="26" fontWeight="800" fill={INK} textAnchor="middle">¥</text>
    </Frame>
  ),
  "adj-cheap": (id) => (
    <Frame id={id}>
      <path d="M 66 76 L 104 76 L 134 106 L 100 140 L 66 106 Z" fill="#5fbf77" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="80" cy="90" r="5" fill="#fff" />
      <text x="98" y="118" fontSize="20" fontWeight="800" fill={INK} textAnchor="middle">¥</text>
      <path d="M 118 66 L 138 86" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  "adj-delicious": (id) => (
    <Frame id={id}>
      <path d="M 62 118 Q 62 146 100 146 Q 138 146 138 118 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="100" cy="116" rx="38" ry="10" fill="#ffd6a8" stroke={INK} strokeWidth="2.5" />
      <path d="M 82 92 Q 78 76 86 66" fill="none" stroke="#d8d8d8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <path d="M 100 92 Q 98 72 108 60" fill="none" stroke="#d8d8d8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </Frame>
  ),
  "adj-hot": (id) => (
    <Frame id={id}>
      <rect x="90" y="60" width="20" height="66" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="132" r="18" fill="#f45c5c" stroke={INK} strokeWidth="3" />
      <rect x="94" y="70" width="12" height="50" rx="6" fill="#f45c5c" />
      <path d="M 128 76 Q 138 82 128 90 M 138 92 Q 148 98 138 106" stroke="#f5924a" strokeWidth="3" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "adj-cold": (id) => (
    <Frame id={id}>
      <rect x="90" y="60" width="20" height="66" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="132" r="18" fill="#4c8df0" stroke={INK} strokeWidth="3" />
      <rect x="94" y="100" width="12" height="20" rx="6" fill="#4c8df0" />
      <g stroke="#8fd3f4" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 132 70 L 132 88 M 123 74 L 141 84 M 141 74 L 123 84" />
      </g>
    </Frame>
  ),
  "adj-new": (id) => (
    <Frame id={id}>
      <rect x="66" y="88" width="68" height="52" rx="6" fill="#8fd3f4" stroke={INK} strokeWidth="3" />
      <path d="M 66 100 L 134 100" stroke={INK} strokeWidth="3" />
      <path d="M 92 88 L 100 74 L 108 88" fill="none" stroke="#ffd166" strokeWidth="4" strokeLinejoin="round" />
      <path d="M 40 90 L 46 100 L 40 110 L 34 100 Z" fill="#ffd166" />
      <path d="M 160 90 L 166 100 L 160 110 L 154 100 Z" fill="#ffd166" />
    </Frame>
  ),
  "adj-old": (id) => (
    <Frame id={id}>
      <rect x="66" y="88" width="68" height="52" rx="6" fill="#c9a876" stroke={INK} strokeWidth="3" />
      <path d="M 80 88 L 90 108 L 78 116 L 92 140" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 110 88 L 118 104" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="126" cy="122" r="3" fill={INK} opacity="0.5" />
    </Frame>
  ),
  "adj-fast": (id) => (
    <Frame id={id}>
      <path d="M 108 56 L 76 108 L 96 108 L 88 148 L 128 96 L 106 96 Z" fill="#f6d34c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 50 100 L 66 100 M 46 116 L 62 116" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </Frame>
  ),
  "adj-slow": (id) => (
    <Frame id={id}>
      <ellipse cx="104" cy="118" rx="38" ry="20" fill="#8fd3a0" stroke={INK} strokeWidth="3" />
      <circle cx="146" cy="106" r="16" fill="#8fd3a0" stroke={INK} strokeWidth="3" />
      <circle cx="152" cy="100" r="2.5" fill={INK} />
      <circle cx="80" cy="140" r="8" fill="#5a4a52" opacity="0.3" />
      <circle cx="112" cy="142" r="8" fill="#5a4a52" opacity="0.3" />
    </Frame>
  ),
  "adj-difficult": (id) => (
    <Frame id={id}>
      <path
        d="M 70 70 L 100 70 L 100 90 Q 116 90 116 106 Q 116 122 100 122 L 100 140 L 70 140 Z"
        fill="#b07ae0"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text x="85" y="112" fontSize="30" fontWeight="800" fill="#fff" textAnchor="middle">?</text>
    </Frame>
  ),
  "adj-easy": (id) => (
    <Frame id={id}>
      <path
        d="M 70 70 L 100 70 L 100 90 Q 116 90 116 106 Q 116 122 100 122 L 100 140 L 70 140 Z"
        fill="#5fbf77"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 78 108 L 88 118 L 100 96" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "adj-fun": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="42" fill="#ffd166" stroke={INK} strokeWidth="3.5" />
      <path d="M 84 96 Q 90 88 96 96" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 104 96 Q 110 88 116 96" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 82 114 Q 100 132 118 114" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 60 66 L 64 76 L 74 78 L 64 82 L 60 92 L 56 82 L 46 78 L 56 76 Z" fill="#ff9ec7" />
    </Frame>
  ),
  "adj-boring": (id) => (
    <Frame id={id}>
      <circle cx="96" cy="110" r="42" fill="#c9c2ce" stroke={INK} strokeWidth="3.5" />
      <path d="M 80 100 L 92 100" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M 100 100 L 112 100" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M 82 124 L 110 124" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="140" y="76" fontSize="16" fontWeight="700" fill={INK} opacity="0.6">Z</text>
      <text x="150" y="64" fontSize="12" fontWeight="700" fill={INK} opacity="0.5">z</text>
    </Frame>
  ),
  "adj-bright": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="30" fill="#ffe9a6" stroke={INK} strokeWidth="3.5" />
      <g stroke="#ffcf6b" strokeWidth="4" strokeLinecap="round">
        <path d="M 100 56 L 100 44 M 100 152 L 100 164 M 52 104 L 40 104 M 148 104 L 160 104" />
        <path d="M 66 70 L 58 62 M 134 70 L 142 62 M 66 138 L 58 146 M 134 138 L 142 146" />
      </g>
    </Frame>
  ),
  "adj-dark": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="86" fill="#2f2b52" opacity="0.5" />
      <circle cx="100" cy="104" r="30" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <circle cx="140" cy="72" r="4" fill="#ffe9a6" />
      <circle cx="60" cy="130" r="3" fill="#ffe9a6" />
    </Frame>
  ),
  "adj-long": (id) => (
    <Frame id={id}>
      <rect x="66" y="94" width="68" height="20" rx="8" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <path d="M 50 104 L 62 104 M 138 104 L 150 104" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </Frame>
  ),
  "adj-short": (id) => (
    <Frame id={id}>
      <rect x="86" y="94" width="28" height="20" rx="8" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <path d="M 100 94 L 100 108 M 100 122 L 100 108" stroke={INK} strokeWidth="2" opacity="0.3" strokeDasharray="3 4" />
    </Frame>
  ),
  "adj-heavy": (id) => (
    <Frame id={id}>
      <path d="M 74 90 L 126 90 L 134 138 L 66 138 Z" fill="#5a4a52" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <text x="100" y="118" fontSize="24" fontWeight="800" fill="#ffe9a6" textAnchor="middle">kg</text>
    </Frame>
  ),
  "adj-light": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="110" rx="26" ry="14" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <path d="M 80 96 Q 90 76 100 90 Q 108 74 120 92" fill="none" stroke="#8fcfff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </Frame>
  ),
  "adj-sweet": (id) => (
    <Frame id={id}>
      <path d="M 100 92 C 70 88 62 130 90 148 Q 100 154 110 148 C 138 130 130 88 100 92 Z" fill="#ff9ec7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="97" y="76" width="6" height="18" rx="3" fill="#8a6a4a" />
      <circle cx="90" cy="118" r="5" fill="#fff" opacity="0.6" />
    </Frame>
  ),
  "adj-spicy": (id) => (
    <Frame id={id}>
      <path d="M 84 74 Q 68 84 70 106 Q 72 132 100 138 Q 128 132 130 106 Q 132 84 116 74 Q 108 88 100 82 Q 92 88 84 74 Z" fill="#f45c5c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 116 74 Q 124 62 134 64" stroke="#5fbf77" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "adj-strong": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="86" r="20" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <path d="M 70 110 Q 70 130 60 132 Q 76 148 100 132 Q 124 148 140 132 Q 130 130 130 110 Q 100 122 70 110 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="70" cy="110" r="12" fill="#f5924a" stroke={INK} strokeWidth="2.5" />
      <circle cx="130" cy="110" r="12" fill="#f5924a" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "adj-weak": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="94" r="16" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <path d="M 78 116 Q 76 132 70 136 Q 84 148 100 138 Q 116 148 130 136 Q 124 132 122 116 Q 100 126 78 116 Z" fill="#c9ccd6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "adj-wide": (id) => (
    <Frame id={id}>
      <rect x="46" y="90" width="108" height="30" rx="8" fill="#7bcf9e" stroke={INK} strokeWidth="3" />
      <path d="M 34 105 L 44 105 M 156 105 L 166 105" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </Frame>
  ),
  "adj-narrow": (id) => (
    <Frame id={id}>
      <rect x="90" y="70" width="20" height="70" rx="8" fill="#b07ae0" stroke={INK} strokeWidth="3" />
      <path d="M 68 74 L 78 74 M 68 136 L 78 136 M 122 74 L 132 74 M 122 136 L 132 136" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </Frame>
  ),
  "adj-cute": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="38" fill="#ffd6e8" stroke={INK} strokeWidth="3.5" />
      <circle cx="86" cy="100" r="4" fill={INK} />
      <circle cx="114" cy="100" r="4" fill={INK} />
      <path d="M 92 114 Q 100 120 108 114" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 60 70 L 64 80 L 74 82 L 64 86 L 60 96 L 56 86 L 46 82 L 56 80 Z" fill="#ff9ec7" />
      <ellipse cx="76" cy="112" rx="6" ry="4" fill="#ffb6cf" opacity="0.85" />
      <ellipse cx="124" cy="112" rx="6" ry="4" fill="#ffb6cf" opacity="0.85" />
    </Frame>
  ),
  "adj-happy-feeling": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="42" fill="#ffe9a6" stroke={INK} strokeWidth="3.5" />
      <path d="M 82 96 Q 88 88 94 96" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 106 96 Q 112 88 118 96" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 80 118 Q 100 136 120 118" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "adj-sad-feeling": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="42" fill="#8fd3f4" stroke={INK} strokeWidth="3.5" />
      <circle cx="86" cy="98" r="4" fill={INK} />
      <circle cx="114" cy="98" r="4" fill={INK} />
      <path d="M 84 128 Q 100 112 116 128" stroke={INK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 92 106 L 88 122" stroke="#4c8df0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </Frame>
  ),
};
