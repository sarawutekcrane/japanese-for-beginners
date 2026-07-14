import { Frame, INK } from "./shared";

export const bodyPartsIcons = {
  "body-head": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="46" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <path d="M 60 90 Q 66 54 100 54 Q 134 54 140 90 Q 120 76 100 76 Q 80 76 60 90 Z" fill="#6b4a57" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="86" cy="106" r="4" fill={INK} />
      <circle cx="114" cy="106" r="4" fill={INK} />
      <path d="M 88 122 Q 100 128 112 122" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "body-face": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="48" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <circle cx="82" cy="98" r="5" fill={INK} />
      <circle cx="118" cy="98" r="5" fill={INK} />
      <path d="M 96 108 Q 100 114 104 108" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 90 126 Q 100 134 110 126" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
    </Frame>
  ),
  "body-eye": (id) => (
    <Frame id={id}>
      <path d="M 50 104 Q 100 68 150 104 Q 100 140 50 104 Z" fill="#ffffff" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="100" cy="104" r="20" fill="#6b4a57" stroke={INK} strokeWidth="2.5" />
      <circle cx="106" cy="98" r="6" fill="#fff" />
    </Frame>
  ),
  "body-nose": (id) => (
    <Frame id={id}>
      <path d="M 92 60 Q 78 110 92 128 Q 100 136 108 128 Q 122 110 108 60" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <ellipse cx="92" cy="126" rx="4" ry="3" fill={INK} opacity="0.5" />
      <ellipse cx="108" cy="126" rx="4" ry="3" fill={INK} opacity="0.5" />
    </Frame>
  ),
  "body-mouth": (id) => (
    <Frame id={id}>
      <path d="M 54 100 Q 100 140 146 100 Q 100 116 54 100 Z" fill="#e0876b" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 60 100 Q 100 110 140 100" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
    </Frame>
  ),
  "body-ear": (id) => (
    <Frame id={id}>
      <path d="M 100 60 Q 60 66 62 108 Q 64 140 96 138 Q 100 130 92 122 Q 108 122 108 100 Q 108 74 100 60 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 88 96 Q 96 100 90 112" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
    </Frame>
  ),
  "body-hair": (id) => (
    <Frame id={id}>
      <path d="M 54 130 Q 46 60 100 50 Q 154 60 146 130 Q 130 100 100 96 Q 70 100 54 130 Z" fill="#6b4a57" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 70 80 Q 76 66 86 62 M 100 78 Q 100 62 100 58 M 130 80 Q 124 66 114 62" stroke="#8a6a76" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </Frame>
  ),
  "body-hand": (id) => (
    <Frame id={id}>
      <path d="M 76 120 Q 70 90 78 60 Q 82 50 88 60 Q 90 90 90 108 Q 94 88 96 58 Q 100 48 104 58 Q 106 88 108 108 Q 112 88 116 62 Q 120 52 124 62 Q 128 90 122 118 Q 130 122 128 140 Q 100 156 76 140 Q 72 128 76 120 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "body-arm": (id) => (
    <Frame id={id}>
      <path d="M 70 50 Q 130 60 120 110 Q 116 130 96 128" fill="none" stroke="#ffe9d6" strokeWidth="34" strokeLinecap="round" />
      <path d="M 70 50 Q 130 60 120 110 Q 116 130 96 128" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <circle cx="96" cy="128" r="18" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "body-leg": (id) => (
    <Frame id={id}>
      <path d="M 90 50 L 96 130" stroke="#ffe9d6" strokeWidth="34" strokeLinecap="round" />
      <ellipse cx="98" cy="146" rx="26" ry="14" fill="#8fcfff" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "body-stomach": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="108" rx="48" ry="42" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 88 L 100 128" stroke={INK} strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="108" r="4" fill={INK} opacity="0.6" />
    </Frame>
  ),
  "body-back": (id) => (
    <Frame id={id}>
      <path d="M 70 60 Q 60 108 78 150 L 122 150 Q 140 108 130 60 Q 100 44 70 60 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 100 60 Q 96 100 100 148" stroke={INK} strokeWidth="2.5" opacity="0.4" fill="none" />
    </Frame>
  ),
  "body-neck": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="66" r="28" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <rect x="82" y="86" width="36" height="40" rx="10" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <path d="M 78 126 Q 100 138 122 126" fill="#8fcfff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    </Frame>
  ),
  "body-tooth": (id) => (
    <Frame id={id}>
      <path d="M 76 66 Q 70 100 80 130 Q 86 146 100 130 Q 114 146 120 130 Q 130 100 124 66 Q 100 50 76 66 Z" fill="#ffffff" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
    </Frame>
  ),
  "body-finger": (id) => (
    <Frame id={id}>
      <path d="M 90 60 Q 86 100 90 132" stroke="#ffe9d6" strokeWidth="30" strokeLinecap="round" />
      <ellipse cx="90" cy="58" rx="15" ry="17" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <path d="M 90 100 Q 84 100 84 108" stroke={INK} strokeWidth="2" opacity="0.4" fill="none" />
    </Frame>
  ),
  "body-knee": (id) => (
    <Frame id={id}>
      <line x1="100" y1="50" x2="100" y2="150" stroke="#ffe9d6" strokeWidth="34" strokeLinecap="round" />
      <circle cx="100" cy="100" r="22" fill="#ffdcc0" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "body-heel": (id) => (
    <Frame id={id}>
      <path d="M 70 70 L 90 70 L 110 118 L 140 130 Q 148 134 142 142 L 76 142 Q 68 142 68 132 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 90 118 L 140 130" stroke={INK} strokeWidth="2" opacity="0.4" fill="none" />
    </Frame>
  ),
  "body-nail": (id) => (
    <Frame id={id}>
      <path d="M 90 70 Q 84 108 90 136" stroke="#ffe9d6" strokeWidth="30" strokeLinecap="round" />
      <ellipse cx="90" cy="68" rx="15" ry="17" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <ellipse cx="90" cy="66" rx="9" ry="10" fill="#ffd8ea" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "body-eyebrow": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="112" r="44" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <path d="M 76 96 Q 90 84 106 92" stroke="#6b4a57" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 118 92 Q 126 88 132 94" stroke="#6b4a57" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.5" />
    </Frame>
  ),
  "body-tongue": (id) => (
    <Frame id={id}>
      <path d="M 54 96 Q 100 132 146 96 Q 100 112 54 96 Z" fill="#e0876b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="100" cy="112" rx="18" ry="20" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" />
      <line x1="100" y1="96" x2="100" y2="126" stroke={INK} strokeWidth="1.5" opacity="0.4" />
    </Frame>
  ),
  "body-cheek": (id) => (
    <Frame id={id}>
      <circle cx="100" cy="104" r="46" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <ellipse cx="76" cy="112" rx="16" ry="12" fill="#ffb6cf" opacity="0.85" />
      <circle cx="118" cy="94" r="4" fill={INK} />
    </Frame>
  ),
  "body-chin": (id) => (
    <Frame id={id}>
      <path d="M 62 70 Q 60 120 100 138 Q 140 120 138 70 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 84 118 Q 100 126 116 118" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </Frame>
  ),
  "body-shoulder": (id) => (
    <Frame id={id}>
      <path d="M 60 130 Q 60 92 100 88 Q 140 92 140 130" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <circle cx="100" cy="70" r="22" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
    </Frame>
  ),
  "body-waist": (id) => (
    <Frame id={id}>
      <path d="M 68 60 Q 100 84 132 60 Q 140 108 132 148 Q 100 128 68 148 Q 60 108 68 60 Z" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M 72 104 L 128 104" stroke={INK} strokeWidth="2" opacity="0.35" />
    </Frame>
  ),
  "body-chest": (id) => (
    <Frame id={id}>
      <rect x="62" y="70" width="76" height="70" rx="14" fill="#ffe9d6" stroke={INK} strokeWidth="3.5" />
      <path d="M 100 84 L 100 126" stroke={INK} strokeWidth="2" opacity="0.35" />
      <circle cx="82" cy="98" r="4" fill={INK} opacity="0.4" />
      <circle cx="118" cy="98" r="4" fill={INK} opacity="0.4" />
    </Frame>
  ),
};
