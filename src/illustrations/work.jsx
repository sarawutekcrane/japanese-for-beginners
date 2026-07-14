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
};
