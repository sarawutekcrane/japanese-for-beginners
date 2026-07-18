import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "jfb-settings-v1";

export const SPEECH_RATE_MIN = 0.75;
export const SPEECH_RATE_MAX = 1;
export const SPEECH_RATE_STEP = 0.05;

const DEFAULT_SPEECH_RATE = 0.85;

function clampSpeechRate(rate) {
  const clamped = Math.min(SPEECH_RATE_MAX, Math.max(SPEECH_RATE_MIN, rate));
  return Math.round(clamped * 100) / 100;
}

function loadSpeechRate() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SPEECH_RATE;
    const parsed = JSON.parse(raw);
    return clampSpeechRate(parsed.speechRate ?? DEFAULT_SPEECH_RATE);
  } catch {
    return DEFAULT_SPEECH_RATE;
  }
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [showKanji, setShowKanji] = useState(false);
  const [showFurigana, setShowFurigana] = useState(true);
  const [speechRate, setSpeechRateRaw] = useState(loadSpeechRate);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ speechRate }));
  }, [speechRate]);

  const setSpeechRate = (rate) => setSpeechRateRaw(clampSpeechRate(rate));

  return (
    <SettingsContext.Provider
      value={{ showKanji, setShowKanji, showFurigana, setShowFurigana, speechRate, setSpeechRate }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
