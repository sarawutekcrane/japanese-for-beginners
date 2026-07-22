import { useCallback, useEffect, useRef, useState } from "react";
import { KANA_ALT_SPELLINGS } from "../data/kanaAltSpellings";
import { useSettings } from "../context/SettingsContext";

let cachedJaVoice = null;

/** Higher score = clearer/more natural-sounding voice, based on name hints and service type. */
function voiceQualityScore(voice) {
  const name = voice.name?.toLowerCase() || "";
  let score = 0;
  if (/google/.test(name)) score += 3;
  if (/natural|neural|premium|enhanced/.test(name)) score += 2;
  if (!voice.localService) score += 1; // network voices are usually higher fidelity
  return score;
}

function pickJapaneseVoice() {
  if (cachedJaVoice) return cachedJaVoice;
  const voices = window.speechSynthesis?.getVoices() || [];
  const jaVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith("ja"));
  if (jaVoices.length === 0) return null;
  cachedJaVoice = jaVoices.reduce((best, v) => (voiceQualityScore(v) > voiceQualityScore(best) ? v : best));
  return cachedJaVoice;
}

/** Speaks Japanese text aloud using the Web Speech API (speechSynthesis). No audio files needed. */
export function useSpeak() {
  const [speaking, setSpeaking] = useState(false);
  const { speechRate } = useSettings();
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    if (!supported) return;
    // Voice lists load async in some browsers.
    window.speechSynthesis.onvoiceschanged = () => {
      cachedJaVoice = null;
      pickJapaneseVoice();
    };
    pickJapaneseVoice();
  }, [supported]);

  const speak = useCallback(
    (text, { rate = speechRate, onEnd } = {}) => {
      if (!supported || !text) {
        onEnd?.();
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "ja-JP";
      utter.rate = rate;
      const voice = pickJapaneseVoice();
      if (voice) utter.voice = voice;
      utter.onstart = () => setSpeaking(true);
      utter.onend = () => {
        setSpeaking(false);
        onEnd?.();
      };
      utter.onerror = () => {
        setSpeaking(false);
        onEnd?.();
      };
      window.speechSynthesis.speak(utter);
    },
    [supported, speechRate]
  );

  return { speak, speaking, supported };
}

const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30f6;
const HIRAGANA_OFFSET = 0x60;

/** Converts katakana characters to their hiragana equivalent (same code-point order, offset by 0x60). */
function katakanaToHiragana(str = "") {
  let out = "";
  for (const ch of str) {
    const code = ch.codePointAt(0);
    out += code >= KATAKANA_START && code <= KATAKANA_END ? String.fromCodePoint(code - HIRAGANA_OFFSET) : ch;
  }
  return out;
}

function normalizeJa(str = "") {
  return katakanaToHiragana(
    str
      .normalize("NFKC")
      .replace(/[\s、。！？!?.,～〜ー・「」『』]/g, "")
      .toLowerCase()
  );
}

const KANJI_RANGE = /[一-鿿]/;

/** True if the string contains no kanji (i.e. is already pure hiragana/katakana/romaji). */
export function isKanaOnly(str = "") {
  return !KANJI_RANGE.test(str);
}

const KANJI_TO_KANA = {};
for (const [kana, kanjiList] of Object.entries(KANA_ALT_SPELLINGS)) {
  for (const kanji of kanjiList) {
    if (!(kanji in KANJI_TO_KANA)) KANJI_TO_KANA[kanji] = kana;
  }
}

/** Converts a known kanji spelling back to its hiragana reading, for display purposes. */
export function kanjiToKana(str = "") {
  return KANJI_TO_KANA[str.trim()] || str;
}

/** Rough match: compares a recognized transcript against the target Japanese text. */
export function matchesJapanese(transcript, target) {
  const a = normalizeJa(transcript);
  const b = normalizeJa(target);
  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;
  const alts = KANA_ALT_SPELLINGS[target] || KANA_ALT_SPELLINGS[b];
  if (alts) {
    return alts.some((alt) => {
      const n = normalizeJa(alt);
      return a === n || a.includes(n) || n.includes(a);
    });
  }
  return false;
}

const SpeechRecognitionCtor =
  typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : undefined;

const RECOGNITION_TIMEOUT_MS = 8000;

/** Wraps the Web Speech API's SpeechRecognition for Japanese speaking practice. */
export function useSpeechRecognition() {
  const supported = !!SpeechRecognitionCtor;
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);
  const settledRef = useRef(false);

  const start = useCallback(
    ({ onResult, onError, onEnd } = {}) => {
      if (!supported) return;
      recognitionRef.current?.abort();
      clearTimeout(timeoutRef.current);
      settledRef.current = false;

      const recognition = new SpeechRecognitionCtor();
      recognition.lang = "ja-JP";
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;

      const finish = () => {
        clearTimeout(timeoutRef.current);
        settledRef.current = true;
      };

      recognition.onstart = () => setListening(true);
      recognition.onresult = (event) => {
        finish();
        const results = event.results?.[0];
        const alternatives = results ? Array.from(results).map((alt) => alt.transcript) : [];
        onResult?.(alternatives[0] || "", alternatives);
      };
      recognition.onerror = (event) => {
        finish();
        onError?.(event.error);
      };
      recognition.onend = () => {
        setListening(false);
        clearTimeout(timeoutRef.current);
        // Some browsers end the session without ever firing onresult/onerror
        // (e.g. permission hiccups). Without this, the UI looks "frozen".
        if (!settledRef.current) {
          settledRef.current = true;
          onError?.("no-speech");
        }
        onEnd?.();
      };
      recognitionRef.current = recognition;
      recognition.start();

      // Defensive timeout in case no browser event ever fires.
      timeoutRef.current = setTimeout(() => {
        if (settledRef.current) return;
        settledRef.current = true;
        recognition.abort();
        onError?.("timeout");
      }, RECOGNITION_TIMEOUT_MS);
    },
    [supported]
  );

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
      recognitionRef.current?.abort();
    },
    []
  );

  return { supported, listening, start, stop };
}
