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
  "shop-cashier": (id) => (
    <Frame id={id}>
      <rect x="58" y="82" width="84" height="56" rx="6" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <rect x="70" y="92" width="60" height="24" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="86" y="122" width="28" height="10" rx="2" fill="#5a4a52" opacity="0.6" />
    </Frame>
  ),
  "shop-basket": (id) => (
    <Frame id={id}>
      <path d="M 64 96 L 136 96 L 128 140 L 72 140 Z" fill="none" stroke="#e0b978" strokeWidth="5" strokeLinejoin="round" />
      <path d="M 64 96 L 136 96 M 72 112 L 128 112 M 80 128 L 120 128" stroke="#e0b978" strokeWidth="3" opacity="0.7" />
      <path d="M 80 96 Q 90 74 110 96" fill="none" stroke={INK} strokeWidth="3.5" />
    </Frame>
  ),
  "shop-cart": (id) => (
    <Frame id={id}>
      <path d="M 56 66 L 72 66 L 90 118 L 138 118 L 150 84 L 82 84" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="96" cy="136" r="8" fill="#5a4a52" />
      <circle cx="130" cy="136" r="8" fill="#5a4a52" />
    </Frame>
  ),
  "shop-goods": (id) => (
    <Frame id={id}>
      <rect x="58" y="100" width="42" height="38" rx="4" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
      <rect x="104" y="90" width="42" height="48" rx="4" fill="#8fcfff" stroke={INK} strokeWidth="2.5" />
      <line x1="79" y1="100" x2="79" y2="138" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="125" y1="90" x2="125" y2="138" stroke={INK} strokeWidth="1.5" opacity="0.4" />
    </Frame>
  ),
  "shop-stock": (id) => (
    <Frame id={id}>
      <rect x="56" y="56" width="88" height="90" rx="4" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <line x1="56" y1="86" x2="144" y2="86" stroke={INK} strokeWidth="2.5" />
      <line x1="56" y1="116" x2="144" y2="116" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="64" width="18" height="18" fill="#f6d34c" stroke={INK} strokeWidth="1.5" />
      <rect x="88" y="64" width="18" height="18" fill="#ff9ec7" stroke={INK} strokeWidth="1.5" />
      <rect x="112" y="64" width="18" height="18" fill="#8fcfff" stroke={INK} strokeWidth="1.5" />
    </Frame>
  ),
  "shop-counter": (id) => (
    <Frame id={id}>
      <rect x="52" y="100" width="96" height="40" rx="6" fill="#8fd3f4" stroke={INK} strokeWidth="3" />
      <rect x="52" y="92" width="96" height="12" rx="4" fill="#4c8df0" stroke={INK} strokeWidth="2.5" />
      <circle cx="100" cy="120" r="10" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-point-card": (id) => (
    <Frame id={id}>
      <rect x="52" y="76" width="96" height="64" rx="10" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <path d="M78 100 L82 110 L92 110 L84 116 L87 126 L78 120 L69 126 L72 116 L64 110 L74 110 Z" fill="#fff3da" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M114 100 L118 110 L128 110 L120 116 L123 126 L114 120 L105 126 L108 116 L100 110 L110 110 Z" fill="#fff3da" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    </Frame>
  ),
  "shop-new-item": (id) => (
    <Frame id={id}>
      <path
        d="M100 54 L110 78 L136 76 L120 96 L136 116 L110 114 L100 138 L90 114 L64 116 L80 96 L64 76 L90 78 Z"
        fill="#7bcf9e"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text x="100" y="102" fontSize="18" fontWeight="800" fill="#ffffff" fontFamily="Baloo 2, sans-serif" textAnchor="middle">
        NEW
      </text>
    </Frame>
  ),
  "shop-order": (id) => (
    <Frame id={id}>
      <rect x="62" y="66" width="76" height="88" rx="6" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <rect x="84" y="58" width="32" height="14" rx="4" fill="#c9ccd6" stroke={INK} strokeWidth="2" />
      <path d="M 78 100 L 88 110 L 106 90" fill="none" stroke="#5fbf77" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="76" y1="128" x2="124" y2="128" stroke={INK} strokeWidth="2.5" opacity="0.4" />
    </Frame>
  ),
  "shop-delivery": (id) => (
    <Frame id={id}>
      <rect x="52" y="90" width="60" height="42" rx="4" fill="#f5924a" stroke={INK} strokeWidth="3" />
      <path d="M 112 104 L 138 104 L 150 118 L 150 132 L 112 132 Z" fill="#dff1ff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="78" cy="140" r="9" fill="#3a3a3a" />
      <circle cx="132" cy="140" r="9" fill="#3a3a3a" />
    </Frame>
  ),
  "shop-market": (id) => (
    <Frame id={id}>
      <path d="M 52 88 L 60 68 L 140 68 L 148 88 Z" fill="#f45c5c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="56" y="88" width="88" height="54" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <rect x="72" y="100" width="20" height="20" fill="#7bcf9e" stroke={INK} strokeWidth="2" />
      <rect x="108" y="100" width="20" height="20" fill="#f5924a" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-konbini": (id) => (
    <Frame id={id}>
      <rect x="54" y="82" width="92" height="60" rx="6" fill="#7bcf9e" stroke={INK} strokeWidth="3" />
      <rect x="54" y="82" width="92" height="16" fill="#5fbf77" stroke={INK} strokeWidth="2.5" />
      <rect x="70" y="112" width="18" height="30" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <rect x="112" y="112" width="18" height="30" fill="#ffffff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-stall": (id) => (
    <Frame id={id}>
      <path d="M 54 90 L 68 66 L 132 66 L 146 90 Z" fill="#f6d34c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 54 90 L 68 108 L 132 108 L 146 90" fill="none" stroke={INK} strokeWidth="2" opacity="0.4" />
      <rect x="66" y="90" width="68" height="46" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "shop-mall": (id) => (
    <Frame id={id}>
      <rect x="50" y="78" width="100" height="64" rx="6" fill="#c9a0f5" stroke={INK} strokeWidth="3" />
      <rect x="62" y="90" width="22" height="24" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <rect x="90" y="90" width="22" height="24" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <rect x="118" y="90" width="22" height="24" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <rect x="88" y="120" width="24" height="22" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "shop-coupon": (id) => (
    <Frame id={id}>
      <rect x="52" y="82" width="96" height="52" rx="8" fill="#ffd6e8" stroke={INK} strokeWidth="3" strokeDasharray="6 5" />
      <text x="100" y="118" fontSize="26" fontWeight="800" fill="#e85d7a" fontFamily="Baloo 2, sans-serif" textAnchor="middle">%</text>
      <circle cx="52" cy="108" r="6" fill="#fff" stroke={INK} strokeWidth="2" />
      <circle cx="148" cy="108" r="6" fill="#fff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
};
