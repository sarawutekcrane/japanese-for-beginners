import { Frame, INK } from "./shared";

export const adjectivesNaIcons = {
  "adjna-pretty": (id) => (
    <Frame id={id}>
      <g transform="translate(100,106)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="0" cy="-26" rx="14" ry="20" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" transform={`rotate(${deg})`} />
        ))}
        <circle cx="0" cy="0" r="12" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
      </g>
    </Frame>
  ),
  "adjna-quiet": (id) => (
    <Frame id={id}>
      <path d="M 66 96 L 86 96 L 110 76 L 110 140 L 86 120 L 66 120 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 126 90 L 146 116 M 146 90 L 126 116" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    </Frame>
  ),
  "adjna-energetic": (id) => (
    <Frame id={id}>
      <rect x="66" y="78" width="56" height="60" rx="8" fill="#5fbf77" stroke={INK} strokeWidth="3" />
      <rect x="122" y="94" width="10" height="28" rx="3" fill="#5fbf77" stroke={INK} strokeWidth="2.5" />
      <path d="M 100 84 L 86 108 L 98 108 L 90 132 L 112 100 L 100 100 Z" fill="#ffd166" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "adjna-convenient": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="44" fill="#8fd3f4" stroke={INK} strokeWidth="3.5" />
      <path d="M 80 108 L 94 122 L 122 90" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "adjna-famous": (id) => (
    <Frame id={id}>
      <path
        d="M 100 62 L 112 92 L 144 94 L 118 114 L 128 146 L 100 128 L 72 146 L 82 114 L 56 94 L 88 92 Z"
        fill="#ffd166"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "adjna-kind": (id) => (
    <Frame id={id}>
      <path
        d="M 100 138 C 60 112 62 82 84 76 C 96 73 100 84 100 90 C 100 84 104 73 116 76 C 138 82 140 112 100 138 Z"
        fill="#ff9ec7"
        stroke={INK}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "adjna-free-time": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="44" fill="#fff3da" stroke={INK} strokeWidth="3.5" />
      <line x1="100" y1="106" x2="100" y2="80" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <line x1="100" y1="106" x2="120" y2="118" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M 84 128 L 92 138 L 108 116" fill="none" stroke="#5fbf77" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "adjna-important": (id) => (
    <Frame id={id}>
      <path d="M 100 60 L 140 76 L 140 112 Q 140 138 100 150 Q 60 138 60 112 L 60 76 Z" fill="#f45c5c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="94" y="82" width="12" height="36" rx="4" fill="#fff" />
      <circle cx="100" cy="128" r="6" fill="#fff" />
    </Frame>
  ),
  "adjna-simple": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="26" fill="#8fcfff" stroke={INK} strokeWidth="3.5" />
    </Frame>
  ),
  "adjna-favorite": (id) => (
    <Frame id={id}>
      <path
        d="M 100 140 C 56 112 58 78 82 72 C 96 68 100 82 100 88 C 100 82 104 68 118 72 C 142 78 144 112 100 140 Z"
        fill="#f45c5c"
        stroke={INK}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="88" cy="90" r="6" fill="#fff" opacity="0.6" />
    </Frame>
  ),
  "adjna-skilled": (id) => (
    <Frame id={id}>
      <path
        d="M 92 140 L 92 104 L 76 104 L 84 68 Q 88 60 96 64 L 96 88 L 128 88 Q 138 88 136 98 L 128 134 Q 126 140 118 140 Z"
        fill="#f6d34c"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M 64 104 L 78 104 L 78 140 L 64 140 Z" fill="#8fcfff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "adjna-unskilled": (id) => (
    <Frame id={id}>
      <g transform="translate(100,104) rotate(180) translate(-100,-104)">
        <path
          d="M 92 140 L 92 104 L 76 104 L 84 68 Q 88 60 96 64 L 96 88 L 128 88 Q 138 88 136 98 L 128 134 Q 126 140 118 140 Z"
          fill="#c9c2ce"
          stroke={INK}
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M 64 104 L 78 104 L 78 140 L 64 140 Z" fill="#8fcfff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </Frame>
  ),
  "adjna-lively": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="20" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <g stroke="#f6d34c" strokeWidth="4" strokeLinecap="round">
        <line x1="100" y1="66" x2="100" y2="56" />
        <line x1="100" y1="146" x2="100" y2="156" />
        <line x1="60" y1="106" x2="50" y2="106" />
        <line x1="140" y1="106" x2="150" y2="106" />
        <line x1="72" y1="78" x2="64" y2="70" />
        <line x1="128" y1="78" x2="136" y2="70" />
        <line x1="72" y1="134" x2="64" y2="142" />
        <line x1="128" y1="134" x2="136" y2="142" />
      </g>
    </Frame>
  ),
  "adjna-inconvenient": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="44" fill="#c9c2ce" stroke={INK} strokeWidth="3.5" />
      <path d="M 82 88 L 118 124 M 118 88 L 82 124" stroke="#f45c5c" strokeWidth="6" strokeLinecap="round" />
    </Frame>
  ),
  "adjna-okay": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="44" fill="#8fd3a0" stroke={INK} strokeWidth="3.5" />
      <path d="M 82 108 L 94 120 L 120 90" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
};
