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
      <circle cx="100" cy="100" r="52" fill="#e0a94a" stroke={INK} strokeWidth="3.5" />
      <circle cx="100" cy="100" r="36" fill="#f5d9a0" stroke={INK} strokeWidth="3" />
      <ellipse cx="100" cy="112" rx="14" ry="10" fill="#f3d19c" stroke={INK} strokeWidth="2" />
      <circle cx="88" cy="96" r="4" fill={INK} />
      <circle cx="112" cy="96" r="4" fill={INK} />
      <circle cx="100" cy="110" r="3" fill={INK} />
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
};
