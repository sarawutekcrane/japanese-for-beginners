import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "jfb-settings-v1";

const DEFAULTS = { showKanji: false, showFurigana: true };

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
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

  return (
    <SettingsContext.Provider value={{ ...settings, setShowKanji, setShowFurigana }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
