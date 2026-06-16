# 1334 Tech — Award-Winning Landing Page

> **Handoff note:** This plan is the single source of truth for the autonomous build.
> After context reset, the executing agent should start by reading this file from the repo at `/PLAN.md` on branch `1334-tech-redesign`.

---

## Context
Building a brand-new high-end software agency landing page for **1334 Tech** (owner: Anatolij Prihosko). Target: Awwwards / FWA level. The site must feel like entering a technological command centre — cinematic, immersive, technically jaw-dropping. Minimal text, maximum visual impact. Hosted on GitHub Pages (user page: `anatolij-p.github.io`, serves from `master` or `gh-pages` branch root).

---

## Branch Setup (do this first)
```bash
git checkout master
git checkout -b 1334-tech-redesign
# Remove everything except cv.md
git rm -r --cached .
git ls-files | grep -v '^cv\.md$' | xargs rm -f
# cv.md stays. Copy this plan into the repo so it survives context reset.
cp ~/.claude/plans/agile-bouncing-pnueli.md PLAN.md
```

---

## Build Order (execute in layers — each layer must work before the next)

### Layer 1 — Scaffold & Static Shell
- `package.json`, `vite.config.js`, `index.html`, `style.css`, `main.js` (empty JS)
- Three sections visible with correct scroll layout: `#hero`, `#stack`, `#contact`
- Dark background colour, correct fonts loaded, fixed side-nav dots visible
- **Verify:** `npm run dev` → browser opens → three sections scroll correctly, no console errors

### Layer 2 — Static Three.js Canvas
- WebGLRenderer initialised, fills viewport, `position:fixed` behind content
- 1000 white `THREE.Points` (placeholder), basic camera, `requestAnimationFrame` loop
- **Verify:** Canvas renders, points visible, no WebGL errors in console

### Layer 3 — Particle Network Scene (Hero state)
- 50,000 instanced particles in 3D network topology with GLSL shaders (glow, pulse)
- `THREE.LineSegments` edges with travelling dash animation
- Mouse parallax on camera
- `UnrealBloomPass` post-processing enabled
- **Verify:** Scene is visually impressive, 60fps on desktop (check `stats.js` or `performance.now()`)

### Layer 4 — Scroll-Driven Morph States
- GSAP ScrollTrigger integrated
- State 1 (Hero) → State 2 (grid crystallisation) at `#stack`
- State 2 → State 3 (singularity convergence) at `#contact`
- Lenis smooth scroll wrapping GSAP ScrollTrigger
- **Verify:** Scroll through page → particle morphs trigger correctly, no jank

### Layer 5 — Full Post-Processing Stack
- Add `ChromaticAberrationPass` (custom GLSL)
- Add `FilmPass` / vignette shader
- Grain overlay div (`noise.png` or CSS-generated noise)
- Scanline CSS overlay
- **Verify:** Visual atmosphere matches "cyberspace command centre" aesthetic

### Layer 6 — Preloader + Custom Cursor
- Terminal-style boot sequence typewriter (lines typed one by one):
  ```
  > INITIALISING 1334 TECH SYSTEMS...
  > LOADING NEURAL MESH [████████████] 100%
  > ESTABLISHING CONNECTIONS...
  > READY
  ```
- On complete: dissolve + bloom flash reveals main site
- Custom glowing cyan cursor: 12px dot + 40px lagging outer ring (lerp), expands on hover
- **Verify:** Load fresh → preloader plays → dissolves cleanly → cursor visible and responsive

### Layer 7 — Content Polish & HUD Elements
- Hero text: Space Grotesk massive headlines, clip-path reveal animations (staggered)
- Floating HUD panels (`NODE-1334 / CONNECTIONS: 2,847 / UPTIME: 99.97%`) with `backdrop-filter:blur`
- Section 02 glass cards: 4 capability cards with hover glow + lift + glitch flicker
- Tech logo strip (SVG icons, desaturated, glow on hover)
- Section 03: singularity CTA, LinkedIn button with animated border + glow
- Fixed side nav (`01 / 02 / 03`) highlights active section
- **Verify:** All interactive states work, content readable, no layout breaks

### Layer 8 — Production Build & Accessibility
- `prefers-reduced-motion` fallback: static gradient, no canvas
- Mobile (`< 768px`): canvas disabled, CSS animated gradient background (note: tradeoff — known)
- Adaptive quality: disable ChromaticAberration + FilmPass if FPS drops below 30
- OG meta tags: title, description, image
- `npm run build` → `dist/` generated with no errors
- **Verify:** `npm run preview` → production build looks identical to dev

---

## File Structure
```
/
├── PLAN.md          ← this file (in repo for agent handoff)
├── package.json
├── vite.config.js
├── index.html
├── style.css
├── main.js          ← Three.js scene, shaders, scroll orchestration
├── cv.md
└── assets/
    └── noise.png    ← grain texture
```

---

## Design System

**Palette**
| Token | Value | Use |
|---|---|---|
| `--bg` | `#050810` | Deep space black |
| `--surface` | `#0A0F1C` | Cards/panels |
| `--cyan` | `#00E5FF` | Primary signal/data |
| `--violet` | `#7C5CFF` | Compute/secondary |
| `--amber` | `#FFB454` | CTA/live nodes |
| `--text` | `#E6EDF3` | Primary text |
| `--muted` | `#4A5568` | Muted/labels |

