# Homepage Animation Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the homepage header, buttons, LinkedIn behavior, intro pacing, terminal typing, and intro skip control.

**Architecture:** Keep the current static-site structure and Anime.js timeline. Add minimal HTML hooks, CSS interaction states, and JavaScript helpers for skip control and typed terminal text without new dependencies.

**Tech Stack:** Static HTML, CSS, browser JavaScript module, Anime.js loaded from `https://esm.sh/animejs@4.4.0`; deployed assets are `css/style.min.css` and `js/index.min.js`.

---

## File Structure

- Modify `index.html`: remove the secondary header name, add intro skip button markup, confirm LinkedIn new-tab attributes.
- Modify `css/style.css`: add subtle lift/glow hover and focus styles, skip button styles, terminal cursor/typing support, reduced-motion coverage.
- Modify `css/style.min.css`: minified copy of `css/style.css`; must match because `index.html` loads it.
- Modify `js/index.js`: add intro state helpers, skip button wiring, typed terminal reveal, and 25% slower timing constants.
- Modify `js/index.min.js`: minified copy of `js/index.js`; must match because `index.html` loads it.

No new files are required for runtime behavior. Do not modify `js/typing.js` or `js/typing.min.js`.

---

### Task 1: HTML hooks and LinkedIn behavior

**Files:**
- Modify: `index.html:57-98`

- [ ] **Step 1: Add skip button markup inside the intro section**

Replace:

```html
    <section class="intro" aria-hidden="true" aria-label="Animated profile signal">
      <div class="handoff-glow"></div>
```

with:

```html
    <section class="intro" aria-hidden="true" aria-label="Animated profile signal">
      <button class="intro-skip" type="button" aria-label="Skip intro animation">×</button>
      <div class="handoff-glow"></div>
```

- [ ] **Step 2: Remove the secondary personal name from the header**

Replace:

```html
        <div class="brand">
          <span class="brand-lockup"><img class="brand-logo" src="img/1334_logo_white.png" alt="" width="28" height="28" /><span class="mark">1334 TECH</span></span>
          <span>Anatolij Prihosko</span>
        </div>
```

with:

```html
        <div class="brand">
          <span class="brand-lockup"><img class="brand-logo" src="img/1334_logo_white.png" alt="" width="28" height="28" /><span class="mark">1334 TECH</span></span>
        </div>
```

- [ ] **Step 3: Confirm LinkedIn opens in a new tab safely**

Keep this anchor exactly as follows:

```html
<a class="button" href="https://www.linkedin.com/in/anatolij-prihosko/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
```

Expected: URL is unchanged, `target="_blank"` is present, and `rel="noopener noreferrer"` is present.

- [ ] **Step 4: Verify HTML manually**

Run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` and inspect the page source.

Expected:
- `.intro-skip` exists inside `.intro`.
- Header brand area only shows `1334 TECH`.
- LinkedIn anchor keeps the approved URL and new-tab attributes.

---

### Task 2: CSS interaction and skip styles

**Files:**
- Modify: `css/style.css:55-66`
- Modify after source update: `css/style.min.css:1`

- [ ] **Step 1: Add skip button and interaction styles to `css/style.css`**

Update the style block around the intro, brand, replay, button, and reduced-motion rules so the following rules exist in `css/style.css`:

```css
.intro-skip{position:absolute;top:clamp(18px,3vw,34px);right:clamp(18px,3vw,34px);z-index:3;width:42px;height:42px;border:1px solid rgba(34,211,238,.5);border-radius:999px;background:rgba(2,6,23,.56);color:var(--ink);cursor:pointer;font-size:26px;line-height:1;display:grid;place-items:center;box-shadow:0 0 28px rgba(34,211,238,.14);backdrop-filter:blur(10px);transition:transform 220ms ease,border-color 220ms ease,box-shadow 220ms ease,background 220ms ease,color 220ms ease}
.brand-lockup,.button,.replay,.intro-skip{will-change:transform;transition:transform 220ms ease,border-color 220ms ease,box-shadow 220ms ease,background 220ms ease,color 220ms ease,filter 220ms ease}
.brand-lockup:hover,.brand-lockup:focus-visible,.button:hover,.button:focus-visible,.replay:hover,.replay:focus-visible,.intro-skip:hover,.intro-skip:focus-visible{transform:translateY(-2px);border-color:rgba(34,211,238,.88);box-shadow:0 0 22px rgba(34,211,238,.34),0 18px 54px rgba(34,211,238,.18);filter:brightness(1.08)}
.button:hover,.button:focus-visible{background:linear-gradient(135deg,rgba(34,211,238,.28),rgba(96,165,250,.16));color:#fff}
.replay:hover,.replay:focus-visible,.intro-skip:hover,.intro-skip:focus-visible{background:rgba(34,211,238,.12);color:#fff}
.brand-lockup:focus-visible,.button:focus-visible,.replay:focus-visible,.intro-skip:focus-visible{outline:2px solid rgba(34,211,238,.9);outline-offset:4px}
.line .typed-text{white-space:pre-wrap}
.line.is-typing .typed-text::after{content:"_";display:inline-block;margin-left:2px;color:var(--cyan);animation:cursorBlink .8s steps(1,end) infinite}
@keyframes cursorBlink{50%{opacity:0}}
```

Notes:
- If inserting into existing compressed-style CSS, keep it near related intro/nav/button/readout rules.
- Preserve existing `.brand-lockup::after` sheen animation.
- Do not add large movement, glitching, or scanline effects.

- [ ] **Step 2: Update reduced-motion CSS**

Ensure the existing reduced-motion media query still disables long animation and also prevents the typed cursor from blinking:

```css
@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;scroll-behavior:auto !important;transition-duration:.01ms !important}.intro{display:none !important}.shell{opacity:1 !important;transform:none !important;filter:none !important}.line.is-typing .typed-text::after{display:none}}
```

- [ ] **Step 3: Minify CSS**

Run:

```bash
npx --yes clean-css-cli -o css/style.min.css css/style.css
```

Expected:
- `css/style.min.css` is updated.
- `index.html` still loads `css/style.min.css`.

- [ ] **Step 4: Verify CSS manually**

Run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`, skip or wait for intro, then hover and keyboard-tab through:
- `1334 TECH`
- replay/reload button
- `Connect on LinkedIn`

