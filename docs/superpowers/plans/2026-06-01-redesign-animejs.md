# Anime.js Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current GitHub Pages site with the approved one-page Anime.js cyber bio experience from `docs/previews/redesign-animejs/index.html`.

**Architecture:** Keep the production site as plain static files: `index.html` for markup and CDN imports, `css/style.css` for all presentation, and `js/index.js` for Anime.js timeline, starfield generation, replay behavior, and mouse parallax. Keep deployed minified pairs in sync manually because the repo has no build/minification pipeline.

**Tech Stack:** Static HTML/CSS/JavaScript, Anime.js via `https://esm.sh/animejs`, Google Fonts, GitHub Pages, no package manager.

---

## File Structure

- Modify `index.html`: replace current multi-section CV/Three.js page with the approved one-page landing markup; load `css/style.min.css` and `js/index.min.js`; remove unused GSAP, Three.js, Marked, import map, and cv.md runtime dependencies.
- Modify `css/style.css`: production stylesheet based on the approved preview styles; includes responsive layout, starfield/grid/background, intro, hero, terminal panel, replay control, reduced-motion rules.
- Modify `css/style.min.css`: minified equivalent of `css/style.css`.
- Modify `js/index.js`: production JavaScript based on the approved preview script; imports Anime.js, generates stars, handles damped pointer parallax, runs/replays intro timeline, supports reduced motion.
- Modify `js/index.min.js`: minified equivalent of `js/index.js`.
- Keep `docs/previews/redesign-animejs/` as archived preview source for reference.
- Keep `img/1334_logo_white.png` as the header brand logo.

## Task 1: Production HTML Shell

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace the document shell**

