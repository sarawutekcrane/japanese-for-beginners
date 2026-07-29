import { useEffect, useMemo, useRef, useState } from "react";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import { PracticeProgress, PracticeResults } from "../components/PracticeSessionUI";
import CountdownBar, {
  TIMER_DURATION_DEFAULT,
  TIMER_DURATION_MIN,
  TIMER_DURATION_MAX,
  COUNTDOWN_TICK_MS,
  COUNTDOWN_REVEAL_DELAY_MS,
} from "../components/CountdownBar";
import { useSpeak } from "../hooks/useSpeech";
import { useSettings } from "../context/SettingsContext";
import { VOCAB_CATEGORIES, getKanaCombinedDeck, getVocab, toCard, sample, shuffle as shuffleArr } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import { playKanaAudio } from "../utils/kanaAudio";
import { usePracticeSession } from "../utils/practiceSession";

function PoolPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">あ / ア ตัวอักษร (Characters)</h3>
        <div className="picker-row">
          <button className="btn btn-outline btn-sm" onClick={() => onPick({ kind: "kana", script: "hiragana", label: "Hiragana (ครบทุกกลุ่ม)" })}>
            あ Hiragana
          </button>
          <button className="btn btn-outline blue btn-sm" onClick={() => onPick({ kind: "kana", script: "katakana", label: "Katakana (ครบทุกกลุ่ม)" })}>
            ア Katakana
          </button>
        </div>
      </section>
      <section className="picker-section">
        <h3 className="picker-heading">📚 คำศัพท์ (Vocabulary)</h3>
        <div className="vocab-grid">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="vocab-card" onClick={() => onPick({ kind: "vocab", category: c.id, label: c.label })}>
              <span className="vocab-emoji">{c.emoji}</span>
              <span className="vocab-label">{c.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

/** Kana mode: plain random distractors — options are the characters themselves,
 * so there's no Thai text to keep distinct. */
function buildKanaQuestion(pool, answer) {
  const distractors = sample(
    pool.filter((p) => p.id !== answer.id),
    3
  );
  const options = shuffleArr([answer, ...distractors]);
  return { answer, options };
}

/** Vocab mode: distractors' Thai translations must be distinct from every other
 * option's (falls back to allowing a duplicate only if the pool is too small to
 * find 3 unique ones), since the options themselves ARE the Thai text. */
function buildVocabQuestion(pool, answer) {
  const candidates = shuffleArr(pool.filter((p) => p.id !== answer.id));
  const seenThai = new Set([answer.thai]);
  const distractors = [];
  for (const cand of candidates) {
    if (distractors.length === 3) break;
    if (seenThai.has(cand.thai)) continue;
    seenThai.add(cand.thai);
    distractors.push(cand);
  }
  for (const cand of candidates) {
    if (distractors.length === 3) break;
    if (!distractors.includes(cand)) distractors.push(cand);
  }
  const options = shuffleArr([answer, ...distractors]);
  return { answer, options };
}

const TIMEOUT_SENTINEL = "__timeout__";

function QuizView({ selection, onBack }) {
  const { speak } = useSpeak();
  const { speechRate } = useSettings();
  const isKana = selection.kind === "kana";
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDuration, setTimerDuration] = useState(TIMER_DURATION_DEFAULT);
  const [pool] = useState(() => {
    const raw = isKana ? getKanaCombinedDeck(selection.script) : getVocab(selection.category);
    return raw.map(toCard);
  });

  const review = usePracticeSession(pool, shuffleOn);
  const activeAnswer = review.current;

  const [selectedId, setSelectedId] = useState(null);

  const question = useMemo(
    () => (activeAnswer ? (isKana ? buildKanaQuestion(pool, activeAnswer) : buildVocabQuestion(pool, activeAnswer)) : null),
    [pool, activeAnswer, isKana]
  );

  const isCorrect = question && selectedId === question.answer.id;
  const answered = selectedId !== null;
  const finished = review.finished;

  // Auto-reveal the Japanese reading on a correct answer, as if the Romaji
  // toggle/reveal button were switched on (kana mode only).
  const effectiveShowRomaji = showRomaji || (answered && isCorrect);
  const effectiveRevealed = revealed || (answered && isCorrect);

  const play = (onDone) => {
    const answer = question.answer;
    if (answer.kind === "kana") {
      playKanaAudio(answer.script, answer, {
        rate: speechRate,
        onFallback: () => speak(answer.audioText, { onEnd: onDone }),
        onEnd: onDone,
      });
    } else {
      speak(answer.audioText, { onEnd: onDone });
    }
  };

  const speakTimeoutRef = useRef(null);
  const timeoutRevealTimeoutRef = useRef(null);
  const answeredRef = useRef(answered);
  useEffect(() => {
    answeredRef.current = answered;
  });

  // ---- timed-answer countdown (only active while the "จับเวลา" toggle is on) ----
  // Ported wholesale from the sister English app's ListeningQuiz (see CountdownBar's comment for
  // why): timeLeft is now a plain whole-seconds integer ticking once/second, kept directly in this
  // component's own state rather than isolated behind a ref — that isolation from the previous
  // session turned out not to be what actually fixes the stutter; the real fix is CountdownBar
  // never touching its expensive transform on a per-tick basis, which holds regardless of where
  // timeLeft's state lives. A once-per-second re-render of this whole question card is cheap.
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION_DEFAULT);
  const [countdownActive, setCountdownActive] = useState(false);
  // Snapshot of timerDuration taken at the moment THIS question's countdown actually started —
  // the stepper can still be adjusted while a countdown is running (applies "from the next start
  // onward"), but the bar/number must keep dividing by the duration it actually started counting
  // down from, not whatever the stepper currently reads.
  const [activeDuration, setActiveDuration] = useState(TIMER_DURATION_DEFAULT);
  const countdownStarted = timerOn && countdownActive;
  const displayTimeLeft = countdownStarted ? timeLeft : timerDuration;
  const displayDuration = countdownStarted ? activeDuration : timerDuration;

  // Guards against a replay of "hear example" restarting the countdown — set once the countdown
  // has been triggered for the CURRENT question, reset at every question-change reset point below.
  const hasCountdownStartedRef = useRef(false);
  const timerOnRef = useRef(timerOn);
  useEffect(() => {
    timerOnRef.current = timerOn;
  }, [timerOn]);
  const timerDurationRef = useRef(timerDuration);
  useEffect(() => {
    timerDurationRef.current = timerDuration;
  }, [timerDuration]);

  const handleAudioEnded = () => {
    // No artificial delay here: the pre-recorded kana clips have ~230ms of trailing silence baked
    // in (confirmed via ffprobe/silencedetect), and the Web Speech API's utterances have their own
    // well-known onend latency after audible speech actually stops — either way, that natural
    // pause already serves as the buffer, so starting the instant "ended" fires (no extra delay
    // added on top) is what actually feels snappy.
    if (!timerOnRef.current || hasCountdownStartedRef.current || answeredRef.current) return;
    hasCountdownStartedRef.current = true;
    setTimeLeft(timerDurationRef.current);
    setActiveDuration(timerDurationRef.current);
    setCountdownActive(true);
  };

  const handleTimeout = () => {
    if (answeredRef.current) return;
    setSelectedId(TIMEOUT_SENTINEL);
    playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(play, 500);
  };

  const resetCountdownForNewQuestion = () => {
    setCountdownActive(false);
    setTimeLeft(timerDuration);
    setActiveDuration(timerDuration);
    hasCountdownStartedRef.current = false;
    clearTimeout(timeoutRevealTimeoutRef.current);
  };

  useEffect(() => {
    if (!timerOn) resetCountdownForNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);

  useEffect(
    () => () => {
      clearTimeout(speakTimeoutRef.current);
      clearTimeout(timeoutRevealTimeoutRef.current);
    },
    []
  );

  useEffect(() => {
    setSelectedId(null);
    setRevealed(false);
    resetCountdownForNewQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnswer]);

  // Countdown ticking: starts once countdownActive flips true (from handleAudioEnded) and stops —
  // via this effect's own cleanup — the moment the question becomes answered/finished, or
  // countdownActive is reset for a new question. No lingering interval can ever fire into a
  // question the learner has already left.
  useEffect(() => {
    if (!countdownActive || answered || finished) return;
    const intervalId = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, COUNTDOWN_TICK_MS);
    return () => clearInterval(intervalId);
  }, [countdownActive, answered, finished]);

  // Split from the ticking effect above so the zero-detection isn't inside a useState updater
  // function (React's Strict Mode can invoke updater functions twice in dev to check for purity,
  // which would double-fire the scheduled reveal if this lived inside setTimeLeft's callback).
  // Schedules the reveal after a short delay rather than firing it immediately, so "0" sits on
  // screen for a beat first. timeLeft only ever transitions TO 0 once per question (further ticks
  // clamp at the same value), so this won't re-schedule a second reveal.
  useEffect(() => {
    if (!countdownActive || answered || finished) return;
    if (timeLeft === 0) {
      clearTimeout(timeoutRevealTimeoutRef.current);
      timeoutRevealTimeoutRef.current = setTimeout(handleTimeout, COUNTDOWN_REVEAL_DELAY_MS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const choose = (opt) => {
    if (answered) return;
    // A genuine tap always wins over any in-flight timeout-reveal grace delay.
    clearTimeout(timeoutRevealTimeoutRef.current);
    setSelectedId(opt.id);
    if (opt.id === question.answer.id) playCorrect();
    else playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(play, 500);
  };

  const next = () => {
    clearTimeout(speakTimeoutRef.current);
    review.submit(isCorrect);
  };

  const restart = () => {
    review.restart();
  };

  return (
    <div className="quiz-view">
      <button className="btn btn-outline btn-sm" onClick={onBack} data-swipe-back="true">
        ← เปลี่ยนหมวดหมู่
      </button>

      <PracticeProgress current={review.answeredCount} total={review.totalCount} correct={review.correctCount} />

      <div className="toggle-group blue">
        <Toggle emoji="🔀" label="สุ่ม" checked={shuffleOn} onChange={setShuffleOn} />
        {isKana && <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />}
        <Toggle emoji="⏱️" label="จับเวลา" checked={timerOn} onChange={setTimerOn} />
      </div>

      {timerOn && (
        <div className="speed-control">
          <span className="toggle-label th-text">⏱️ เวลานับถอยหลัง</span>
          <div className="speed-stepper">
            <button
              type="button"
              className="speed-btn"
              onClick={() => setTimerDuration((d) => Math.max(TIMER_DURATION_MIN, d - 1))}
              disabled={timerDuration <= TIMER_DURATION_MIN}
              aria-label="ลดเวลา"
            >
              −
            </button>
            <span className="speed-value">{timerDuration} วิ</span>
            <button
              type="button"
              className="speed-btn"
              onClick={() => setTimerDuration((d) => Math.min(TIMER_DURATION_MAX, d + 1))}
              disabled={timerDuration >= TIMER_DURATION_MAX}
              aria-label="เพิ่มเวลา"
            >
              +
            </button>
          </div>
        </div>
      )}

      {finished ? (
        <div className="quiz-card">
          <PracticeResults
            correct={review.correctCount}
            total={review.totalCount}
            celebration="เก่งมาก! คุณตอบถูกครบทุกคำในชุดนี้แล้ว 🎉🌸"
            onRetryWrong={review.startRetryRound}
            onRestart={restart}
          />
        </div>
      ) : (
        <div className="quiz-card">
          <button className="btn btn-round btn-blue" onClick={() => play(handleAudioEnded)} aria-label="เล่นเสียง">
            🔊
          </button>
          <p className="th-text quiz-instruction">
            {isKana ? "ฟังเสียงแล้วเลือกตัวอักษรที่ตรงกัน" : "ฟังเสียงแล้วเลือกคำแปลที่ตรงกัน"}
          </p>

          <CountdownBar timeLeft={displayTimeLeft} durationSec={displayDuration} active={countdownStarted} answered={answered} />

          <div className="quiz-options">
            {question.options.map((opt) => {
              let cls = "quiz-option";
              if (answered) {
                if (opt.id === question.answer.id) cls += " correct";
                else if (opt.id === selectedId) cls += " incorrect";
              }
              return isKana ? (
                <button key={opt.id} className={cls} onClick={() => choose(opt)} disabled={answered}>
                  <JapaneseText className="jp-text" kana={opt.display} kanji={opt.kanji} />
                  {effectiveShowRomaji && <span className="quiz-option-hint">{opt.romaji}</span>}
                </button>
              ) : (
                <button key={opt.id} className={`${cls} th-text`} onClick={() => choose(opt)} disabled={answered}>
                  {opt.thai}
                </button>
              );
            })}
          </div>

          {answered && (
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "เก่งมาก! ถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองฟังใหม่อีกครั้ง 💪"}
            </p>
          )}

          {isKana ? (
            effectiveRevealed && (
              <p className="quiz-reveal jp-text">
                เฉลย: <JapaneseText kana={question.answer.display} kanji={question.answer.kanji} />
                {question.answer.romaji ? ` (${question.answer.romaji})` : ""}
              </p>
            )
          ) : (
            answered && (
              <p className="quiz-reveal jp-text">
                เฉลย: <JapaneseText kana={question.answer.display} kanji={question.answer.kanji} />
                {question.answer.romaji ? ` (${question.answer.romaji})` : ""}
              </p>
            )
          )}

          <div className="quiz-actions">
            {isKana && (
              <button className="btn btn-outline btn-sm" onClick={() => setRevealed(true)}>
                เฉลยคำตอบ
              </button>
            )}
            {answered && (
              <button className="btn btn-success btn-sm" onClick={next}>
                ข้อถัดไป →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ListeningQuiz() {
  const [selection, setSelection] = useState(null);

  if (!selection) return <PoolPicker onPick={setSelection} />;
  return <QuizView selection={selection} onBack={() => setSelection(null)} />;
}