Expected: each control has a subtle lift and cyan glow on hover/focus, with no layout shift.

---

### Task 3: JavaScript intro skip, pacing, and typed terminal reveal

**Files:**
- Modify: `js/index.js:3-160`
- Modify after source update: `js/index.min.js:1`

- [ ] **Step 1: Add intro state variables after current intro globals**

After:

```js
let animeApi = null;
```

add:

```js
let activeTimeline = null;
let introCleanupTimer = null;
let introRunId = 0;
const INTRO_SPEED = 1.25;
```

- [ ] **Step 2: Add helper functions before `resetIntroText()`**

Insert these functions before the existing `function resetIntroText() {`:

```js
function scaled(duration) {
  return Math.round(duration * INTRO_SPEED);
}

function clearIntroTimers() {
  if (introCleanupTimer) {
    window.clearTimeout(introCleanupTimer);
    introCleanupTimer = null;
  }
}

function stopActiveTimeline() {
  if (!activeTimeline) return;
  if (typeof activeTimeline.pause === 'function') activeTimeline.pause();
  if (typeof activeTimeline.cancel === 'function') activeTimeline.cancel();
  activeTimeline = null;
}

function finishIntro() {
  clearIntroTimers();
  stopActiveTimeline();
  document.querySelectorAll('.line.is-typing').forEach((line) => line.classList.remove('is-typing'));
  document.querySelectorAll('.line [data-full-text]').forEach((span) => {
    span.textContent = span.dataset.fullText || span.textContent;
  });
  applyFailOpenState();
}

function wireSkipButton(container) {
  const skip = container?.querySelector('.intro-skip');
  if (!skip) return;
  skip.addEventListener('click', finishIntro, { once: true });
}

function prepareTerminalTyping() {
  document.querySelectorAll('.line span:nth-child(2)').forEach((span) => {
    const text = span.dataset.fullText || span.textContent;
    span.dataset.fullText = text;
    span.classList.add('typed-text');
    span.textContent = '';
  });
}

function typeTerminalLines(runId) {
  const lines = Array.from(document.querySelectorAll('.line'));
  if (reduceMotion) {
    lines.forEach((line) => {
      const span = line.querySelector('.typed-text');
      if (span) span.textContent = span.dataset.fullText || '';
    });
    return;
  }
  lines.forEach((line, lineIndex) => {
    const span = line.querySelector('.typed-text');
    if (!span) return;
    const text = span.dataset.fullText || '';
    span.textContent = '';
    window.setTimeout(() => {
      if (runId !== introRunId) return;
      line.classList.add('is-typing');
      let charIndex = 0;
      const tick = () => {
        if (runId !== introRunId) return;
        span.textContent = text.slice(0, charIndex);
        charIndex += 1;
        if (charIndex <= text.length) {
          window.setTimeout(tick, 24);
          return;
        }
        line.classList.remove('is-typing');
      };
      tick();
    }, lineIndex * 170);
  });
}
```

- [ ] **Step 3: Wire skip button in `ensureIntro()`**

Replace the whole function with:

```js
function ensureIntro() {
  intro = document.querySelector('.intro');
  if (intro) {
    wireSkipButton(intro);
    return intro;
  }
  intro = document.createElement('section');
  intro.className = 'intro';
  intro.setAttribute('aria-hidden', 'true');
  intro.setAttribute('aria-label', introLabel);
  intro.innerHTML = introMarkup;
  document.body.prepend(intro);
  wireSkipButton(intro);
  return intro;
}
```

- [ ] **Step 4: Make `applyFailOpenState()` produce final terminal text**

Replace the existing `applyFailOpenState()` with:

```js
function applyFailOpenState() {
  if (intro) {
    intro.remove();
    intro = null;
  }
  document.querySelectorAll('.line.is-typing').forEach((line) => line.classList.remove('is-typing'));
  document.querySelectorAll('.line [data-full-text]').forEach((span) => {
    span.textContent = span.dataset.fullText || span.textContent;
  });
  if (!shell) return;
  shell.style.opacity = '1';
  shell.style.transform = 'none';
  shell.style.filter = 'none';
}
```

