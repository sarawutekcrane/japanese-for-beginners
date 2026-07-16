import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "jfb-settings-v1";

export const SPEECH_RATE_MIN = 0.75;
export const SPEECH_RATE_MAX = 1;
export const SPEECH_RATE_STEP = 0.05;

const DEFAULTS = { showKanji: false, showFurigana: true, speechRate: 0.85 };

function clampSpeechRate(rate) {
  const clamped = Math.min(SPEECH_RATE_MAX, Math.max(SPEECH_RATE_MIN, rate));
  return Math.round(clamped * 100) / 100;
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = { ...DEFAULTS, ...JSON.parse(raw) };
    parsed.speechRate = clampSpeechRate(parsed.speechRate);
    return parsed;
  } catch {
    return DEFAULTS;
  }
}

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const setShowKanji = (showKanji) => setSettings((s) => ({ ...s, showKanji }));
  const setShowFurigana = (showFurigana) => setSettings((s) => ({ ...s, showFurigana }));
  const setSpeechRate = (rate) => setSettings((s) => ({ ...s, speechRate: clampSpeechRate(rate) }));

  return (
    <SettingsContext.Provider value={{ ...settings, setShowKanji, setShowFurigana, setSpeechRate }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
