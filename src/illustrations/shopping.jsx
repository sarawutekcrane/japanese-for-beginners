import { Frame, INK } from "./shared";

export const shoppingIcons = {
  "shop-money": (id) => (
    <Frame id={id}>
      <rect x="54" y="82" width="92" height="52" rx="8" fill="#7bcf9e" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="108" r="18" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <text x="100" y="115" fontSize="18" fontWeight="800" fill={INK} fontFamily="Baloo 2, sans-serif" textAnchor="middle">
        ¥
      </text>
    </Frame>
  ),
  "shop-price": (id) => (
    <Frame id={id}>
      <path d="M 66 66 L 118 66 L 148 96 L 104 140 L 60 96 Z" fill="#ffd166" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="82" cy="82" r="6" fill="#ffffff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-cheap": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="110" r="32" fill="#7bcf9e" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 92 L 100 122 M 88 110 L 100 124 L 112 110" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "shop-expensive": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="110" r="32" fill="#f45c5c" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 128 L 100 98 M 88 112 L 100 98 L 112 112" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "shop-receipt": (id) => (
    <Frame id={id}>
      <path
        d="M 66 56 L 134 56 L 134 148 L 124 140 L 114 148 L 104 140 L 94 148 L 84 140 L 74 148 L 66 140 Z"
        fill="#ffffff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="78" y1="76" x2="122" y2="76" stroke={INK} strokeWidth="2.5" opacity="0.5" />
      <line x1="78" y1="92" x2="122" y2="92" stroke={INK} strokeWidth="2.5" opacity="0.5" />
      <line x1="78" y1="108" x2="122" y2="108" stroke={INK} strokeWidth="2.5" opacity="0.5" />
    </Frame>
  ),
  "shop-cash": (id) => (
    <Frame id={id}>
      <rect x="58" y="98" width="88" height="46" rx="6" fill="#7bcf9e" stroke={INK} strokeWidth="3" />
      <rect x="50" y="84" width="88" height="46" rx="6" fill="#a6e0bc" stroke={INK} strokeWidth="3" />
      <circle cx="94" cy="107" r="12" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-change": (id) => (
    <Frame id={id}>
      <circle cx="80" cy="118" r="22" fill="#f6d34c" stroke={INK} strokeWidth="3" />
      <circle cx="122" cy="100" r="18" fill="#e0bb4b" stroke={INK} strokeWidth="3" />
      <circle cx="112" cy="132" r="14" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "shop-discount": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="46" fill="#ff9ec7" stroke={INK} strokeWidth="3.5" />
      <circle cx="84" cy="90" r="8" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <circle cx="116" cy="118" r="8" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <line x1="84" y1="120" x2="116" y2="88" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "shop-size": (id) => (
    <Frame id={id}>
      <rect x="60" y="60" width="80" height="80" rx="6" fill="none" stroke={INK} strokeWidth="3" />
      <rect x="76" y="76" width="48" height="48" rx="6" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="90" y="90" width="20" height="20" rx="4" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "shop-color-choice": (id) => (
    <Frame id={id}>
      <circle cx="76" cy="90" r="18" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <circle cx="124" cy="90" r="18" fill="#4c8df0" stroke={INK} strokeWidth="2.5" />
      <circle cx="76" cy="128" r="18" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
      <circle cx="124" cy="128" r="18" fill="#5fbf77" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "shop-try-on": (id) => (
    <Frame id={id}>
      <path d="M 100 60 Q 108 60 108 68 L 100 74 L 92 68 Q 92 60 100 60 Z" fill="none" stroke={INK} strokeWidth="3" />
      <path d="M 100 74 L 56 100 L 68 110 L 100 90 L 132 110 L 144 100 Z" fill="#ffd6e8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "shop-pay": (id) => (
    <Frame id={id}>
      <path
        d="M 60 120 Q 60 100 80 100 L 120 100 Q 140 100 140 120 L 140 132 Q 140 144 120 144 L 80 144 Q 60 144 60 132 Z"
        fill="#ffe9d6"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="86" r="16" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "shop-credit-card": (id) => (
    <Frame id={id}>
      <rect x="52" y="76" width="96" height="64" rx="10" fill="#4c8df0" stroke={INK} strokeWidth="3" />
      <rect x="52" y="92" width="96" height="14" fill="#2f2b52" />
      <rect x="64" y="118" width="30" height="8" rx="3" fill="#dff1ff" opacity="0.8" />
    </Frame>
  ),
  "shop-bag": (id) => (
    <Frame id={id}>
      <path d="M 64 92 L 136 92 L 144 146 L 56 146 Z" fill="#ffd6e8" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 78 92 Q 78 66 100 66 Q 122 66 122 92" fill="none" stroke={INK} strokeWidth="4" />
    </Frame>
  ),
  "shop-sale": (id) => (
    <Frame id={id}>
      <path
        d="M100 50 L112 78 L142 74 L124 98 L142 122 L112 118 L100 146 L88 118 L58 122 L76 98 L58 74 L88 78 Z"
        fill="#f45c5c"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
};
