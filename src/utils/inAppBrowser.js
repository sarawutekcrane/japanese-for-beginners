/**
 * Registry of in-app browser WebViews known to not reliably support the Web
 * Speech API's SpeechRecognition (confirmed for LINE via user reports; FBAN/FBAV
 * and Instagram are included as other common culprits with the same limitation).
 * Adding a new one later is just another entry — nothing else needs to change.
 *
 * LINE's `openExternalBrowser=1` query parameter is documented, LINE-specific
 * behavior: appending it to the current URL and navigating there makes LINE
 * reopen that URL in the device's default system browser instead of its own
 * in-app WebView. Verified against LINE's own official documentation summary
 * and current third-party technical write-ups (LINE's developer docs pages
 * themselves returned HTTP 403 to automated fetches during this work, so the
 * exact wording could not be quoted verbatim) — not purely folklore, but not a
 * verbatim doc citation either.
 */
const IN_APP_BROWSERS = [
  {
    id: "line",
    name: "LINE",
    test: (ua) => /\bLine\//i.test(ua),
    openExternally: () => {
      const url = new URL(window.location.href);
      url.searchParams.set("openExternalBrowser", "1");
      window.location.href = url.toString();
    },
  },
  {
    id: "facebook",
    name: "Facebook",
    test: (ua) => /FBAN|FBAV/.test(ua),
  },
  {
    id: "instagram",
    name: "Instagram",
    test: (ua) => /Instagram/i.test(ua),
  },
];

/** Returns the matching in-app-browser registry entry for the given user agent, or null. */
export function detectInAppBrowser(ua = typeof navigator !== "undefined" ? navigator.userAgent : "") {
  return IN_APP_BROWSERS.find((b) => b.test(ua)) || null;
}
