import { useCallback, useEffect, useRef, useState } from "react";

let cachedJaVoice = null;

function pickJapaneseVoice() {
  if (cachedJaVoice) return cachedJaVoice;
  const voices = window.speechSynthesis?.getVoices() || [];
  cachedJaVoice = voices.find((v) => v.lang?.toLowerCase().startsWith("ja")) || null;
  return cachedJaVoice;
}

/** Speaks Japanese text aloud using the Web Speech API (speechSynthesis). No audio files needed. */
export function useSpeak() {
  const [speaking, setSpeaking] = useState(false);
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
    (text, { rate = 0.9 } = {}) => {
      if (!supported || !text) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "ja-JP";
      utter.rate = rate;
      const voice = pickJapaneseVoice();
      if (voice) utter.voice = voice;
      utter.onstart = () => setSpeaking(true);
      utter.onend = () => setSpeaking(false);
      utter.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utter);
    },
    [supported]
  );

  return { speak, speaking, supported };
}

function normalizeJa(str = "") {
  return str
    .normalize("NFKC")
    .replace(/[\s、。！？!?.,～〜ー・「」『』]/g, "")
    .toLowerCase();
}

/** Rough match: compares a recognized transcript against the target Japanese text. */
export function matchesJapanese(transcript, target) {
  const a = normalizeJa(transcript);
  const b = normalizeJa(target);
  if (!a || !b) return false;
  return a === b || a.includes(b) || b.includes(a);
}

const SpeechRecognitionCtor =
  typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : undefined;

/** Wraps the Web Speech API's SpeechRecognition for Japanese speaking practice. */
export function useSpeechRecognition() {
  const supported = !!SpeechRecognitionCtor;
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const start = useCallback(
    ({ onResult, onError, onEnd } = {}) => {
      if (!supported) return;
      const recognition = new SpeechRecognitionCtor();
      recognition.lang = "ja-JP";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognition.onstart = () => setListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript || "";
        onResult?.(transcript);
      };
      recognition.onerror = (event) => {
        onError?.(event.error);
      };
      recognition.onend = () => {
        setListening(false);
        onEnd?.();
      };
      recognitionRef.current = recognition;
      recognition.start();
    },
    [supported]
  );

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  useEffect(() => () => recognitionRef.current?.stop(), []);

  return { supported, listening, start, stop };
}