Use this structure in `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>1334 TECH — Anatolij Prihosko</title>
    <meta name="description" content="Anatolij Prihosko — senior web developer turning complex commerce, API, and product-data systems into reliable production workflows." />
    <meta name="keywords" content="Anatolij Prihosko,1334 TECH,senior web developer,complex systems,eCommerce,API integrations,PIM,product data" />
    <meta name="author" content="Anatolij Prihosko" />
    <meta property="og:title" content="1334 TECH — Anatolij Prihosko" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://1334.tech" />
    <meta property="og:image" content="https://1334.tech/img/thumbnail.jpg" />
    <meta property="og:description" content="Complex systems, made reliable. Senior web development for commerce, integrations, and product data workflows." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/style.min.css" />
  </head>
  <body>
    <div class="scene" aria-hidden="true">
      <div class="starfield"></div>
      <div class="ribbon ribbon-a"></div>
      <div class="ribbon ribbon-b"></div>
      <div class="code-rain">
        <span style="left:8%;animation-delay:-1s">0101 API 1100</span>
        <span style="left:18%;animation-delay:-5s">PIM 0011 SYS</span>
        <span style="left:31%;animation-delay:-2.8s">FLOW 1010</span>
        <span style="left:47%;animation-delay:-7s">SYNC 0110</span>
        <span style="left:64%;animation-delay:-3.6s">QUEUE 0101</span>
        <span style="left:82%;animation-delay:-6.2s">DATA 1110</span>
      </div>
      <div class="orb orb-a"></div>
      <div class="orb orb-b"></div>
      <div class="orb orb-c"></div>
      <svg class="network" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="strokeA" x1="0" x2="1">
            <stop stop-color="#22d3ee" stop-opacity=".18" />
            <stop offset=".55" stop-color="#60a5fa" stop-opacity=".62" />
            <stop offset="1" stop-color="#a78bfa" stop-opacity=".18" />
          </linearGradient>
        </defs>
        <path d="M90 240 C 260 80 370 170 510 270 S 780 420 900 260 S 1170 80 1350 260" fill="none" stroke="url(#strokeA)" stroke-width="3" />
        <path d="M40 650 C 220 520 360 600 520 704 S 810 820 960 610 S 1180 440 1410 610" fill="none" stroke="url(#strokeA)" stroke-width="2" />
        <path d="M260 70 C 390 230 420 370 600 430 S 900 510 1040 380 S 1260 280 1420 390" fill="none" stroke="url(#strokeA)" stroke-width="2" />
        <circle cx="510" cy="270" r="7" fill="#22d3ee" />
        <circle cx="900" cy="260" r="6" fill="#60a5fa" />
        <circle cx="520" cy="704" r="6" fill="#34d399" />
        <circle cx="960" cy="610" r="7" fill="#22d3ee" />
        <circle cx="1040" cy="380" r="5" fill="#a78bfa" />
      </svg>
      <div class="packet"></div>
      <div class="packet packet-b"></div>
    </div>

    <section class="intro" aria-label="Animated profile signal">
      <div class="loader-ring"></div>
      <div class="slide intro-grid">
        <div class="row"><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p><p class="center">Signal</p><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p><p>Signal</p></div>
        <div class="row"><p>Signal</p><p>Signal</p></div>
      </div>
      <div class="slide matrix">
        <div class="row"><p>0101 0011</p><p>1110 0100</p><p>0011 1001</p></div>
        <div class="row"><p>commerce</p><p>api</p><p>pim</p><p>systems</p></div>
        <div class="row"><p>routing</p><p>normalizing</p><p>monitoring</p></div>
        <div class="row"><p>production</p><p>reliability</p><p>handoffs</p></div>
      </div>
      <div class="slide features">
        <div class="row"><p>Commerce</p><p>Systems</p></div>
        <div class="row"><p>APIs</p><p>Automation</p><p>Reliability</p></div>
        <div class="row"><p>PIM</p><p>Product Data</p><p>Delivery</p></div>
        <div class="row"><p>Frontend</p><p>Backend</p><p>Operations</p></div>
      </div>
      <div class="slide final-slide"><p class="final-signal">ANATOLIJ PRIHOSKO</p></div>
    </section>

    <main class="shell">
      <nav class="nav floaty" data-depth="18" aria-label="Site header">
        <div class="brand">
          <span class="brand-lockup"><img class="brand-logo" src="img/1334_logo_white.png" alt="" width="28" height="28" /><span class="mark">1334 TECH</span></span>
          <span>Anatolij Prihosko</span>
        </div>
        <button class="replay" type="button" aria-label="Replay signal animation" title="Replay signal animation">↻</button>
      </nav>

      <section class="hero" aria-label="Profile summary">
        <div class="copy floaty" data-depth="34">
          <div class="kicker"><span class="pulse"></span> profile signal resolved</div>
          <h1>Complex systems,<br /><span class="signal">made reliable.</span></h1>
          <p class="bio">Senior web developer turning messy commerce, API, and product-data systems into dependable production workflows.</p>
          <div class="actions"><a class="button" href="https://www.linkedin.com/in/anatolij-prihosko/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></div>
        </div>
        <aside class="panel floaty" data-depth="56" aria-label="Profile terminal summary">
          <div class="terminal-bar"><div class="dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><span>bio.init</span></div>
          <div class="readout">
            <div class="line"><span>&gt;</span><span>identity: Anatolij Prihosko</span></div>
            <div class="line"><span>&gt;</span><span>focus: complex system reliability</span></div>
            <div class="line"><span>&gt;</span><span>mode: senior production delivery</span></div>
          </div>
          <div class="chips">
            <div class="chip-card"><strong>eCommerce</strong><small>Commerce platforms, checkout flows, catalogs, operational constraints.</small></div>
            <div class="chip-card"><strong>API Integrations</strong><small>Business-system connectivity, automation, data exchange, maintainable handoffs.</small></div>
            <div class="chip-card"><strong>PIM / Product Data</strong><small>Product information workflows, enrichment, synchronization, channel-ready data.</small></div>
          </div>
        </aside>
      </section>

      <footer class="footer floaty" data-depth="14"><div><strong>1334 Tech</strong> — Anatolij Prihosko</div></footer>
    </main>

    <template id="intro-template"><!-- duplicate intro content is inserted by js/index.js for replay --></template>
    <script type="module" src="js/index.min.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Verify expected production dependencies**

Run: `python3 - <<'PY' ... PY` to confirm `index.html` contains `js/index.min.js`, `css/style.min.css`, `img/1334_logo_white.png`, and no old `gsap`, `three`, or `marked` imports.

Expected: command prints `index dependencies ok`.

## Task 2: Production Styles

**Files:**
- Modify: `css/style.css`
- Modify: `css/style.min.css`

- [ ] **Step 1: Replace `css/style.css`**

Move the approved CSS from `docs/previews/redesign-animejs/index.html` into `css/style.css`, keeping all selectors used by the new `index.html`.

- [ ] **Step 2: Adjust asset-independent production CSS**

Ensure `css/style.css` includes:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
  .intro { display: none !important; }
  .shell { opacity: 1 !important; transform: none !important; }
}
```

