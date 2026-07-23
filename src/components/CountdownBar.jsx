import { useEffect, useRef } from "react";

export const TIMER_DURATION_DEFAULT = 3;
export const TIMER_DURATION_MIN = 1;
export const TIMER_DURATION_MAX = 10;
// 1 tick/second (not 100ms): ported from the sister English app, confirmed stutter-free on real
// mobile hardware there. The bar's smoothness no longer depends on JS-driven tick frequency at
// all (see CountdownBar below), so there's nothing to gain from ticking faster than this.
export const COUNTDOWN_TICK_MS = 1000;
// The pause after the countdown reaches 0 before the reveal (feedback, highlighting, sound) fires
// — gives "0"/empty a moment to sit on screen before the reveal appears. Matches the sister
// English app's TIMEOUT_REVEAL_DELAY_MS exactly.
export const COUNTDOWN_REVEAL_DELAY_MS = 250;

/**
 * Yellow warning stage kicks in at roughly the halfway point, red at the final second — scaled so
 * it's not tuned only for the default 3s case. Ported exactly from the sister English app's
 * yellowThresholdFor: a pure "halfway" cutoff (duration/2) would never actually show yellow at
 * short durations, since the only ticks below halfway are already claimed by the red "final
 * second" rule (e.g. duration=3's halfway is 1.5, but timeLeft=1 is already red) — the
 * Math.max(2, ...) floor guarantees at least one genuinely yellow tick even at short durations,
 * while long durations still land close to a true halfway split.
 */
export function yellowThresholdFor(duration) {
  return Math.max(2, Math.ceil(duration / 2));
}

/**
 * Long countdown bar shared by every module with a timed-answer feature (originally built for
 * Listening Quiz, real-device-confirmed stutter-free — reused as-is rather than reimplemented so
 * every consumer gets the same proven behavior and any future fix only needs to happen once).
 *
 * The fill's transform is set imperatively on a ref, and — critically — the effect that sets it
 * depends on [active, answered, durationMs], NOT on the ticking timeLeft value. That means the
 * transform is written exactly once per phase (countdown starts / learner answers or times out /
 * countdown resets for a new question), never once per tick. When it starts, ONE continuous CSS
 * transition spanning the entire duration is kicked off (`transform ${duration}s linear`) that
 * drains the bar smoothly start-to-finish in the browser's own compositor, needing zero further JS
 * involvement — the once-per-second setState in the consuming module only ever touches the plain
 * integer text and the (rare, threshold-crossing-only) color-stage class, not this transform.
 * Freezing (early answer or timeout) captures how far the animation has *actually* visually
 * progressed from elapsed wall-clock time since it started, then snaps instantly (no transform
 * transition, only `background-color` is ever CSS-transitioned) to that exact point, so it can
 * never appear to jump.
 *
 * transform-origin is pinned to the left edge so scaling shrinks the same direction the earlier
 * width-based version did: anchored on the left, receding from the right as time runs out.
 */
export default function CountdownBar({ timeLeft, durationSec, active, answered }) {
  const fillRef = useRef(null);
  const startTimeRef = useRef(null);
  const durationMs = durationSec * 1000;

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    if (!active) {
      // Waiting for the countdown to start, timer toggle off, or freshly reset for a new
      // question: full bar, no transform transition, so a reset never visibly "fills back up" —
      // it's just already full.
      startTimeRef.current = null;
      el.style.transition = "background-color 0.2s ease";
      el.style.transform = "scaleX(1)";
      return;
    }

    if (answered) {
      const elapsedMs = startTimeRef.current === null ? durationMs : Date.now() - startTimeRef.current;
      const remainingFraction = Math.max(0, Math.min(1, 1 - elapsedMs / durationMs));
      el.style.transition = "background-color 0.2s ease";
      el.style.transform = `scaleX(${remainingFraction})`;
      return;
    }

    startTimeRef.current = Date.now();
    el.style.transition = `transform ${durationMs / 1000}s linear, background-color 0.2s ease`;
    el.style.transform = "scaleX(0)";
  }, [active, answered, durationMs]);

  const critical = timeLeft <= 1;
  const warning = !critical && timeLeft <= yellowThresholdFor(durationSec);
  const stage = critical ? "critical" : warning ? "warning" : "normal";

  return (
    <div className={`countdown-wrap countdown-stage-${stage}`} aria-live="polite">
      <div className="countdown-bar-track">
        <div className="countdown-bar-fill" ref={fillRef} />
      </div>
      <span className="countdown-seconds">{timeLeft}</span>
    </div>
  );
}
