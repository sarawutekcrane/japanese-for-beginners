import { Frame, House, INK } from "./shared";

export const placesIcons = {
  "place-school": (id) => (
    <Frame id={id}>
      <rect x="58" y="80" width="84" height="66" rx="6" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <rect x="90" y="106" width="20" height="40" fill="#8fcfff" stroke={INK} strokeWidth="2.5" />
      <rect x="66" y="92" width="16" height="16" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="118" y="92" width="16" height="16" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <line x1="100" y1="80" x2="100" y2="56" stroke={INK} strokeWidth="3" />
      <path d="M 100 56 L 124 64 L 100 70 Z" fill="#f45c5c" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "place-hospital": (id) => (
    <Frame id={id}>
      <rect x="56" y="76" width="88" height="70" rx="6" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <rect x="92" y="90" width="16" height="42" fill="#f45c5c" />
      <rect x="79" y="103" width="42" height="16" fill="#f45c5c" />
      <rect x="90" y="112" width="20" height="34" fill="#8fcfff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-station": (id) => (
    <Frame id={id}>
      <rect x="50" y="110" width="100" height="10" fill="#c9ccd6" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="70" width="72" height="42" rx="10" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <circle cx="82" cy="112" r="8" fill="#3a3a3a" />
      <circle cx="118" cy="112" r="8" fill="#3a3a3a" />
      <rect x="76" y="80" width="18" height="16" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="106" y="80" width="18" height="16" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-park": (id) => (
    <Frame id={id}>
      <circle cx="90" cy="80" r="30" fill="#7bcf9e" stroke={INK} strokeWidth="3" />
      <rect x="84" y="100" width="12" height="30" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
      <rect x="120" y="120" width="40" height="8" fill="#c08a5e" stroke={INK} strokeWidth="2" />
      <rect x="124" y="128" width="6" height="14" fill="#8a6a4a" />
      <rect x="150" y="128" width="6" height="14" fill="#8a6a4a" />
    </Frame>
  ),
  "place-supermarket": (id) => (
    <Frame id={id}>
      <rect x="54" y="82" width="92" height="60" rx="6" fill="#ffd6e8" stroke={INK} strokeWidth="3" />
      <rect x="54" y="82" width="92" height="16" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <path d="M 82 118 L 118 118 L 112 138 L 88 138 Z" fill="#ffffff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="92" cy="142" r="4" fill={INK} />
      <circle cx="108" cy="142" r="4" fill={INK} />
    </Frame>
  ),
  "place-restaurant": (id) => (
    <Frame id={id}>
      <rect x="58" y="90" width="84" height="52" rx="6" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <path d="M 54 90 Q 100 70 146 90 Z" fill="#f45c5c" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="86" y1="106" x2="86" y2="132" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <line x1="80" y1="106" x2="80" y2="116" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="106" x2="92" y2="116" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="116" cy="118" rx="8" ry="14" fill="none" stroke={INK} strokeWidth="4" />
      <line x1="116" y1="106" x2="116" y2="132" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "place-bank": (id) => (
    <Frame id={id}>
      <path d="M 56 84 L 100 58 L 144 84 Z" fill="#f6d34c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="56" y="84" width="88" height="10" fill="#e0bb4b" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="96" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="86" y="96" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="108" y="96" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="130" y="96" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="56" y="136" width="88" height="8" fill="#e0bb4b" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "place-postoffice": (id) => (
    <Frame id={id}>
      <rect x="58" y="84" width="84" height="58" rx="6" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <rect x="80" y="100" width="40" height="28" rx="3" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
      <path d="M 80 100 L 100 116 L 120 100" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "place-library": (id) => (
    <Frame id={id}>
      <rect x="58" y="86" width="84" height="56" rx="6" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <rect x="70" y="100" width="12" height="34" fill="#8fcfff" stroke={INK} strokeWidth="2" />
      <rect x="86" y="100" width="12" height="34" fill="#ff9ec7" stroke={INK} strokeWidth="2" />
      <rect x="102" y="100" width="12" height="34" fill="#7bcf9e" stroke={INK} strokeWidth="2" />
      <rect x="118" y="100" width="12" height="34" fill="#f6d34c" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-cinema": (id) => (
    <Frame id={id}>
      <rect x="56" y="82" width="88" height="58" rx="6" fill="#2f2b52" stroke={INK} strokeWidth="3" />
      <path d="M100 96 L106 110 L121 111 L109 120 L113 135 L100 126 L87 135 L91 120 L79 111 L94 110 Z" fill="#ffd166" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "place-department": (id) => (
    <Frame id={id}>
      <rect x="54" y="80" width="92" height="62" rx="6" fill="#ffd6e8" stroke={INK} strokeWidth="3" />
      <rect x="90" y="80" width="20" height="62" fill="#f45c5c" opacity="0.5" />
      <rect x="54" y="106" width="92" height="10" fill="#f45c5c" opacity="0.5" />
      <circle cx="100" cy="66" r="10" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "place-hotel": (id) => (
    <Frame id={id}>
      <rect x="58" y="70" width="84" height="72" rx="6" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="70" y="84" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="93" y="84" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="116" y="84" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="70" y="106" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="93" y="106" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="116" y="106" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="90" y="128" width="20" height="14" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-shrine": (id) => (
    <Frame id={id}>
      <rect x="66" y="70" width="10" height="70" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <rect x="124" y="70" width="10" height="70" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <rect x="56" y="60" width="88" height="12" rx="3" fill="#f45c5c" stroke={INK} strokeWidth="2.5" />
      <rect x="62" y="78" width="76" height="8" fill="#f45c5c" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-airport": (id) => (
    <Frame id={id}>
      <path d="M 60 108 L 130 100 L 150 92 L 154 98 L 136 110 L 130 128 L 122 128 L 120 112 L 96 116 L 88 128 L 80 128 L 86 112 L 60 114 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "place-house": (id) => (
    <Frame id={id}>
      <House x={100} y={110} />
    </Frame>
  ),
  "place-police-box": (id) => (
    <Frame id={id}>
      <rect x="66" y="86" width="68" height="56" rx="6" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <path d="M 60 86 L 100 62 L 140 86 Z" fill="#4c8df0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="100" cy="72" r="7" fill="#f45c5c" opacity="0.9" />
      <rect x="90" y="104" width="20" height="26" fill="#8fcfff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-city-hall": (id) => (
    <Frame id={id}>
      <rect x="58" y="82" width="84" height="60" rx="4" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <path d="M 58 82 L 100 58 L 142 82 Z" fill="#f45c5c" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="100" y1="58" x2="100" y2="38" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 38 L 122 44 L 100 50 Z" fill="#4c8df0" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="82" y="104" width="14" height="34" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="104" y="104" width="14" height="34" fill="#dff1ff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-office": (id) => (
    <Frame id={id}>
      <rect x="64" y="54" width="72" height="92" rx="4" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="74" y="66" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="93" y="66" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="112" y="66" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="74" y="88" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="93" y="88" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="112" y="88" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="1.5" />
      <rect x="90" y="118" width="20" height="28" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-university": (id) => (
    <Frame id={id}>
      <rect x="58" y="90" width="84" height="52" rx="4" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <rect x="92" y="52" width="16" height="38" fill="#c9ccd6" stroke={INK} strokeWidth="2.5" />
      <path d="M 92 52 L 100 40 L 108 52 Z" fill="#c9ccd6" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <rect x="70" y="102" width="14" height="30" fill="#8fcfff" stroke={INK} strokeWidth="2" />
      <rect x="116" y="102" width="14" height="30" fill="#8fcfff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "place-museum": (id) => (
    <Frame id={id}>
      <path d="M 56 82 L 100 56 L 144 82 Z" fill="#b07ae0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="56" y="82" width="88" height="10" fill="#9a63c9" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="94" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="86" y="94" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="108" y="94" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="130" y="94" width="10" height="40" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
      <rect x="56" y="134" width="88" height="8" fill="#9a63c9" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "place-zoo": (id) => (
    <Frame id={id}>
      <path d="M 60 70 L 60 140 M 76 70 L 76 140 M 92 70 L 92 140 M 108 70 L 108 140 M 124 70 L 124 140 M 140 70 L 140 140" stroke="#a2704c" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <circle cx="100" cy="106" r="26" fill="#f5924a" stroke={INK} strokeWidth="3" />
      <circle cx="90" cy="100" r="3" fill={INK} />
      <circle cx="110" cy="100" r="3" fill={INK} />
    </Frame>
  ),
  "place-aquarium": (id) => (
    <Frame id={id}>
      <rect x="58" y="70" width="84" height="72" rx="8" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="70" y="82" width="60" height="48" rx="4" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <path d="M 90 106 Q 100 98 110 106 Q 100 114 90 106 Z" fill="#4c8df0" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    </Frame>
  ),
  "place-onsen": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="122" rx="48" ry="22" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <path d="M 78 90 Q 70 76 78 66 M 100 88 Q 92 74 100 64 M 122 90 Q 114 76 122 66" stroke="#c7b6bd" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.55" />
    </Frame>
  ),
  "place-beach": (id) => (
    <Frame id={id}>
      <rect x="0" y="128" width="200" height="72" fill="#ffe9a6" />
      <path d="M 54 128 Q 100 112 146 128" stroke="#8fcfff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="60" r="18" fill="#ffcf6b" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 128 L 100 90 M 100 90 Q 76 92 74 110 Q 100 100 100 90 Q 124 92 126 110 Q 100 100 100 90" fill="#f45c5c" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "place-mountain": (id) => (
    <Frame id={id}>
      <path d="M 50 140 L 90 76 L 116 112 L 132 90 L 158 140 Z" fill="#7bcf9e" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 90 76 L 100 92 L 80 92 Z" fill="#ffffff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 132 90 L 140 100 L 124 100 Z" fill="#ffffff" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    </Frame>
  ),
};
