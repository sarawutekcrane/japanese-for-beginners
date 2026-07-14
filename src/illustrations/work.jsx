import { Frame, Chibi, INK } from "./shared";

export const workIcons = {
  "job-teacher": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="up" face="smile" />
      <rect x="82" y="76" width="16" height="10" rx="4" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="102" y="76" width="16" height="10" rx="4" fill="none" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "job-doctor": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffffff" armPose="down" face="smile" />
      <path d="M 88 118 Q 100 130 112 118" stroke="#8fcfff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="130" r="5" fill="#8fcfff" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "job-nurse": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffe9d6" armPose="wave" face="happy" />
      <rect x="92" y="38" width="16" height="16" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <line x1="100" y1="41" x2="100" y2="51" stroke="#f45c5c" strokeWidth="3" />
      <line x1="95" y1="46" x2="105" y2="46" stroke="#f45c5c" strokeWidth="3" />
    </Frame>
  ),
  "job-police": (id) => (
    <Frame id={id}>
      <Chibi shirt="#4c8df0" armPose="up" face="smile" />
      <path d="M 66 60 Q 100 40 134 60 L 130 68 Q 100 52 70 68 Z" fill="#2f2b52" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="100" cy="58" r="4" fill="#f6d34c" />
    </Frame>
  ),
  "job-office-worker": (id) => (
    <Frame id={id}>
      <Chibi shirt="#dff1ff" armPose="down" face="smile" />
      <path d="M 96 106 L 104 106 L 108 124 L 100 136 L 92 124 Z" fill="#4c8df0" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "job-student": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffd166" armPose="wave" face="happy" />
      <path d="M 74 112 L 74 140 M 126 112 L 126 140" stroke="#a2704c" strokeWidth="6" strokeLinecap="round" />
    </Frame>
  ),
  "job-cook": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffffff" armPose="down" face="smile" />
      <path d="M 78 46 Q 74 22 100 24 Q 126 22 122 46 Q 120 34 100 36 Q 80 34 78 46 Z" fill="#ffffff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <rect x="78" y="42" width="44" height="10" fill="#ffffff" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "job-driver": (id) => (
    <Frame id={id}>
      <Chibi shirt="#f5924a" armPose="praying" face="smile" />
      <circle cx="100" cy="122" r="18" fill="none" stroke={INK} strokeWidth="4" />
    </Frame>
  ),
  "job-shop-clerk": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ff9ec7" armPose="wave" face="happy" />
      <rect x="82" y="112" width="36" height="38" rx="6" fill="#fff3da" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "job-engineer": (id) => (
    <Frame id={id}>
      <Chibi shirt="#f6d34c" armPose="up" face="smile" />
      <path d="M 66 58 Q 100 30 134 58 L 128 64 Q 100 44 72 64 Z" fill="#ffcf6b" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "job-company": (id) => (
    <Frame id={id}>
      <rect x="60" y="56" width="80" height="90" rx="6" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <rect x="72" y="68" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="93" y="68" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="114" y="68" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="72" y="90" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="93" y="90" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="114" y="90" width="14" height="14" fill="#dff1ff" stroke={INK} strokeWidth="2" />
      <rect x="90" y="120" width="20" height="26" fill="#fff3da" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "job-work": (id) => (
    <Frame id={id}>
      <rect x="62" y="92" width="76" height="54" rx="8" fill="#a2704c" stroke={INK} strokeWidth="3" />
      <rect x="86" y="78" width="28" height="18" rx="4" fill="none" stroke={INK} strokeWidth="3" />
      <line x1="62" y1="112" x2="138" y2="112" stroke={INK} strokeWidth="2.5" opacity="0.5" />
    </Frame>
  ),
  "job-meeting": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="110" rx="46" ry="20" fill="#c08a5e" stroke={INK} strokeWidth="3" />
      <circle cx="62" cy="90" r="14" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
      <circle cx="138" cy="90" r="14" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
      <circle cx="100" cy="150" r="14" fill="#ffe9d6" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "job-colleague": (id) => (
    <Frame id={id}>
      <g transform="translate(-6,26) scale(0.6)">
        <Chibi shirt="#8fcfff" armPose="down" face="smile" />
      </g>
      <g transform="translate(74,26) scale(0.6)">
        <Chibi shirt="#ff9ec7" armPose="wave" face="happy" />
      </g>
    </Frame>
  ),
  "job-boss": (id) => (
    <Frame id={id}>
      <Chibi shirt="#5a4a52" armPose="up" face="happy" />
      <path d="M 96 106 L 104 106 L 108 124 L 100 136 L 92 124 Z" fill="#f6d34c" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </Frame>
  ),
  "job-civil-servant": (id) => (
    <Frame id={id}>
      <Chibi shirt="#4c8df0" armPose="down" face="smile" />
      <rect x="86" y="106" width="28" height="10" rx="3" fill="#f6d34c" stroke={INK} strokeWidth="1.5" />
    </Frame>
  ),
  "job-lawyer": (id) => (
    <Frame id={id}>
      <Chibi shirt="#5a4a52" armPose="down" face="smile" />
      <rect x="80" y="80" width="40" height="8" rx="3" fill="#ffffff" opacity="0.8" />
      <circle cx="150" cy="120" r="12" fill="#a2704c" stroke={INK} strokeWidth="2" />
      <rect x="144" y="112" width="12" height="6" fill="#a2704c" stroke={INK} strokeWidth="1.5" />
    </Frame>
  ),
  "job-singer": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ff9ec7" armPose="up" face="happy" />
      <rect x="146" y="50" width="14" height="26" rx="7" fill="#5a4a52" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "job-artist": (id) => (
    <Frame id={id}>
      <Chibi shirt="#c9a0f5" armPose="praying" face="smile" />
      <ellipse cx="150" cy="110" rx="18" ry="12" fill="#fff8ea" stroke={INK} strokeWidth="2" />
      <circle cx="144" cy="108" r="2.5" fill="#f45c5c" />
      <circle cx="152" cy="106" r="2.5" fill="#4c8df0" />
      <circle cx="156" cy="112" r="2.5" fill="#f6d34c" />
    </Frame>
  ),
  "job-farmer": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="down" face="smile" />
      <ellipse cx="100" cy="52" rx="34" ry="10" fill="#f6d34c" stroke={INK} strokeWidth="2.5" />
      <path d="M 78 52 Q 78 36 100 38 Q 122 36 122 52 Z" fill="#ffcf6b" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "job-hairdresser": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffd6e8" armPose="up" face="happy" />
      <path d="M 142 100 L 158 84 M 142 84 L 158 100" stroke="#c9ccd6" strokeWidth="4" strokeLinecap="round" />
      <circle cx="142" cy="92" r="6" fill="none" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "job-interpreter": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fcfff" armPose="down" face="smile" />
      <ellipse cx="60" cy="60" rx="16" ry="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <ellipse cx="140" cy="60" rx="16" ry="12" fill="#ffffff" stroke={INK} strokeWidth="2" />
      <text x="60" y="65" fontSize="12" fontWeight="800" fill="#4c8df0" fontFamily="Baloo 2, sans-serif" textAnchor="middle">A</text>
      <text x="140" y="65" fontSize="12" fontWeight="800" fill="#f45c5c" fontFamily="Baloo 2, sans-serif" textAnchor="middle">あ</text>
    </Frame>
  ),
  "job-pilot": (id) => (
    <Frame id={id}>
      <Chibi shirt="#2f2b52" armPose="up" face="smile" />
      <path d="M 66 58 Q 100 40 134 58 L 128 66 Q 100 52 72 66 Z" fill="#2f2b52" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="100" cy="58" r="5" fill="#f6d34c" />
    </Frame>
  ),
  "job-salary": (id) => (
    <Frame id={id}>
      <path d="M 60 76 L 140 76 L 140 132 L 60 132 Z" fill="#fff3da" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 60 76 L 100 104 L 140 76" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="100" cy="104" r="14" fill="#f6d34c" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "job-interview": (id) => (
    <Frame id={id}>
      <rect x="80" y="110" width="40" height="12" fill="#a2704c" stroke={INK} strokeWidth="2.5" />
      <g transform="translate(-8,20) scale(0.55)">
        <Chibi shirt="#4c8df0" armPose="down" face="smile" />
      </g>
      <g transform="translate(76,20) scale(0.55)">
        <Chibi shirt="#ff9ec7" armPose="down" face="happy" />
      </g>
    </Frame>
  ),
};
