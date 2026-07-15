import { Frame, INK } from "./shared";

export const animalIcons = {
  "animal-dog": (id) => (
    <Frame id={id}>
      <ellipse cx="62" cy="86" rx="14" ry="26" fill="#e0b978" stroke={INK} strokeWidth="3" />
      <ellipse cx="138" cy="86" rx="14" ry="26" fill="#e0b978" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="96" r="40" fill="#f3d19c" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="112" rx="16" ry="11" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="86" cy="92" r="4" fill={INK} />
      <circle cx="114" cy="92" r="4" fill={INK} />
      <circle cx="100" cy="110" r="3.5" fill={INK} />
    </Frame>
  ),
  "animal-cat": (id) => (
    <Frame id={id}>
      <path d="M 62 70 L 54 38 L 86 62 Z" fill="#f5d9b0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 138 70 L 146 38 L 114 62 Z" fill="#f5d9b0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="98" r="38" fill="#f5d9b0" stroke={INK} strokeWidth="3.5" />
      <circle cx="87" cy="94" r="4" fill={INK} />
      <circle cx="113" cy="94" r="4" fill={INK} />
      <path d="M 96 108 Q 100 112 104 108" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 70 108 L 50 104 M 70 112 L 50 114" stroke={INK} strokeWidth="2" opacity="0.6" />
      <path d="M 130 108 L 150 104 M 130 112 L 150 114" stroke={INK} strokeWidth="2" opacity="0.6" />
    </Frame>
  ),
  "animal-bird": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="100" r="40" fill="#8fcfff" stroke={INK} strokeWidth="3.5" />
      <path d="M 132 100 L 154 94 L 132 112 Z" fill="#f5924a" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="86" cy="108" rx="16" ry="20" fill="#dff1ff" stroke={INK} strokeWidth="2.5" transform="rotate(-20 86 108)" />
      <circle cx="112" cy="90" r="4" fill={INK} />
    </Frame>
  ),
  "animal-rabbit": (id) => (
    <Frame id={id}>
      <ellipse cx="82" cy="42" rx="11" ry="34" fill="#fff8ea" stroke={INK} strokeWidth="3" transform="rotate(-8 82 42)" />
      <ellipse cx="118" cy="42" rx="11" ry="34" fill="#fff8ea" stroke={INK} strokeWidth="3" transform="rotate(8 118 42)" />
      <circle cx="100" cy="104" r="38" fill="#fff8ea" stroke={INK} strokeWidth="3.5" />
      <circle cx="87" cy="100" r="4" fill={INK} />
      <circle cx="113" cy="100" r="4" fill={INK} />
      <ellipse cx="100" cy="114" rx="6" ry="4" fill="#ff9ec7" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "animal-mouse": (id) => (
    <Frame id={id}>
      <circle cx="66" cy="60" r="16" fill="#d9d3d6" stroke={INK} strokeWidth="3" />
      <circle cx="134" cy="60" r="16" fill="#d9d3d6" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="100" r="34" fill="#e8e2e5" stroke={INK} strokeWidth="3.5" />
      <circle cx="90" cy="96" r="3.5" fill={INK} />
      <circle cx="110" cy="96" r="3.5" fill={INK} />
      <circle cx="100" cy="108" r="4" fill="#ff9ec7" stroke={INK} strokeWidth="2" />
      <path d="M 76 108 L 58 104 M 76 112 L 58 116" stroke={INK} strokeWidth="1.8" opacity="0.6" />
      <path d="M 124 108 L 142 104 M 124 112 L 142 116" stroke={INK} strokeWidth="1.8" opacity="0.6" />
    </Frame>
  ),
  "animal-bear": (id) => (
    <Frame id={id}>
      <circle cx="66" cy="58" r="18" fill="#a2704c" stroke={INK} strokeWidth="3" />
      <circle cx="134" cy="58" r="18" fill="#a2704c" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="100" r="42" fill="#c08a5e" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="112" rx="18" ry="13" fill="#f3d19c" stroke={INK} strokeWidth="2.5" />
      <circle cx="86" cy="92" r="4" fill={INK} />
      <circle cx="114" cy="92" r="4" fill={INK} />
      <circle cx="100" cy="110" r="4" fill={INK} />
    </Frame>
  ),
  "animal-monkey": (id) => (
    <Frame id={id}>
      <circle cx="64" cy="90" r="18" fill="#8a6a4a" stroke={INK} strokeWidth="3" />
      <circle cx="136" cy="90" r="18" fill="#8a6a4a" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="98" r="40" fill="#8a6a4a" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="104" rx="26" ry="24" fill="#f3d19c" stroke={INK} strokeWidth="2.5" />
      <circle cx="90" cy="98" r="3.5" fill={INK} />
      <circle cx="110" cy="98" r="3.5" fill={INK} />
      <path d="M 92 112 Q 100 118 108 112" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "animal-horse": (id) => (
    <Frame id={id}>
      <path d="M 78 50 Q 60 70 68 110 Q 74 140 100 146 Q 126 140 132 110 Q 140 70 122 50 Q 100 36 78 50 Z" fill="#c08a5e" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 78 50 Q 70 40 80 30 Q 90 44 96 40 Q 100 30 108 40 Q 116 30 124 44 Q 132 40 122 50" fill="#5a4038" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="86" cy="92" r="4" fill={INK} />
      <circle cx="114" cy="92" r="4" fill={INK} />
      <ellipse cx="100" cy="128" rx="10" ry="7" fill="#3a3a3a" opacity="0.8" />
    </Frame>
  ),
  "animal-cow": (id) => (
    <Frame id={id}>
      <path d="M 78 56 L 70 40 L 86 52 Z" fill="#fff8ea" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 122 56 L 130 40 L 114 52 Z" fill="#fff8ea" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="62" cy="90" rx="14" ry="20" fill="#fff8ea" stroke={INK} strokeWidth="3" />
      <ellipse cx="138" cy="90" rx="14" ry="20" fill="#fff8ea" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="98" r="40" fill="#fff8ea" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="76" cy="82" rx="10" ry="12" fill="#3a3a3a" opacity="0.85" />
      <ellipse cx="124" cy="106" rx="12" ry="10" fill="#3a3a3a" opacity="0.85" />
      <ellipse cx="100" cy="112" rx="20" ry="14" fill="#ffd6e8" stroke={INK} strokeWidth="2.5" />
      <circle cx="92" cy="112" r="2.5" fill={INK} />
      <circle cx="108" cy="112" r="2.5" fill={INK} />
      <circle cx="86" cy="90" r="4" fill={INK} />
      <circle cx="114" cy="90" r="4" fill={INK} />
    </Frame>
  ),
  "animal-pig": (id) => (
    <Frame id={id}>
      <path d="M 66 62 L 54 42 L 82 58 Z" fill="#ffb6cf" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 134 62 L 146 42 L 118 58 Z" fill="#ffb6cf" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="40" fill="#ffcfe0" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="112" rx="18" ry="13" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
      <circle cx="94" cy="112" r="2.5" fill={INK} />
      <circle cx="106" cy="112" r="2.5" fill={INK} />
      <circle cx="86" cy="94" r="4" fill={INK} />
      <circle cx="114" cy="94" r="4" fill={INK} />
    </Frame>
  ),
  "animal-chicken": (id) => (
    <Frame id={id}>
      <path d="M 90 40 Q 94 26 100 40 Q 106 26 110 40" stroke="#f45c5c" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="96" r="38" fill="#fff8ea" stroke={INK} strokeWidth="3.5" />
      <path d="M 130 96 L 152 90 L 130 106 Z" fill="#f5924a" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="90" cy="90" r="4" fill={INK} />
      <ellipse cx="72" cy="106" rx="6" ry="5" fill="#ff9ec7" opacity="0.8" />
    </Frame>
  ),
  "animal-elephant": (id) => (
    <Frame id={id}>
      <ellipse cx="56" cy="90" rx="26" ry="32" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <ellipse cx="144" cy="90" rx="26" ry="32" fill="#c9ccd6" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="94" r="38" fill="#d9dce4" stroke={INK} strokeWidth="3.5" />
      <path d="M 90 118 Q 82 148 96 156 Q 104 158 100 148" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" />
      <circle cx="88" cy="86" r="4" fill={INK} />
      <circle cx="112" cy="86" r="4" fill={INK} />
    </Frame>
  ),
  "animal-lion": (id) => (
    <Frame id={id}>
      {Array.from({ length: 14 }).map((_, i) => {
        const angleDeg = (i * 360) / 14;
        const rad = (angleDeg * Math.PI) / 180;
        const x = 100 + Math.cos(rad) * 44;
        const y = 100 + Math.sin(rad) * 44;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="15"
            ry="23"
            fill="#d98a2e"
            stroke={INK}
            strokeWidth="2.5"
            transform={`rotate(${angleDeg - 90} ${x} ${y})`}
          />
        );
      })}
      <circle cx="100" cy="100" r="36" fill="#f6c463" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="114" rx="15" ry="11" fill="#fbe8c2" stroke={INK} strokeWidth="2.5" />
      <circle cx="87" cy="94" r="4" fill={INK} />
      <circle cx="113" cy="94" r="4" fill={INK} />
      <path d="M 94 108 L 106 108 L 100 114 Z" fill={INK} />
      <path d="M 70 114 L 52 110 M 70 118 L 52 120" stroke={INK} strokeWidth="2" opacity="0.6" />
      <path d="M 130 114 L 148 110 M 130 118 L 148 120" stroke={INK} strokeWidth="2" opacity="0.6" />
    </Frame>
  ),
  "animal-panda": (id) => (
    <Frame id={id}>
      <circle cx="64" cy="60" r="18" fill="#2f2b2e" stroke={INK} strokeWidth="3" />
      <circle cx="136" cy="60" r="18" fill="#2f2b2e" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="100" r="42" fill="#ffffff" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="84" cy="94" rx="12" ry="16" fill="#2f2b2e" transform="rotate(-10 84 94)" />
      <ellipse cx="116" cy="94" rx="12" ry="16" fill="#2f2b2e" transform="rotate(10 116 94)" />
      <circle cx="84" cy="96" r="3.5" fill="#fff" />
      <circle cx="116" cy="96" r="3.5" fill="#fff" />
      <circle cx="100" cy="112" r="4" fill={INK} />
    </Frame>
  ),
  "animal-frog": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="106" r="40" fill="#7bcf9e" stroke={INK} strokeWidth="3.5" />
      <circle cx="78" cy="72" r="16" fill="#a6e0bc" stroke={INK} strokeWidth="3" />
      <circle cx="122" cy="72" r="16" fill="#a6e0bc" stroke={INK} strokeWidth="3" />
      <circle cx="78" cy="72" r="5" fill={INK} />
      <circle cx="122" cy="72" r="5" fill={INK} />
      <path d="M 72 118 Q 100 132 128 118" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "animal-fox": (id) => (
    <Frame id={id}>
      <path d="M 60 68 L 50 34 L 84 58 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 140 68 L 150 34 L 116 58 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="40" fill="#f5924a" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 108 L 84 124 L 116 124 Z" fill="#ffffff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="86" cy="92" r="4" fill={INK} />
      <circle cx="114" cy="92" r="4" fill={INK} />
      <circle cx="100" cy="112" r="3" fill={INK} />
    </Frame>
  ),
  "animal-wolf": (id) => (
    <Frame id={id}>
      <path d="M 62 66 L 52 34 L 86 56 Z" fill="#8a8a92" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 138 66 L 148 34 L 114 56 Z" fill="#8a8a92" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="40" fill="#a6a6ae" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 106 L 88 124 L 112 124 Z" fill="#dfe0e5" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="87" cy="92" r="4" fill="#f6d34c" />
      <circle cx="113" cy="92" r="4" fill="#f6d34c" />
      <circle cx="100" cy="114" r="3" fill={INK} />
    </Frame>
  ),
  "animal-deer": (id) => (
    <Frame id={id}>
      <path d="M 76 56 Q 60 40 66 24 M 76 56 Q 84 42 78 28" stroke="#a2704c" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 124 56 Q 140 40 134 24 M 124 56 Q 116 42 122 28" stroke="#a2704c" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="98" r="38" fill="#e0b978" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="100" cy="110" rx="14" ry="10" fill="#fff8ea" stroke={INK} strokeWidth="2" />
      <circle cx="87" cy="92" r="4" fill={INK} />
      <circle cx="113" cy="92" r="4" fill={INK} />
    </Frame>
  ),
  "animal-squirrel": (id) => (
    <Frame id={id}>
      <path d="M 130 130 Q 168 120 158 76 Q 152 100 130 108 Z" fill="#c08a5e" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="86" cy="60" r="14" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <circle cx="114" cy="60" r="14" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="98" r="36" fill="#e0b978" stroke={INK} strokeWidth="3.5" />
      <circle cx="88" cy="94" r="4" fill={INK} />
      <circle cx="112" cy="94" r="4" fill={INK} />
      <ellipse cx="100" cy="108" rx="10" ry="7" fill="#fff8ea" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "animal-turtle": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="110" rx="48" ry="34" fill="#7bcf9e" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 84 L 100 136 M 68 96 L 132 96 M 68 124 L 132 124" stroke={INK} strokeWidth="2" opacity="0.4" />
      <circle cx="146" cy="102" r="14" fill="#a6e0bc" stroke={INK} strokeWidth="2.5" />
      <circle cx="152" cy="98" r="2.5" fill={INK} />
    </Frame>
  ),
  "animal-snake": (id) => (
    <Frame id={id}>
      <path d="M 56 140 Q 56 108 84 108 Q 112 108 112 84 Q 112 60 140 60" fill="none" stroke="#5fbf77" strokeWidth="22" strokeLinecap="round" />
      <circle cx="140" cy="60" r="14" fill="#7bcf9e" stroke={INK} strokeWidth="2.5" />
      <circle cx="145" cy="56" r="2.5" fill={INK} />
      <path d="M 152 58 L 160 56" stroke="#e85d7a" strokeWidth="2" strokeLinecap="round" />
    </Frame>
  ),
  "animal-whale": (id) => (
    <Frame id={id}>
      <path d="M 50 110 Q 60 78 110 78 Q 150 78 150 106 Q 150 130 110 132 Q 60 134 50 110 Z" fill="#4c8df0" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 110 78 Q 116 60 130 58" stroke="#4c8df0" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="100" r="3.5" fill={INK} />
    </Frame>
  ),
  "animal-dolphin": (id) => (
    <Frame id={id}>
      <path d="M 54 116 Q 66 76 116 82 Q 152 86 150 108 Q 148 122 116 122 Q 70 128 54 116 Z" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 100 82 Q 96 64 106 54" stroke="#8fcfff" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="128" cy="98" r="3.5" fill={INK} />
    </Frame>
  ),
  "animal-owl": (id) => (
    <Frame id={id}>
      <path d="M 70 60 L 60 40 L 82 54 Z M 130 60 L 140 40 L 118 54 Z" fill="#a2704c" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="42" fill="#c08a5e" stroke={INK} strokeWidth="3.5" />
      <circle cx="84" cy="96" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="116" cy="96" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="84" cy="96" r="6" fill={INK} />
      <circle cx="116" cy="96" r="6" fill={INK} />
      <path d="M 96 112 L 104 112 L 100 120 Z" fill="#f5924a" stroke={INK} strokeWidth="1.5" strokeLinejoin="round" />
    </Frame>
  ),
  "animal-sheep": (id) => (
    <Frame id={id}>
      <circle cx="72" cy="90" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="100" cy="76" r="18" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="128" cy="90" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="86" cy="106" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="114" cy="106" r="16" fill="#fff8ea" stroke={INK} strokeWidth="2.5" />
      <circle cx="100" cy="112" r="26" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <circle cx="91" cy="108" r="3" fill="#ffffff" />
      <circle cx="109" cy="108" r="3" fill="#ffffff" />
    </Frame>
  ),
};
