import { Frame, Chibi, INK } from "./shared";

export const transportationIcons = {
  "transport-train": (id) => (
    <Frame id={id}>
      <rect x="58" y="70" width="84" height="56" rx="14" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="70" y="82" width="24" height="20" rx="4" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="106" y="82" width="24" height="20" rx="4" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <circle cx="76" cy="132" r="8" fill="#3a3a3a" />
      <circle cx="124" cy="132" r="8" fill="#3a3a3a" />
    </Frame>
  ),
  "transport-bus": (id) => (
    <Frame id={id}>
      <rect x="54" y="72" width="92" height="52" rx="10" fill="#f6d34c" stroke={INK} strokeWidth="3" />
      <rect x="64" y="82" width="20" height="18" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="90" y="82" width="20" height="18" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="116" y="82" width="20" height="18" rx="3" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <circle cx="72" cy="128" r="8" fill="#3a3a3a" />
      <circle cx="128" cy="128" r="8" fill="#3a3a3a" />
    </Frame>
  ),
  "transport-car": (id) => (
    <Frame id={id}>
      <path d="M 56 116 Q 60 90 90 88 L 110 88 Q 140 90 144 116 Z" fill="#f45c5c" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 82 90 L 92 74 L 108 74 L 118 90 Z" fill="#dff1ff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="76" cy="120" r="10" fill="#3a3a3a" />
      <circle cx="124" cy="120" r="10" fill="#3a3a3a" />
    </Frame>
  ),
  "transport-bicycle": (id) => (
    <Frame id={id}>
      <circle cx="70" cy="120" r="22" fill="none" stroke={INK} strokeWidth="4" />
      <circle cx="130" cy="120" r="22" fill="none" stroke={INK} strokeWidth="4" />
      <path d="M 70 120 L 100 84 L 130 120 M 100 84 L 92 120 M 78 96 L 108 96" stroke="#5fbf77" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "transport-taxi": (id) => (
    <Frame id={id}>
      <path d="M 56 116 Q 60 90 90 88 L 110 88 Q 140 90 144 116 Z" fill="#ffcf6b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="90" y="70" width="20" height="12" rx="3" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <circle cx="76" cy="120" r="10" fill="#3a3a3a" />
      <circle cx="124" cy="120" r="10" fill="#3a3a3a" />
    </Frame>
  ),
  "transport-airplane": (id) => (
    <Frame id={id}>
      <path
        d="M 56 100 L 132 92 L 156 84 L 160 90 L 138 104 L 132 124 L 122 124 L 120 106 L 92 110 L 82 124 L 72 124 L 80 106 L 56 108 Z"
        fill="#8fcfff"
        stroke={INK}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  "transport-ship": (id) => (
    <Frame id={id}>
      <path d="M 58 122 L 142 122 L 128 148 L 72 148 Z" fill="#f5924a" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="96" y="70" width="8" height="52" fill="#a2704c" />
      <path d="M 104 76 L 130 96 L 104 96 Z" fill="#ffffff" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "transport-subway": (id) => (
    <Frame id={id}>
      <rect x="60" y="66" width="80" height="60" rx="16" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <rect x="72" y="80" width="56" height="24" rx="4" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <circle cx="78" cy="132" r="8" fill="#3a3a3a" />
      <circle cx="122" cy="132" r="8" fill="#3a3a3a" />
    </Frame>
  ),
  "transport-walk": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="up" face="happy" />
      <path d="M 60 150 L 78 150 M 122 150 L 140 150" stroke={INK} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
    </Frame>
  ),
  "transport-ticket": (id) => (
    <Frame id={id}>
      <rect x="52" y="82" width="96" height="44" rx="8" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <circle cx="52" cy="104" r="6" fill="#ffe3ef" stroke={INK} strokeWidth="2" />
      <circle cx="148" cy="104" r="6" fill="#ffe3ef" stroke={INK} strokeWidth="2" />
      <line x1="90" y1="86" x2="90" y2="122" stroke={INK} strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
    </Frame>
  ),
  "transport-platform": (id) => (
    <Frame id={id}>
      <rect x="50" y="120" width="100" height="10" fill="#c9ccd6" stroke={INK} strokeWidth="2.5" />
      <rect x="50" y="130" width="100" height="6" fill="#f6d34c" opacity="0.8" />
      <circle cx="100" cy="96" r="14" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
      <rect x="88" y="110" width="24" height="24" rx="6" fill="#8fcfff" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "transport-road": (id) => (
    <Frame id={id}>
      <rect x="60" y="56" width="80" height="100" fill="#8a8a92" opacity="0.4" />
      <line x1="100" y1="60" x2="100" y2="150" stroke="#ffffff" strokeWidth="6" strokeDasharray="14 10" opacity="0.8" />
    </Frame>
  ),
  "transport-traffic-light": (id) => (
    <Frame id={id}>
      <rect x="82" y="56" width="36" height="80" rx="10" fill="#5a4a52" stroke={INK} strokeWidth="3" />
      <circle cx="100" cy="76" r="10" fill="#f45c5c" stroke={INK} strokeWidth="2" />
      <circle cx="100" cy="98" r="10" fill="#f6d34c" stroke={INK} strokeWidth="2" opacity="0.5" />
      <circle cx="100" cy="120" r="10" fill="#5fbf77" stroke={INK} strokeWidth="2" opacity="0.5" />
    </Frame>
  ),
  "transport-map": (id) => (
    <Frame id={id}>
      <path d="M 56 66 L 90 56 L 110 66 L 144 56 L 144 138 L 110 148 L 90 138 L 56 148 Z" fill="#fff3da" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <line x1="90" y1="56" x2="90" y2="138" stroke={INK} strokeWidth="2" opacity="0.4" />
      <line x1="110" y1="66" x2="110" y2="148" stroke={INK} strokeWidth="2" opacity="0.4" />
      <path d="M 74 90 Q 90 100 106 88 Q 122 78 132 100" fill="none" stroke="#f45c5c" strokeWidth="3" strokeDasharray="4 5" />
    </Frame>
  ),
  "transport-schedule": (id) => (
    <Frame id={id}>
      <rect x="58" y="60" width="84" height="86" rx="8" fill="#ffffff" stroke={INK} strokeWidth="3" />
      <line x1="58" y1="82" x2="142" y2="82" stroke={INK} strokeWidth="2.5" />
      <line x1="70" y1="96" x2="130" y2="96" stroke="#8fcfff" strokeWidth="4" opacity="0.7" />
      <line x1="70" y1="112" x2="130" y2="112" stroke="#ff9ec7" strokeWidth="4" opacity="0.7" />
      <line x1="70" y1="128" x2="130" y2="128" stroke="#f6d34c" strokeWidth="4" opacity="0.7" />
    </Frame>
  ),
};
