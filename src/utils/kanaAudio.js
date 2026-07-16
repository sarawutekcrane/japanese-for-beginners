/**
 * Pre-generated MP3 lookup for hiragana/katakana character audio.
 * Files live in public/audio/<script>/<file>.mp3 (see scripts/generate_kana_audio.py).
 * Falls back to the Web Speech API caller-provided callback if a file is
 * missing or fails to load, so the app still works before the audio pack
 * has been generated and committed.
 */

/** Derives the expected audio filename (no extension) for a kana entry. */
export function kanaAudioFile({ id, romaji }) {
  if (id.endsWith("-sokuon")) return "sokuon";
  return romaji.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Plays a kana character's pre-generated MP3; calls onFallback if it can't. */
export function playKanaAudio(script, entry, { onFallback } = {}) {
  const file = kanaAudioFile(entry);
  const src = `${import.meta.env.BASE_URL}audio/${script}/${file}.mp3`;
  const audio = new Audio(src);
  let handled = false;
  const fallback = () => {
    if (handled) return;
    handled = true;
    onFallback?.();
  };
  audio.addEventListener("error", fallback);
  audio.play().catch(fallback);
}
