#!/usr/bin/env python3
"""
Generates one MP3 per hiragana/katakana character used by the app, using
gTTS (Google Text-to-Speech). Run this on a machine with internet access -
it will NOT work inside a sandboxed environment that blocks
translate.google.com.

Usage:
    pip install gTTS
    python3 scripts/generate_kana_audio.py

Output:
    public/audio/hiragana/<file>.mp3
    public/audio/katakana/<file>.mp3

The filename scheme must match src/utils/kanaAudio.js's kanaAudioFile():
  - romaji, lowercased, with anything that isn't a-z0-9 stripped
    (e.g. "a" -> a.mp3, "kya" -> kya.mp3)
  - the sokuon entry (っ/ッ, whose romaji is a placeholder) -> sokuon.mp3
Characters that share a romaji reading (ん appears as both a seion and a
hatsuon entry; じ/ぢ and ず/づ are pronounced identically) intentionally
share one audio file - this script generates each filename once.
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data"
OUT = ROOT / "public" / "audio"


def kana_audio_file(entry):
    if entry["id"].endswith("-sokuon"):
        return "sokuon"
    return re.sub(r"[^a-z0-9]", "", entry["romaji"].lower())


def main():
    try:
        from gtts import gTTS
    except ImportError:
        print("gTTS is not installed. Run: pip install gTTS", file=sys.stderr)
        sys.exit(1)

    total_generated = 0
    total_skipped = 0
    total_failed = 0

    for script in ("hiragana", "katakana"):
        entries = json.loads((DATA / f"{script}.json").read_text(encoding="utf-8"))
        out_dir = OUT / script
        out_dir.mkdir(parents=True, exist_ok=True)

        seen_files = set()
        print(f"\n=== {script} ({len(entries)} entries) ===")
        for entry in entries:
            filename = kana_audio_file(entry)
            if filename in seen_files:
                continue
            seen_files.add(filename)

            dest = out_dir / f"{filename}.mp3"
            if dest.exists():
                total_skipped += 1
                continue

            try:
                gTTS(text=entry["char"], lang="ja").save(str(dest))
                print(f"  {entry['char']}  ->  {dest.relative_to(ROOT)}")
                total_generated += 1
            except Exception as exc:  # noqa: BLE001 - report and keep going
                print(f"  FAILED: {entry['char']} ({filename}): {exc}", file=sys.stderr)
                total_failed += 1

    print(f"\nDone. Generated {total_generated}, skipped {total_skipped} (already existed), failed {total_failed}.")
    if total_failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
