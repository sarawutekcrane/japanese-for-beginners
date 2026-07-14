import { Frame, INK } from "./shared";

export const hobbiesIcons = {
  "hobby-reading": (id) => (
    <Frame id={id}>
      <path d="M 100 70 L 100 140 Q 76 128 56 136 L 56 76 Q 76 66 100 70 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 100 70 L 100 140 Q 124 128 144 136 L 144 76 Q 124 66 100 70 Z" fill="#ff9ec7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-music": (id) => (
    <Frame id={id}>
      <circle cx="72" cy="140" r="16" fill="#b07ae0" stroke={INK} strokeWidth="3" />
      <circle cx="128" cy="128" r="16" fill="#b07ae0" stroke={INK} strokeWidth="3" />
      <line x1="88" y1="140" x2="88" y2="66" stroke={INK} strokeWidth="4" />
      <line x1="144" y1="128" x2="144" y2="58" stroke={INK} strokeWidth="4" />
      <path d="M 88 66 L 144 58 L 144 78 L 88 86 Z" fill="#b07ae0" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-sports": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="44" fill="#f5924a" stroke={INK} strokeWidth="3.5" />
      <path d="M 60 104 Q 100 88 140 104 M 100 60 Q 84 104 100 148 M 100 60 Q 116 104 100 148" fill="none" stroke={INK} strokeWidth="2.5" opacity="0.6" />
    </Frame>
  ),
  "hobby-drawing": (id) => (
    <Frame id={id}>
      <rect x="58" y="66" width="70" height="80" rx="6" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <path d="M 150 60 L 164 74 L 116 122 L 100 124 L 102 108 Z" fill="#ffd166" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-cooking": (id) => (
    <Frame id={id}>
      <path d="M 60 100 Q 60 140 100 142 Q 140 140 140 100 Z" fill="#c9ccd6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="54" y="92" width="92" height="12" rx="4" fill="#a6a6ae" stroke={INK} strokeWidth="2.5" />
      <path d="M 76 80 Q 70 66 78 56 M 100 80 Q 94 66 102 56 M 124 80 Q 118 66 126 56" stroke="#c7b6bd" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.6" />
    </Frame>
  ),
  "hobby-travel": (id) => (
    <Frame id={id}>
      <rect x="60" y="86" width="80" height="60" rx="8" fill="#5fbf77" stroke={INK} strokeWidth="3" />
      <rect x="84" y="70" width="32" height="20" rx="6" fill="none" stroke={INK} strokeWidth="4" />
      <line x1="100" y1="86" x2="100" y2="146" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
  "hobby-movie": (id) => (
    <Frame id={id}>
      <rect x="58" y="90" width="84" height="56" rx="6" fill="#2f2b52" stroke={INK} strokeWidth="3" />
      <path d="M 58 90 L 74 74 L 90 74 L 78 90 Z M 96 90 L 112 74 L 128 74 L 116 90 Z" fill="#ffd166" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-games": (id) => (
    <Frame id={id}>
      <path
        d="M 66 98 Q 60 96 58 110 L 54 130 Q 52 142 64 140 L 78 116 L 122 116 L 136 140 Q 148 142 146 130 L 142 110 Q 140 96 134 98 Q 100 90 66 98 Z"
        fill="#8fcfff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="76" y1="110" x2="76" y2="122" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="116" x2="82" y2="116" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="124" cy="108" r="3.5" fill={INK} />
      <circle cx="132" cy="116" r="3.5" fill={INK} />
    </Frame>
  ),
  "hobby-swimming": (id) => (
    <Frame id={id}>
      <path d="M 54 120 Q 70 110 86 120 Q 102 130 118 120 Q 134 110 150 120" stroke="#8fcfff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 54 138 Q 70 128 86 138 Q 102 148 118 138 Q 134 128 150 138" stroke="#dff1ff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="90" cy="82" r="16" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "hobby-singing": (id) => (
    <Frame id={id}>
      <rect x="86" y="56" width="28" height="52" rx="14" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <path d="M 68 96 Q 68 128 100 128 Q 132 128 132 96" fill="none" stroke={INK} strokeWidth="4" />
      <line x1="100" y1="128" x2="100" y2="150" stroke={INK} strokeWidth="4" />
    </Frame>
  ),
  "hobby-dancing": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="66" r="16" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
      <path
        d="M 100 82 L 100 120 M 100 92 L 70 74 M 100 92 L 132 78 M 100 120 L 76 150 M 100 120 L 128 146"
        stroke="#ff9ec7"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </Frame>
  ),
  "hobby-photography": (id) => (
    <Frame id={id}>
      <rect x="56" y="82" width="88" height="60" rx="8" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <rect x="82" y="70" width="24" height="14" rx="4" fill="#5a4a52" stroke={INK} strokeWidth="2.5" />
      <circle cx="100" cy="112" r="20" fill="#dff1ff" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="112" r="10" fill="#8fcfff" />
    </Frame>
  ),
  "hobby-gardening": (id) => (
    <Frame id={id}>
      <path d="M 74 116 L 126 116 L 118 146 L 82 146 Z" fill="#c08a5e" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="100" y1="116" x2="100" y2="76" stroke="#5fbf77" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="66" r="14" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 96 Q 84 88 82 100 M 100 100 Q 116 92 118 104" stroke="#5fbf77" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "hobby-fishing": (id) => (
    <Frame id={id}>
      <line x1="60" y1="60" x2="140" y2="120" stroke="#a2704c" strokeWidth="4" strokeLinecap="round" />
      <path d="M 140 120 Q 138 140 130 148" stroke={INK} strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M 108 152 Q 122 144 138 152 Q 128 160 116 158 Z" fill="#8fcfff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-camping": (id) => (
    <Frame id={id}>
      <path d="M 100 62 L 148 146 L 116 146 L 100 112 L 84 146 L 52 146 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 100 100 L 90 146 L 110 146 Z" fill="#c08a5e" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-hiking": (id) => (
    <Frame id={id}>
      <path d="M 50 140 L 90 76 L 116 112 L 132 90 L 158 140 Z" fill="#7bcf9e" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="60" y="108" width="16" height="22" rx="4" fill="#f5924a" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "hobby-cycling": (id) => (
    <Frame id={id}>
      <circle cx="70" cy="120" r="20" fill="none" stroke={INK} strokeWidth="4" />
      <circle cx="130" cy="120" r="20" fill="none" stroke={INK} strokeWidth="4" />
      <path d="M 70 120 L 100 86 L 130 120 M 100 86 L 92 120 M 78 98 L 108 98" stroke="#f5924a" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-calligraphy": (id) => (
    <Frame id={id}>
      <rect x="60" y="70" width="80" height="70" rx="4" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <path d="M 78 100 Q 100 84 122 108" stroke="#3a3a3a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 145 55 L 158 68 L 128 98 L 118 100 L 120 90 Z" fill="#5a4a52" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "hobby-knitting": (id) => (
    <Frame id={id}>
      <circle cx="90" cy="108" r="28" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <path d="M 76 96 Q 90 108 104 96 M 76 120 Q 90 108 104 120 M 78 108 L 102 108" stroke="#e85d7a" strokeWidth="2.5" fill="none" opacity="0.7" />
      <line x1="122" y1="70" x2="140" y2="130" stroke="#a2704c" strokeWidth="4" strokeLinecap="round" />
      <line x1="138" y1="70" x2="156" y2="130" stroke="#a2704c" strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "hobby-yoga": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="66" r="14" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 80 L 100 108 M 100 84 L 70 100 M 100 84 L 130 100 M 100 108 Q 76 112 72 132 M 100 108 Q 124 112 128 132" stroke="#c9a0f5" strokeWidth="6" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "hobby-chess": (id) => (
    <Frame id={id}>
      <path d="M 90 130 L 110 130 L 106 108 L 118 108 L 118 98 L 106 98 L 106 86 L 116 74 L 100 62 L 84 74 L 94 86 L 94 98 L 82 98 L 82 108 L 94 108 Z" fill="#5a4a52" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="76" y="130" width="48" height="12" rx="3" fill="#5a4a52" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "hobby-manga": (id) => (
    <Frame id={id}>
      <path d="M 56 68 L 144 68 L 144 132 L 100 132 L 88 148 L 90 132 L 56 132 Z" fill="#ffffff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="70" y1="86" x2="130" y2="86" stroke={INK} strokeWidth="2.5" opacity="0.5" />
      <line x1="70" y1="102" x2="118" y2="102" stroke={INK} strokeWidth="2.5" opacity="0.5" />
    </Frame>
  ),
  "hobby-piano": (id) => (
    <Frame id={id}>
      <rect x="54" y="86" width="92" height="46" rx="4" fill="#2f2b52" stroke={INK} strokeWidth="3" />
      <rect x="60" y="98" width="80" height="30" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <line x1="72" y1="98" x2="72" y2="128" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="86" y1="98" x2="86" y2="128" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="98" x2="100" y2="128" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="114" y1="98" x2="114" y2="128" stroke={INK} strokeWidth="1.5" opacity="0.4" />
      <line x1="128" y1="98" x2="128" y2="128" stroke={INK} strokeWidth="1.5" opacity="0.4" />
    </Frame>
  ),
  "hobby-guitar": (id) => (
    <Frame id={id}>
      <path d="M 84 118 Q 60 112 64 92 Q 68 76 88 80 Q 84 96 92 106 Q 108 118 130 108 Q 138 132 118 144 Q 92 152 84 118 Z" fill="#c9822b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="88" y1="80" x2="70" y2="52" stroke="#5a4a52" strokeWidth="6" strokeLinecap="round" />
      <circle cx="104" cy="128" r="10" fill="#5a4a52" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "hobby-collecting": (id) => (
    <Frame id={id}>
      <rect x="56" y="120" width="88" height="10" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
      <rect x="64" y="82" width="20" height="38" fill="#8fcfff" stroke={INK} strokeWidth="2.5" />
      <rect x="90" y="94" width="20" height="26" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
      <rect x="116" y="70" width="20" height="50" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
};