- [ ] **Step 5: Update the start of `runIntro()`**

Inside `runIntro()`, immediately after the `if (!shell || !currentIntro) return;` line, add:

```js
  introRunId += 1;
  const runId = introRunId;
  clearIntroTimers();
  stopActiveTimeline();
  wireSkipButton(currentIntro);
  prepareTerminalTyping();
```

- [ ] **Step 6: Slow timeline durations by 25%**

In `runIntro()`, wrap numeric `duration` values in timeline animation objects with `scaled(...)`. Examples:

```js
duration: scaled(980)
duration: scaled(220)
duration: scaled(460)
duration: scaled(760)
```

Update every `duration:` value in the timeline from `tl.add('.loader-ring'...)` through `tl.add('.footer'...)`. Do not wrap non-duration values such as stagger ranges, `revealDelay`, `settleDuration`, `revealRate`, translate values, scale values, or timeout delays unless they are explicitly `duration` properties.

Expected examples after edit:

```js
tl.add('.loader-ring', { opacity: [0, .88], rotate: [0, 270], scale: [.8, 1.02], duration: scaled(980), ease: 'inOutSine' });
tl.add('.intro-grid', { opacity: { to: 1, duration: scaled(220), ease: 'linear' }, translateY: [12, 0], scale: [{ from: .94, to: 1, duration: scaled(980), ease: 'out(3)' }] }, '<<+=120');
```

- [ ] **Step 7: Store active timeline and type terminal lines when readout appears**

After:

```js
  const tl = createTimeline();
```

add:

```js
  activeTimeline = tl;
```

Replace the existing `.line` reveal timeline line:

```js
  tl.add('.line', { opacity: [0, 1], translateX: [12, 0], duration: 260, ease: 'out(3)' }, stagger(70, { start: '<+=160' }));
```

with:

```js
  tl.add('.line', { opacity: [0, 1], translateX: [12, 0], duration: scaled(325), ease: 'out(3)', onBegin: () => typeTerminalLines(runId) }, stagger(88, { start: '<+=200' }));
```

- [ ] **Step 8: Update intro cleanup timeout**

Replace:

```js
  window.setTimeout(() => { const current = document.querySelector('.intro'); if (current) current.remove(); }, 7000);
```

with:

```js
  introCleanupTimer = window.setTimeout(() => {
    if (runId !== introRunId) return;
    const current = document.querySelector('.intro');
    if (current) current.remove();
    activeTimeline = null;
  }, scaled(7000));
```

- [ ] **Step 9: Minify JavaScript**

Run:

```bash
npx --yes terser js/index.js -c -m -o js/index.min.js
```

Expected:
- `js/index.min.js` is updated.
- `index.html` still loads `js/index.min.js`.

- [ ] **Step 10: Verify JavaScript manually**

Run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

Expected:
- Intro plays without console errors.
- Intro feels slightly slower than before.
- The terminal readout text appears typed instead of instantly fully visible.
- Clicking the `×` button immediately shows the final page and no later animation changes the page.
- Clicking replay starts the intro again and the skip button works again.

---

### Task 4: Final verification and cleanup

**Files:**
- Inspect: `index.html`
- Inspect: `css/style.css`
- Inspect: `css/style.min.css`
- Inspect: `js/index.js`
- Inspect: `js/index.min.js`

- [ ] **Step 1: Check git diff**

Run:

```bash
git diff -- index.html css/style.css css/style.min.css js/index.js js/index.min.js
```

Expected:
- Only requested UI and animation changes are present.
- No changes to `CNAME`, vendored Typed.js files, or unrelated content.

- [ ] **Step 2: Serve site for final browser pass**

Run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` and check browser console.

Expected:
- No runtime JavaScript errors.
- Header top-left no longer contains `Anatolij Prihosko`.
- `1334 TECH`, replay, and LinkedIn controls lift/glow on hover and focus.
- Intro can be skipped with `×`.
- Replay button reruns intro.
- Terminal readout types in CLI style.
- LinkedIn opens `https://www.linkedin.com/in/anatolij-prihosko/` in a new tab.

- [ ] **Step 3: Confirm source/minified assets are paired**

Run:

```bash
git diff --stat -- css/style.css css/style.min.css js/index.js js/index.min.js
```

Expected:
- Both source files and both minified files changed.
- Minified files are not empty and remain referenced by `index.html`.

- [ ] **Step 4: Do not commit unless explicitly requested**

This repository session is governed by the instruction to commit only when explicitly requested. Leave changes uncommitted and report verification results.

---

## Self-Review

- Spec coverage: all requested items are represented in Tasks 1-4.
- Placeholder scan: no unresolved placeholder text or undefined future work remains in the plan.
- Type/name consistency: helpers use the exact names introduced in Task 3 and referenced later: `scaled`, `clearIntroTimers`, `stopActiveTimeline`, `finishIntro`, `wireSkipButton`, `prepareTerminalTyping`, and `typeTerminalLines`.
