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
import { VOCAB_CATEGORIES, getVocab, toCard, sample, shuffle as shuffleArr } from "../utils/content";
import { playCorrect, playIncorrect } from "../utils/sound";
import { usePracticeSession } from "../utils/practiceSession";

function CategoryPicker({ onPick }) {
  return (
    <div className="picker">
      <section className="picker-section">
        <h3 className="picker-heading">📚 เลือกหมวดคำศัพท์</h3>
        <div className="vocab-grid">
          {VOCAB_CATEGORIES.map((c) => (
            <button key={c.id} className="vocab-card" onClick={() => onPick(c)}>
              <span className="vocab-emoji">{c.emoji}</span>
              <span className="vocab-label">{c.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function buildQuestion(pool, answer) {
  const distractors = sample(
    pool.filter((p) => p.id !== answer.id),
    3
  );
  const options = shuffleArr([answer, ...distractors]);
  return { answer, options };
}

// Countdown-start buffer once the question/options have rendered, since this module has no audio
// event to key off (unlike Listening Quiz's "hear example finished" trigger) — matches the same
// ~0.1s scale used there.
const QUESTION_SHOWN_START_DELAY_MS = 100;
const TIMEOUT_SENTINEL = "__timeout__";

function QuizView({ category, onBack }) {
  const { speak } = useSpeak();
  const [shuffleOn, setShuffleOn] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  // Off (default): question in Thai, options in Japanese — original behavior. On: reversed.
  const [directionSwapped, setDirectionSwapped] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDuration, setTimerDuration] = useState(TIMER_DURATION_DEFAULT);
  const [pool] = useState(() => getVocab(category.id).map(toCard));

  const review = usePracticeSession(pool, shuffleOn);
  const activeAnswer = review.current;

  const [selectedId, setSelectedId] = useState(null);

  const question = useMemo(() => (activeAnswer ? buildQuestion(pool, activeAnswer) : null), [pool, activeAnswer]);

  const isCorrect = question && selectedId === question.answer.id;
  const answered = selectedId !== null;
  const finished = review.finished;

  const playOption = (card) => speak(card.audioText);

  const speakTimeoutRef = useRef(null);
  const timeoutRevealTimeoutRef = useRef(null);
  const startTimeoutRef = useRef(null);
  const answeredRef = useRef(answered);
  useEffect(() => {
    answeredRef.current = answered;
  });

  // ---- timed-answer countdown (only active while the "จับเวลา" toggle is on) ----
  // Ported from Listening Quiz's timer (see CountdownBar for the animation strategy that's
  // confirmed stutter-free on real mobile hardware). The only real difference from Listening
  // Quiz: this module is text-based with no "hear example" audio, so the countdown starts a short
  // buffer after the question/options are shown instead of after audio playback finishes.
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

  // Guards against starting the countdown more than once for the same question.
  const hasCountdownStartedRef = useRef(false);
  const timerOnRef = useRef(timerOn);
  useEffect(() => {
    timerOnRef.current = timerOn;
  }, [timerOn]);
  const timerDurationRef = useRef(timerDuration);
  useEffect(() => {
    timerDurationRef.current = timerDuration;
  }, [timerDuration]);

  const resetCountdownForNewQuestion = () => {
    setCountdownActive(false);
    setTimeLeft(timerDuration);
    setActiveDuration(timerDuration);
    clearTimeout(startTimeoutRef.current);
    clearTimeout(timeoutRevealTimeoutRef.current);
  };

  // Starts the countdown (after the short buffer) the first time it's called for the current
  // question — either because the question just rendered (see the [activeAnswer] effect below) or
  // because the timer toggle was just switched on for a question already on screen (see the
  // [timerOn] effect below). A no-op every time after, until hasCountdownStartedRef is reset for
  // the next question. Unlike Listening Quiz, where the countdown-start trigger ("hear example")
  // is always available as a natural next tap regardless of when the toggle was flipped, this
  // module has no such affordance — so toggling on must be able to start it directly, or a learner
  // who enables the timer mid-question would see it never engage until the next question loads.
  //
  // No answeredRef check here in the outer guard (only in the setTimeout below, where it matters):
  // when called from the [activeAnswer] effect, it runs at the exact moment a new question
  // replaces the old one, in the same commit as `setSelectedId(null)` — answeredRef syncs from a
  // separate, dependency-less effect that still reflects the OLD (just-answered) question's state
  // until the next render. Checking it here would read that stale true and permanently skip
  // starting the countdown for the new question, since nothing else would call this again before
  // the question changes once more.
  const maybeStartCountdown = () => {
    if (!timerOnRef.current || hasCountdownStartedRef.current) return;
    hasCountdownStartedRef.current = true;
    clearTimeout(startTimeoutRef.current);
    startTimeoutRef.current = setTimeout(() => {
      if (answeredRef.current) return;
      setTimeLeft(timerDurationRef.current);
      setActiveDuration(timerDurationRef.current);
      setCountdownActive(true);
    }, QUESTION_SHOWN_START_DELAY_MS);
  };

  const handleTimeout = () => {
    if (answeredRef.current) return;
    setSelectedId(TIMEOUT_SENTINEL);
    playIncorrect();
    clearTimeout(speakTimeoutRef.current);
    speakTimeoutRef.current = setTimeout(() => playOption(question.answer), 500);
  };

  useEffect(() => {
    if (timerOn) {
      // Unlike Listening Quiz (where "hear example" is always the natural next tap regardless of
      // toggle state), this module has no other affordance the learner would tap after flipping
      // the switch — so turning it on starts the countdown for whatever question is already on
      // screen, rather than silently doing nothing until the next one loads. maybeStartCountdown
      // is already a guarded no-op if a countdown was already started for this question.
      maybeStartCountdown();
    } else {
      resetCountdownForNewQuestion();
      hasCountdownStartedRef.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);

  useEffect(
    () => () => {
      clearTimeout(speakTimeoutRef.current);
      clearTimeout(startTimeoutRef.current);
      clearTimeout(timeoutRevealTimeoutRef.current);
    },
    []
  );

  useEffect(() => {
    setSelectedId(null);
    resetCountdownForNewQuestion();
    hasCountdownStartedRef.current = false;
    maybeStartCountdown();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnswer]);

  // Countdown ticking: starts once countdownActive flips true and stops — via this effect's own
  // cleanup — the moment the question becomes answered/finished, or countdownActive is reset for
  // a new question.
  useEffect(() => {
    if (!countdownActive || answered || finished) return;
    const intervalId = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, COUNTDOWN_TICK_MS);
    return () => clearInterval(intervalId);
  }, [countdownActive, answered, finished]);

  // Split from the ticking effect above so the zero-detection isn't inside a useState updater
  // function. Schedules the reveal after a short delay so "0" sits on screen for a beat first.
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
    speakTimeoutRef.current = setTimeout(() => playOption(question.answer), 500);
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
        <Toggle label="Romaji" checked={showRomaji} onChange={setShowRomaji} />
        <Toggle emoji="🔁" label="เปลี่ยนภาษา" checked={directionSwapped} onChange={setDirectionSwapped} />
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
          {directionSwapped ? (
            <>
              <p className="th-text quiz-instruction">คำนี้ภาษาไทยแปลว่าอะไร?</p>
              <p className="thai-prompt jp-text">
                <JapaneseText kana={question.answer.display} kanji={question.answer.kanji} />
              </p>
              {showRomaji && <p className="quiz-option-hint">{question.answer.romaji}</p>}
            </>
          ) : (
            <>
              <p className="th-text quiz-instruction">คำนี้ภาษาญี่ปุ่นเรียกว่าอะไร?</p>
              <p className="th-text thai-prompt">{question.answer.thai}</p>
            </>
          )}

          <CountdownBar timeLeft={displayTimeLeft} durationSec={displayDuration} active={countdownStarted} answered={answered} />

          <div className="quiz-options">
            {question.options.map((opt) => {
              let cls = "quiz-option";
              if (answered) {
                if (opt.id === question.answer.id) cls += " correct";
                else if (opt.id === selectedId) cls += " incorrect";
              }
              return (
                <div key={opt.id} className="quiz-option-cell">
                  {directionSwapped ? (
                    <button className={`${cls} th-text`} onClick={() => choose(opt)} disabled={answered}>
                      {opt.thai}
                    </button>
                  ) : (
                    <button className={cls} onClick={() => choose(opt)} disabled={answered}>
                      <JapaneseText className="jp-text" kana={opt.display} kanji={opt.kanji} />
                      {showRomaji && <span className="quiz-option-hint">{opt.romaji}</span>}
                    </button>
                  )}
                  <button
                    type="button"
                    className="option-audio-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      playOption(opt);
                    }}
                    aria-label="ฟังเสียง"
                  >
                    🔊
                  </button>
                </div>
              );
            })}
          </div>

          {answered && (
            <p className={`quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} th-text`}>
              {isCorrect ? "เก่งมาก! ถูกต้อง 🎉" : "ยังไม่ถูกนะ ลองฟังคำตอบที่ถูกต้องดู 💪"}
            </p>
          )}

          {answered && (
            <div className="quiz-actions">
              <button className="btn btn-success btn-sm" onClick={next}>
                ข้อถัดไป →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ThaiToJapaneseQuiz() {
  const [category, setCategory] = useState(null);

  if (!category) return <CategoryPicker onPick={setCategory} />;
  return <QuizView category={category} onBack={() => setCategory(null)} />;
}