**Typography (Google Fonts `<link>` in HTML head)**
- Display: **Space Grotesk** 700 — `letter-spacing: -0.04em`, large/massive sizing
- Body: **Inter** 400/500
- Code/HUD: **JetBrains Mono** 400

---

## Three.js Scene

### Post-Processing Stack
```
WebGLRenderer (antialias, alpha:true, powerPreference:'high-performance')
→ RenderPass
→ UnrealBloomPass (strength:1.8, radius:0.8, threshold:0.1)
→ ChromaticAberrationPass (custom GLSL, offset:0.003)
→ FilmPass + vignette (custom shader)
→ OutputPass
```

### State 1 — Hero: Particle Hyperspace Network
- 50,000 `THREE.Points` (instanced buffer), custom GLSL: glow + fresnel + `sin(uTime)` heartbeat pulse
- `THREE.LineSegments` edges, animated `dashOffset` = travelling light packets
- Camera slow orbital + mouse parallax (`±5°` X/Y)
- HTML HUD panels floating over canvas (different parallax rate to camera)

### State 2 — Tech Stack: Grid Crystallisation
- GSAP tweens particle positions from organic chaos → perfect isometric grid (1.2s elastic ease)
- Camera pulls back, connection lines dim

### State 3 — Contact: Singularity Convergence
- All particles converge to single radiant sphere at scene centre
- Sphere breathes (scale pulse), emits radial light streaks
- Bloom intensity spikes

---

## Section Content

### Hero
```
[Mono label]  SYSTEMS · CONNECTED
[H1]          RELIABLE
              WEB SYSTEMS
[Body]        Senior Web Developer & Integration Specialist
              Anatolij Prihosko
[CTA]         ──── Explore ────▶   (scrolls to #stack)
[HUD panels]  NODE-1334 / STATUS: ONLINE
              CONNECTIONS: 2,847 ACTIVE · UPTIME: 99.97%
```

### Tech Stack (`#stack`)
```
[Mono]  02 / CAPABILITIES
[H2]    WHAT I BUILD

4 glass cards (2×2 grid → 1 col mobile):
  🛒 eCOMMERCE     Magento · Shopify · WooCommerce
  🔌 INTEGRATION   REST · GraphQL · Webhooks · Automation
  📦 PIM           Enrichment · Pipelines · Channel sync
  ⚡ FULL-STACK    PHP · Laravel · JS/TS · React · Next.js · Node

Tech logo strip: PHP | Laravel | JS | TS | React | Next.js | Node | Magento | Shopify
```

### Contact (`#contact`)
```
[Mono]  03 / CONNECT
[H2]    LET'S BUILD
        SOMETHING.
[CTA]   Connect on LinkedIn ──▶   (https://www.linkedin.com/in/anatolij-prihosko/)
[foot]  1334 TECH · ANATOLIJ PRIHOSKO · 2026
```

### Fixed Side Nav
```
Right edge, vertically centred, position:fixed
● 01  (cyan when active)
○ 02
○ 03
Click → smooth scroll to section. IntersectionObserver updates active state.
```

---

## Build System

### `package.json` scripts
```json
{
  "scripts": {
    "dev":     "vite",
    "build":   "vite build",
    "preview": "vite preview",
    "deploy":  "npm run build && gh-pages -d dist"
  }
}
```

### npm packages
```
dependencies:   three, gsap, lenis
devDependencies: vite, gh-pages
```

### `vite.config.js`
```js
export default {
  base: '/',  // anatolij-p.github.io is a user page — root always correct, do NOT use /repo-name/
  build: { outDir: 'dist', assetsInlineLimit: 4096 }
}
```

### Deploy note (requires manual GitHub step)
`npm run deploy` pushes `dist/` to a `gh-pages` branch. **The user must then go to GitHub repo Settings → Pages → set source to `gh-pages` branch once.** The agent must NOT do this silently — surface it as a post-build instruction.

---

## Autonomous Self-Verification (Playwright MCP)
After each layer, the agent should use Playwright MCP to:
1. `browser_navigate` to `http://localhost:5173`
2. `browser_take_screenshot` → confirm visual state
3. `browser_console_messages` → confirm zero JS/WebGL errors
4. For interaction states: `browser_hover` on cards, `browser_scroll` through sections, screenshot each

Do not mark a layer complete until Playwright confirms it visually and error-free.

---

## Global Effects
- **Grain overlay:** `<div class="grain">` with `noise.png`, `position:fixed`, `opacity:0.04`, `pointer-events:none`, `mix-blend-mode:overlay`
- **Scanline CSS:** `repeating-linear-gradient` horizontal lines `rgba(0,0,0,0.03)` on `::after` pseudo
- **Lenis:** wraps `window` scroll, feeds `ScrollTrigger.update()` on each tick

---

## Known Tradeoffs
- Mobile: canvas disabled (battery/perf). CSS animated gradient replaces it. Award judges usually judge on desktop; this is an acceptable tradeoff.
- Custom cursor not shown on touch devices (correct behaviour).
