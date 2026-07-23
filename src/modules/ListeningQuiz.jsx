import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import Toggle from "../components/Toggle";
import JapaneseText from "../components/JapaneseText";
import { PracticeProgress, PracticeResults } from "../components/PracticeSessionUI";
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

const TIMER_DURATION_DEFAULT = 3;
const TIMER_DURATION_MIN = 1;
const TIMER_DURATION_MAX = 10;
const COUNTDOWN_TICK_MS = 100;
const COUNTDOWN_REVEAL_DELAY_MS = 100;
const TIMEOUT_SENTINEL = "__timeout__";
// Fraction of the total duration remaining at which the bar moves to each stage — scales with
// whatever duration (1-10s) is configured, rather than fixed absolute seconds, so the pacing feels
// reasonable whether the countdown is short or long.
const COUNTDOWN_WARNING_RATIO = 0.5;
const COUNTDOWN_CRITICAL_RATIO = 0.15;

/**
 * Owns the countdown's own ticking state in an isolated subtree so the 100ms tick's setState only
 * re-renders this small bar/number, not the whole question card (options, audio button, feedback,
 * etc.) — that broader re-render, not the width-vs-transform choice, turned out to be the real
 * source of the remaining mobile jank: 10 re-renders/sec of the entire QuizView tree is much
 * heavier than 10 re-renders/sec of just this tiny component. QuizView drives it imperatively
 * (start/freeze/reset) via this ref instead of holding timeLeftMs itself.
 */
const CountdownBar = forwardRef(function CountdownBar({ durationSec, onTimeout }, ref) {
  const [timeLeftMs, setTimeLeftMs] = useState(null);
  const [instantUpdate, setInstantUpdate] = useState(true);
  const deadlineRef = useRef(null);
  const intervalRef = useRef(null);
  const revealTimeoutRef = useRef(null);
  const onTimeoutRef = useRef(onTimeout);

  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  });

  const stopTimers = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    clearTimeout(revealTimeoutRef.current);
    revealTimeoutRef.current = null;
    deadlineRef.current = null;
  };

  useEffect(() => stopTimers, []);

  useImperativeHandle(
    ref,
    () => ({
      start() {
        const durationMs = durationSec * 1000;
        deadlineRef.current = Date.now() + durationMs;
        setTimeLeftMs(durationMs);
        intervalRef.current = setInterval(() => {
          const remaining = deadlineRef.current - Date.now();
          if (remaining <= 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTimeLeftMs(0);
            revealTimeoutRef.current = setTimeout(() => {
              revealTimeoutRef.current = null;
              onTimeoutRef.current?.();
            }, COUNTDOWN_REVEAL_DELAY_MS);
          } else {
            setTimeLeftMs(remaining);
          }
        }, COUNTDOWN_TICK_MS);
      },
      freeze() {
        stopTimers();
      },
      reset() {
        stopTimers();
        setTimeLeftMs(null);
        setInstantUpdate(true);
      },
    }),
    [durationSec]
  );

  // Re-enables the transition one frame after a reset snaps the bar back to full, so that specific
  // reset never visibly animates, while normal tick-by-tick draining still does.
  useEffect(() => {
    if (!instantUpdate) return;
    const id = requestAnimationFrame(() => setInstantUpdate(false));
    return () => cancelAnimationFrame(id);
  }, [instantUpdate]);

  const durationMs = durationSec * 1000;
  const displayMs = timeLeftMs !== null ? timeLeftMs : durationMs;
  const percent = Math.max(0, Math.min(100, (displayMs / durationMs) * 100));
  const secondsText = Math.ceil(displayMs / 1000);
  const remainingRatio = percent / 100;
  const stage = remainingRatio <= COUNTDOWN_CRITICAL_RATIO ? "critical" : remainingRatio <= COUNTDOWN_WARNING_RATIO ? "warning" : "normal";

  return (
    <div className={`countdown-wrap countdown-stage-${stage}`} aria-live="polite">
      <div className="countdown-bar-track">
        <div
          className={`countdown-bar-fill${instantUpdate ? " countdown-bar-fill-instant" : ""}`}
          style={{ transform: `scaleX(${percent / 100})` }}
        />
      </div>
      <span className="countdown-seconds">{secondsText}</span>
    </div>
  );
});

function QuizView({ selection, onBack }) {
  const { speak } = useSpeak();
  const { speechRate } = useSettings();
  const isKana = selection.kind === "kana";
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDuration, setTimerDuration] = useState(TIMER_DURATION_DEFAULT);
  const countdownBarRef = useRef(null);
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
  const answeredRef = useRef(answered);
  useEffect(() => {
    answeredRef.current = answered;
  });

  // ---- timed-answer countdown (only active while the "จับเวลา" toggle is on) ----
  // The countdown never starts on its own: it starts the moment the first "ended" event fires for
  // the learner's "hear example" tap on the current question (no extra artificial delay is added —
  // see handleAudioEnded for why). Re-tapping to replay the audio afterward must NOT reset it
  // (hasCountdownStartedRef guards that), or a learner could keep tapping replay for unlimited
  // thinking time.
  //
  // The countdown's own ticking (interval, deadline tracking, reveal-delay timeout) now all lives
  // inside CountdownBar so its 100ms setState doesn't re-render this whole question card — see the
  // comment on CountdownBar above. QuizView only drives it imperatively via countdownBarRef and
  // supplies the onTimeout callback, which still needs to be the freshest closure whenever it
  // eventually fires (guarded by answeredRef, same as before).
  const hasCountdownStartedRef = useRef(false);

  const handleAudioEnded = () => {
    if (!timerOn) return;
    if (answeredRef.current) return;
    if (hasCountdownStartedRef.current) return;
    hasCountdownStartedRef.current = true;
    // No artificial delay here: both the pre-recorded kana clips and the browser's speech
    // synthesis already end with a couple hundred ms of trailing silence before this "ended"
    // event fires (confirmed via ffprobe/silencedetect on the kana MP3 pack — ~230ms of silence
    // baked into essentially every clip), so that natural pause already serves as the buffer.
    // Adding another deliberate delay on top just compounded it and made the countdown feel like
    // it started later than intended.
    countdownBarRef.current?.start();
  };

  const handleTimeout = () => {
    if (answeredRef.current) return;
    setSelectedId(TIMEOUT_SENTINEL);
    playIncorrect();
  };

  useEffect(() => {
    if (!timerOn) {
      countdownBarRef.current?.reset();
      hasCountdownStartedRef.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);

  useEffect(
    () => () => {
      clearTimeout(speakTimeoutRef.current);
    },
    []
  );

  useEffect(() => {
    setSelectedId(null);
    setRevealed(false);
    countdownBarRef.current?.reset();
    hasCountdownStartedRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnswer]);

  const choose = (opt) => {
    if (answered) return;
    countdownBarRef.current?.freeze();
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
      <button className="btn btn-outline btn-sm" onClick={onBack}>
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

          <CountdownBar ref={countdownBarRef} durationSec={timerDuration} onTimeout={handleTimeout} />

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
