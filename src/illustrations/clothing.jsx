import { Frame, INK } from "./shared";

export const clothingIcons = {
  "clothing-shirt": (id) => (
    <Frame id={id}>
      <path
        d="M 76 66 L 60 82 L 72 96 L 80 88 L 80 146 L 120 146 L 120 88 L 128 96 L 140 82 L 124 66 Q 100 78 76 66 Z"
        fill="#8fcfff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "clothing-pants": (id) => (
    <Frame id={id}>
      <path
        d="M 74 60 L 126 60 L 130 148 L 108 148 L 100 100 L 92 148 L 70 148 Z"
        fill="#5a4a52"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "clothing-skirt": (id) => (
    <Frame id={id}>
      <path d="M 80 66 L 120 66 L 140 140 L 60 140 Z" fill="#ff9ec7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="80" y="58" width="40" height="12" rx="4" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "clothing-dress": (id) => (
    <Frame id={id}>
      <path
        d="M 82 58 L 70 78 L 78 86 L 86 80 L 70 148 L 130 148 L 114 80 L 122 86 L 130 78 L 118 58 Q 100 68 82 58 Z"
        fill="#ffd6e8"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "clothing-shoes": (id) => (
    <Frame id={id}>
      <path
        d="M 56 128 L 56 108 Q 70 100 84 108 L 110 120 Q 140 120 144 132 Q 144 140 130 140 L 60 140 Q 56 136 56 128 Z"
        fill="#f45c5c"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="70" y1="112" x2="70" y2="122" stroke={INK} strokeWidth="2" opacity="0.5" />
    </Frame>
  ),
  "clothing-socks": (id) => (
    <Frame id={id}>
      <path
        d="M 84 56 L 116 56 L 116 110 Q 140 114 140 132 Q 140 142 126 142 L 84 142 Z"
        fill="#8fcfff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="84" y="56" width="32" height="14" fill="#ffffff" opacity="0.5" />
    </Frame>
  ),
  "clothing-hat": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="120" rx="50" ry="12" fill="#f6d34c" stroke={INK} strokeWidth="3" />
      <path d="M 70 120 Q 70 78 100 78 Q 130 78 130 120 Z" fill="#ffcf6b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "clothing-jacket": (id) => (
    <Frame id={id}>
      <path
        d="M 78 62 L 58 80 L 70 94 L 80 86 L 80 146 L 120 146 L 120 86 L 130 94 L 142 80 L 122 62 L 108 72 L 100 68 L 92 72 Z"
        fill="#5fbf77"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="100" y1="80" x2="100" y2="146" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
  "clothing-scarf": (id) => (
    <Frame id={id}>
      <path
        d="M 60 76 Q 100 96 140 76 Q 138 90 120 96 L 128 140 L 108 140 L 104 100 Q 100 100 96 100 L 92 140 L 72 140 L 80 96 Q 62 90 60 76 Z"
        fill="#b07ae0"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "clothing-glasses": (id) => (
    <Frame id={id}>
      <circle cx="76" cy="100" r="24" fill="#dff1ff" stroke={INK} strokeWidth="4" />
      <circle cx="124" cy="100" r="24" fill="#dff1ff" stroke={INK} strokeWidth="4" />
      <line x1="100" y1="98" x2="100" y2="102" stroke={INK} strokeWidth="4" />
      <line x1="52" y1="98" x2="40" y2="92" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <line x1="148" y1="98" x2="160" y2="92" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "clothing-bag": (id) => (
    <Frame id={id}>
      <rect x="66" y="90" width="68" height="56" rx="8" fill="#f5924a" stroke={INK} strokeWidth="3" />
      <path d="M 80 90 Q 80 62 100 62 Q 120 62 120 90" fill="none" stroke={INK} strokeWidth="4" />
    </Frame>
  ),
  "clothing-umbrella": (id) => (
    <Frame id={id}>
      <path
        d="M 56 100 Q 100 56 144 100 Q 128 92 116 100 Q 108 92 100 100 Q 92 92 84 100 Q 72 92 56 100 Z"
        fill="#4c8df0"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="100" y1="100" x2="100" y2="150" stroke={INK} strokeWidth="4" />
      <path d="M 100 150 Q 100 158 92 156" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "clothing-gloves": (id) => (
    <Frame id={id}>
      <path
        d="M 70 100 Q 66 84 74 80 Q 80 78 82 88 L 84 78 Q 86 70 92 72 Q 96 74 94 84 L 96 76 Q 100 68 106 72 Q 110 76 106 86 L 112 90 Q 120 92 118 104 Q 116 130 100 134 Q 80 134 74 118 Z"
        fill="#ff9ec7"
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "clothing-belt": (id) => (
    <Frame id={id}>
      <rect x="52" y="92" width="96" height="24" rx="4" fill="#a2704c" stroke={INK} strokeWidth="3" />
      <rect x="88" y="86" width="24" height="36" rx="4" fill="none" stroke={INK} strokeWidth="4" />
      <circle cx="100" cy="104" r="3" fill={INK} />
    </Frame>
  ),
  "clothing-watch": (id) => (
    <Frame id={id}>
      <rect x="60" y="94" width="30" height="16" rx="6" fill="#5a4a52" />
      <rect x="110" y="94" width="30" height="16" rx="6" fill="#5a4a52" />
      <circle cx="100" cy="102" r="26" fill="#ffffff" stroke={INK} strokeWidth="3.5" />
      <line x1="100" y1="102" x2="100" y2="88" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="102" x2="110" y2="108" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  ),
  "clothing-pajamas": (id) => (
    <Frame id={id}>
      <path d="M 78 62 L 62 78 L 74 92 L 82 84 L 82 118 L 118 118 L 118 84 L 126 92 L 138 78 L 122 62 Z" fill="#8fd3f4" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 82 122 L 82 150 L 96 150 L 96 130 L 104 130 L 104 150 L 118 150 L 118 122 Z" fill="#c9e8f7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="78" r="8" fill="#ffffff" opacity="0.5" />
    </Frame>
  ),
  "clothing-swimsuit": (id) => (
    <Frame id={id}>
      <path d="M 74 70 Q 70 66 76 62 L 100 74 L 124 62 Q 130 66 126 70 L 118 90 Q 118 130 100 140 Q 82 130 82 90 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "clothing-necktie": (id) => (
    <Frame id={id}>
      <path d="M 90 56 L 110 56 L 106 74 L 122 118 L 100 148 L 78 118 L 94 74 Z" fill="#f45c5c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 92 60 L 108 60 L 106 72 L 94 72 Z" fill="#c94040" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    </Frame>
  ),
  "clothing-sweater": (id) => (
    <Frame id={id}>
      <path d="M 74 64 L 56 82 L 70 98 L 80 88 L 80 146 L 120 146 L 120 88 L 130 98 L 144 82 L 126 64 Q 100 76 74 64 Z" fill="#c9822b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 84 100 L 116 100 M 84 116 L 116 116 M 84 132 L 116 132" stroke={INK} strokeWidth="2" opacity="0.35" />
    </Frame>
  ),
  "clothing-underwear": (id) => (
    <Frame id={id}>
      <path d="M 66 74 L 134 74 L 128 100 Q 100 96 100 118 Q 100 96 72 100 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "clothing-coat": (id) => (
    <Frame id={id}>
      <path d="M 80 58 L 58 78 L 70 92 L 82 82 L 76 152 L 124 152 L 118 82 L 130 92 L 142 78 L 120 58 L 100 70 Z" fill="#a2704c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="100" y1="80" x2="100" y2="150" stroke={INK} strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="100" r="2.5" fill={INK} opacity="0.5" />
      <circle cx="100" cy="118" r="2.5" fill={INK} opacity="0.5" />
    </Frame>
  ),
  "clothing-sandals": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="122" rx="46" ry="16" fill="#e0b978" stroke={INK} strokeWidth="3" />
      <path d="M 84 108 L 100 122 L 116 108" fill="none" stroke="#a2704c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 100 122 L 100 108" stroke="#a2704c" strokeWidth="5" strokeLinecap="round" />
    </Frame>
  ),
  "clothing-boots": (id) => (
    <Frame id={id}>
      <path d="M 76 60 L 118 60 L 118 108 L 140 122 Q 146 130 138 138 L 74 138 Q 68 134 70 126 L 76 108 Z" fill="#5a4a52" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="76" y1="86" x2="118" y2="86" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
  "clothing-ring": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="118" r="26" fill="none" stroke="#e0bb4b" strokeWidth="8" />
      <path d="M 100 84 L 92 96 L 100 104 L 108 96 Z" fill="#8fd3f4" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "clothing-necklace": (id) => (
    <Frame id={id}>
      <path d="M 62 66 Q 62 116 100 122 Q 138 116 138 66" fill="none" stroke="#e0bb4b" strokeWidth="6" strokeLinecap="round" />
      <path d="M 90 116 L 100 134 L 110 116 Z" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
};