- [ ] **Step 3: Create `css/style.min.css`**

Run a local Python minifier script that removes CSS comments and repeated whitespace, then writes `css/style.min.css`.

Expected: `css/style.min.css` exists and contains `.starfield`, `.brand-logo`, `.replay`, and `.final-signal`.

## Task 3: Production JavaScript

**Files:**
- Modify: `js/index.js`
- Modify: `js/index.min.js`

- [ ] **Step 1: Replace `js/index.js`**

Move the approved production script from `docs/previews/redesign-animejs/index.html` into `js/index.js`. Keep:

```js
import { createTimeline, scrambleText, stagger } from 'https://esm.sh/animejs';
```

The script must:
- create the starfield if `.starfield` exists
- damp pointer movement with `requestAnimationFrame`
- set CSS vars `--rx`, `--ry`, `--mx`, `--my`
- move `.floaty` elements by their `data-depth`
- implement `resetIntroText()`
- implement `runIntro()`
- attach replay button click handler
- call `runIntro()` on load
- remove the intro for `prefers-reduced-motion: reduce`

- [ ] **Step 2: Create `js/index.min.js`**

Run a local Python minifier script that removes JavaScript comments and repeated whitespace, then writes `js/index.min.js`.

Expected: `js/index.min.js` exists and contains `scrambleText`, `requestAnimationFrame`, and `Replay signal animation` is not needed because that string lives in HTML.

## Task 4: Static Verification

**Files:**
- Read: `index.html`
- Read: `css/style.css`
- Read: `css/style.min.css`
- Read: `js/index.js`
- Read: `js/index.min.js`

- [ ] **Step 1: Run content checks**

Run a Python check that verifies:
- `index.html` references minified CSS and JS
- `index.html` references `img/1334_logo_white.png`
- no `gsap`, `three`, or `marked` references remain
- `css/style.css` and `css/style.min.css` both contain `.starfield`, `.brand-logo`, `.final-signal`
- `js/index.js` and `js/index.min.js` both contain `scrambleText`, `createTimeline`, `requestAnimationFrame`

Expected: command prints `static checks ok`.

- [ ] **Step 2: Serve locally**

Run: `python3 -m http.server 8000`

Open `http://localhost:8000/` and verify:
- intro scramble plays
- final signal transitions smoothly into hero
- replay button reruns the animation
- starfield and grid are visible
- pointer movement creates subtle 3D/parallax
- header shows logo + `1334 TECH` + `Anatolij Prihosko`
- LinkedIn CTA opens the LinkedIn URL

---

## Self-Review

- Spec coverage: plan maps the approved preview to production `index.html`, CSS, JS, minified assets, and static verification.
- Placeholder scan: no TBD/TODO placeholders remain.
- Type/name consistency: selectors and function names match the preview and production shell.
- Commit note: this repo instruction says not to commit unless explicitly requested, so this plan does not include commit steps.
