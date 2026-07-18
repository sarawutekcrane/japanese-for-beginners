import { Frame, Chibi, INK, Sparkle } from "./shared";

export const verbsIcons = {
  "verb-eat": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffd166" armPose="down" face="happy" />
      <ellipse cx="152" cy="130" rx="24" ry="14" fill="#fff" stroke={INK} strokeWidth="2.5" />
      <ellipse cx="152" cy="126" rx="20" ry="9" fill="#f5924a" />
      <line x1="176" y1="108" x2="182" y2="70" stroke="#c9ccd6" strokeWidth="3" strokeLinecap="round" />
      <line x1="182" y1="108" x2="188" y2="72" stroke="#c9ccd6" strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  "verb-drink": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fcfff" armPose="up" face="happy" />
      <path d="M 146 96 L 178 96 L 174 138 Q 176 146 162 146 Q 148 146 150 138 Z" fill="#dff1ff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="150" y1="106" x2="174" y2="106" stroke={INK} strokeWidth="2" opacity="0.4" />
      <path d="M 178 100 Q 190 104 186 116" fill="none" stroke={INK} strokeWidth="2.5" />
    </Frame>
  ),
  "verb-go": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="wave" face="smile" />
      <path d="M 150 128 L 180 128 M 168 116 L 182 128 L 168 140" fill="none" stroke="#5fbf77" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "verb-come": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ff9ec7" armPose="wave" face="happy" />
      <path d="M 50 128 L 20 128 M 32 116 L 18 128 L 32 140" fill="none" stroke="#e85d7a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "verb-watch": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fd3f4" armPose="down" face="surprised" />
      <rect x="132" y="52" width="46" height="32" rx="5" fill="#2f2b52" stroke={INK} strokeWidth="2.5" />
      <rect x="140" y="58" width="30" height="20" fill="#8fcfff" />
    </Frame>
  ),
  "verb-listen": (id) => (
    <Frame id={id}>
      <Chibi shirt="#c9a0f5" armPose="down" face="smile" />
      <path d="M 128 66 Q 118 66 118 80 L 118 92 Q 118 100 126 100" fill="none" stroke="#b07ae0" strokeWidth="6" strokeLinecap="round" />
      <circle cx="128" cy="62" r="9" fill="#b07ae0" stroke={INK} strokeWidth="2" />
      <circle cx="126" cy="100" r="9" fill="#b07ae0" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "verb-read": (id) => (
    <Frame id={id}>
      <Chibi shirt="#f5924a" armPose="down" face="smile" />
      <path d="M 150 100 L 150 138 Q 138 130 126 136 L 126 102 Q 138 96 150 100 Z" fill="#8fcfff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 150 100 L 150 138 Q 162 130 174 136 L 174 102 Q 162 96 150 100 Z" fill="#ff9ec7" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
    </Frame>
  ),
  "verb-write": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="down" face="smile" />
      <rect x="126" y="96" width="52" height="40" rx="4" fill="#fff" stroke={INK} strokeWidth="2.5" />
      <line x1="134" y1="110" x2="170" y2="110" stroke={INK} strokeWidth="2" opacity="0.4" />
      <path d="M 176 84 L 188 96 L 158 126 L 148 128 L 150 118 Z" fill="#ffd166" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
    </Frame>
  ),
  "verb-speak": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffd6e8" armPose="down" face="happy" />
      <path d="M 128 56 Q 122 56 122 66 L 122 78 Q 122 88 132 88 L 146 88 L 156 98 L 154 88 Q 164 88 164 78 L 164 66 Q 164 56 158 56 Z" fill="#fff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="132" cy="72" r="2.6" fill={INK} />
      <circle cx="143" cy="72" r="2.6" fill={INK} />
      <circle cx="154" cy="72" r="2.6" fill={INK} />
    </Frame>
  ),
  "verb-walk": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fcfff" armPose="wave" face="smile" />
      <ellipse cx="66" cy="168" rx="12" ry="7" fill="#c9ccd6" opacity="0.7" />
      <ellipse cx="98" cy="176" rx="12" ry="7" fill="#c9ccd6" opacity="0.5" />
      <ellipse cx="130" cy="182" rx="12" ry="7" fill="#c9ccd6" opacity="0.3" />
    </Frame>
  ),
  "verb-run": (id) => (
    <Frame id={id}>
      <Chibi shirt="#f6d34c" armPose="wave" face="smile" />
      <path d="M 40 90 L 58 90 M 34 106 L 56 106 M 42 122 L 58 122" stroke={INK} strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
    </Frame>
  ),
  "verb-sleep": (id) => (
    <Frame id={id}>
      <ellipse cx="96" cy="132" rx="52" ry="20" fill="#cdeaff" opacity="0.6" />
      <ellipse cx="90" cy="120" rx="40" ry="26" fill="#ffe9d6" stroke={INK} strokeWidth="3" />
      <path d="M 68 116 L 78 116 M 96 116 L 106 116" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <text x="140" y="86" fontSize="20" fontWeight="800" fill="#8a7a82" fontFamily="Baloo 2, sans-serif">z</text>
      <text x="156" y="66" fontSize="15" fontWeight="800" fill="#8a7a82" fontFamily="Baloo 2, sans-serif">z</text>
    </Frame>
  ),
  "verb-wake-up": (id) => (
    <Frame id={id}>
      <circle cx="150" cy="52" r="20" fill="#ffcf6b" stroke={INK} strokeWidth="3" />
      <Chibi shirt="#ffd166" armPose="up" face="surprised" />
    </Frame>
  ),
  "verb-buy": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ff9ec7" armPose="down" face="happy" />
      <path d="M 138 92 L 176 92 L 172 138 Q 172 144 160 144 L 150 144 Q 138 144 138 138 Z" fill="#8fcfff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 146 92 Q 146 76 157 76 Q 168 76 168 92" fill="none" stroke={INK} strokeWidth="2.5" />
      <circle cx="157" cy="112" r="8" fill="#ffd166" stroke={INK} strokeWidth="2" />
      <text x="157" y="116" fontSize="10" fontWeight="800" fill={INK} textAnchor="middle">¥</text>
    </Frame>
  ),
  "verb-sell": (id) => (
    <Frame id={id}>
      <Chibi shirt="#7bcf9e" armPose="down" face="smile" />
      <path d="M 132 70 L 164 70 L 186 92 L 154 124 L 122 92 Z" fill="#ffd166" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="140" cy="82" r="5" fill="#fff" />
      <text x="152" y="104" fontSize="16" fontWeight="800" fill={INK} textAnchor="middle">¥</text>
    </Frame>
  ),
  "verb-make": (id) => (
    <Frame id={id}>
      <Chibi shirt="#c9a0f5" armPose="up" face="happy" />
      <rect x="140" y="86" width="10" height="40" rx="3" fill="#a2704c" stroke={INK} strokeWidth="2" transform="rotate(35 145 106)" />
      <rect x="160" y="60" width="26" height="16" rx="3" fill="#5a4a52" stroke={INK} strokeWidth="2" transform="rotate(35 173 68)" />
      <Sparkle x="118" y="56" s="0.7" />
    </Frame>
  ),
  "verb-play": (id) => (
    <Frame id={id}>
      <Chibi shirt="#f5924a" armPose="up" face="happy" />
      <circle cx="152" cy="70" r="16" fill="#5fbf77" stroke={INK} strokeWidth="2.5" />
      <path d="M 152 54 L 152 86 M 136 70 L 168 70" stroke={INK} strokeWidth="1.8" opacity="0.4" />
    </Frame>
  ),
  "verb-study": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fcfff" armPose="down" face="smile" />
      <path d="M 146 108 L 146 140 Q 134 133 122 138 L 122 106 Q 134 100 146 106 Z" fill="#fff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 146 108 L 146 140 Q 158 133 170 138 L 170 106 Q 158 100 146 106 Z" fill="#fff" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="128" y="60" width="30" height="22" rx="10" fill="#5a4a52" stroke={INK} strokeWidth="2.5" />
      <rect x="122" y="72" width="42" height="8" rx="4" fill="#5a4a52" stroke={INK} strokeWidth="2" />
    </Frame>
  ),
  "verb-work": (id) => (
    <Frame id={id}>
      <Chibi shirt="#5a4a52" armPose="down" face="smile" />
      <rect x="128" y="96" width="48" height="34" rx="5" fill="#c08a5e" stroke={INK} strokeWidth="2.5" />
      <rect x="144" y="88" width="16" height="12" rx="3" fill="none" stroke={INK} strokeWidth="2.5" />
      <line x1="128" y1="112" x2="176" y2="112" stroke={INK} strokeWidth="2" opacity="0.5" />
    </Frame>
  ),
  "verb-wait": (id) => (
    <Frame id={id}>
      <Chibi shirt="#8fd3a0" armPose="down" face="smile" />
      <circle cx="152" cy="76" r="26" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <line x1="152" y1="76" x2="152" y2="60" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <line x1="152" y1="76" x2="164" y2="82" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </Frame>
  ),
  "verb-meet": (id) => (
    <Frame id={id}>
      <ellipse cx="100" cy="150" rx="46" ry="12" fill="#ffe9d6" opacity="0.5" />
      <circle cx="76" cy="100" r="26" fill="#8fcfff" stroke={INK} strokeWidth="3" />
      <circle cx="124" cy="100" r="26" fill="#ff9ec7" stroke={INK} strokeWidth="3" />
      <path d="M 60 122 Q 80 112 100 122 L 96 136 Q 80 142 66 134 Z" fill="#dff1ff" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M 140 122 Q 120 112 100 122 L 104 136 Q 120 142 134 134 Z" fill="#ffe0ec" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <Sparkle x="100" y="66" s="0.9" />
    </Frame>
  ),
  "verb-send": (id) => (
    <Frame id={id}>
      <path d="M 60 92 L 140 92 L 140 132 L 60 132 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M 60 92 L 100 118 L 140 92" fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 150 112 L 178 112 M 166 100 L 180 112 L 166 124" fill="none" stroke="#5fbf77" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  "verb-take": (id) => (
    <Frame id={id}>
      <Chibi shirt="#ffd6e8" armPose="up" face="happy" />
      <rect x="138" y="52" width="28" height="28" rx="6" fill="#ffd166" stroke={INK} strokeWidth="2.5" />
      <path d="M 138 64 L 166 64" stroke={INK} strokeWidth="2" opacity="0.4" />
    </Frame>
  ),
  "verb-open": (id) => (
    <Frame id={id}>
      <rect x="70" y="60" width="60" height="90" rx="4" fill="#fff3da" stroke={INK} strokeWidth="3" />
      <path d="M 130 60 L 160 70 L 160 140 L 130 150 Z" fill="#c9822b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="148" cy="106" r="4" fill={INK} />
    </Frame>
  ),
  "verb-close": (id) => (
    <Frame id={id}>
      <rect x="70" y="60" width="70" height="90" rx="4" fill="#c9822b" stroke={INK} strokeWidth="3" />
      <circle cx="126" cy="106" r="4" fill="#fff3da" />
      <rect x="70" y="60" width="70" height="90" rx="4" fill="none" stroke={INK} strokeWidth="2" opacity="0.3" />
    </Frame>
  ),
};
