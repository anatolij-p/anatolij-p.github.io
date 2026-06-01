# Bio Site 3D Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `1334.tech` as a one-page static senior developer bio site with a terminal UI, scroll-driven CV scenes, Three.js data-nebula background, and Makefile-based serve/build/deploy workflow.

**Architecture:** Keep the site static and browser-only. `index.html` owns semantic markup and CDN module imports, `css/style.css` owns the complete visual system, `js/index.js` owns CV parsing, terminal state, scroll/click interactions, and Three.js rendering. A small Python build helper minifies CSS/JS and optionally optimizes images without introducing an app bundler.

**Tech Stack:** Static HTML/CSS/JS, Three.js CDN ES modules, GSAP + ScrollTrigger CDN, marked CDN, Python 3 build helper, Makefile, GitHub Pages.

---

## File Structure

- Modify `index.html`: replace the old Bootstrap/jQuery/particles/Typed layout with the new static one-page DOM, CDN module imports, metadata, nav, stage, scroll sections, and footer.
- Replace `css/style.css`: full redesign styles, responsive layout, terminal, cards, hover/focus states, reduced-motion behavior, binary footer.
- Replace `css/style.min.css`: generated minified copy of `css/style.css`.
- Replace `js/index.js`: module script implementing content loading from `cv.md`, terminal animations, scroll scenes, card click handlers, Three.js data nebula, parallax, reduced-motion fallback.
- Replace `js/index.min.js`: generated minified copy of `js/index.js`.
- Create `cv.md`: placeholder human-readable CV content with parseable headings.
- Create `Makefile`: `serve`, `build`, and `deploy` targets.
- Create `scripts/build-assets.py`: minifies CSS/JS and optionally optimizes images when Pillow is available.
- Create/update `.gitignore`: ignore local brainstorm/worktree/temp artifacts such as `.superpowers/`, `.worktrees/`, and deployment temp directories.
- Keep `CNAME`: production domain remains `1334.tech`.
- Do not modify `js/typing.js` or `js/typing.min.js`; they become unused legacy vendor files unless later removed by explicit cleanup.

Commit steps are not included because this environment requires explicit user approval before committing.

---

### Task 1: Repository Hygiene and Local Workflow Files

**Files:**
- Create/modify: `.gitignore`
- Create: `Makefile`
- Create: `scripts/build-assets.py`

- [ ] **Step 1: Add local artifact ignores**

Ensure `.gitignore` contains exactly these repo-specific local entries, preserving any existing entries if the file already exists:

```gitignore
.superpowers/
.worktrees/
.deploy-worktree/
__pycache__/
.DS_Store
```

- [ ] **Step 2: Create the Makefile**

Create `Makefile` with this content:

```makefile
.PHONY: serve build deploy clean-deploy-worktree

PORT ?= 8000
DEPLOY_BRANCH ?= gh-pages
DEPLOY_DIR ?= .deploy-worktree
DEPLOY_MESSAGE ?= deploy: update github pages

serve:
	@printf "Serving static site at http://localhost:$(PORT)/\n"
	python3 -m http.server $(PORT)

build:
	python3 scripts/build-assets.py

clean-deploy-worktree:
	@if [ -d "$(DEPLOY_DIR)" ]; then \
		git worktree remove --force "$(DEPLOY_DIR)"; \
	fi

deploy: build clean-deploy-worktree
	@git fetch origin $(DEPLOY_BRANCH) || true
	@if git show-ref --verify --quiet refs/remotes/origin/$(DEPLOY_BRANCH); then \
		git worktree add "$(DEPLOY_DIR)" origin/$(DEPLOY_BRANCH); \
	else \
		git worktree add -b "$(DEPLOY_BRANCH)" "$(DEPLOY_DIR)" HEAD; \
	fi
	@cd "$(DEPLOY_DIR)" && git rm -r --ignore-unmatch . >/dev/null 2>&1 || true
	@rsync -av --delete \
		--exclude '.git' \
		--exclude '.superpowers' \
		--exclude '.worktrees' \
		--exclude '.deploy-worktree' \
		--exclude 'docs/superpowers' \
		--exclude 'scripts' \
		--exclude 'Makefile' \
		./ "$(DEPLOY_DIR)/"
	@cd "$(DEPLOY_DIR)" && git add . && \
		if git diff --cached --quiet; then \
			printf "No deploy changes.\n"; \
		else \
			git commit -m "$(DEPLOY_MESSAGE)" && git push origin HEAD:$(DEPLOY_BRANCH); \
		fi
	@git worktree remove "$(DEPLOY_DIR)"
```

- [ ] **Step 3: Create the build helper**

Create `scripts/build-assets.py` with this content:

```python
#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def minify_css(css: str) -> str:
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"\s+", " ", css)
    css = re.sub(r"\s*([{}:;,>+~])\s*", r"\1", css)
    css = css.replace(";}" , "}")
    return css.strip() + "\n"


def minify_js(js: str) -> str:
    js = re.sub(r"/\*.*?\*/", "", js, flags=re.S)
    lines = []
    for line in js.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("//"):
            continue
        lines.append(stripped)
    compact = "\n".join(lines)
    compact = re.sub(r"\n{2,}", "\n", compact)
    return compact.strip() + "\n"


def write_minified(source: str, target: str, minifier) -> None:
    source_path = ROOT / source
    target_path = ROOT / target
    target_path.write_text(minifier(source_path.read_text(encoding="utf-8")), encoding="utf-8")
    print(f"minified {source} -> {target}")


def optimize_images() -> None:
    try:
        from PIL import Image
    except Exception:
        print("image optimization skipped: Pillow is not installed")
        return

    for path in (ROOT / "img").glob("*.png"):
        with Image.open(path) as image:
            image.save(path, optimize=True)
            print(f"optimized {path.relative_to(ROOT)}")
    for path in (ROOT / "img").glob("*.jpg"):
        with Image.open(path) as image:
            image.save(path, optimize=True, quality=86)
            print(f"optimized {path.relative_to(ROOT)}")


def main() -> None:
    write_minified("css/style.css", "css/style.min.css", minify_css)
    write_minified("js/index.js", "js/index.min.js", minify_js)
    optimize_images()


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Verify workflow files parse**

Run:

```bash
python3 -m py_compile scripts/build-assets.py
make -n build
make -n deploy
```

Expected:
- `python3 -m py_compile` exits 0.
- `make -n build` prints `python3 scripts/build-assets.py`.
- `make -n deploy` prints the deploy recipe without executing it.

---

### Task 2: Placeholder CV Content Source

**Files:**
- Create/replace: `cv.md`

- [ ] **Step 1: Create placeholder CV content**

Create `cv.md` with this content:

```markdown
# Anatolij Prihosko

## profile
title: Senior Web Developer
label: Senior Web Developer · Integration Specialist
headline: Reliable web systems for connected commerce.
summary: I build and connect eCommerce platforms, APIs, PIM workflows, and full-stack systems for international clients with a practical focus on production delivery.

## expertise
- eCommerce: Commerce platform delivery, checkout flows, product catalogs, and operational systems.
- Integrations: API design, automation, data exchange, and business system connectivity.
- PIM: Product information workflows, enrichment pipelines, and channel-ready product data.
- Full-stack: Frontend interfaces, backend services, performance tuning, and production support.

## ecommerce
icon: 🛒
headline: eCommerce Systems
summary: Commerce platform delivery, integrations, product data flows, checkout and business process support.
proof: International clients · dozens of delivered projects · production-first delivery

## integrations
icon: 🔌
headline: API Integrations
summary: Connecting business systems through APIs, automation, data normalization, queues, and monitoring-friendly workflows.
proof: Multi-system delivery · reliable handoffs · maintainable integration surfaces

## pim
icon: 📦
headline: PIM Workflows
summary: Product information modeling, enrichment flows, catalog synchronization, and channel-specific delivery support.
proof: Product data clarity · repeatable workflows · commerce-ready output

## projects
- Built commerce integrations that connect storefronts, product data, and operational tools.
- Delivered full-stack improvements for international clients with practical production constraints.
- Supported platform work across frontend, backend, APIs, and data flows.

## timeline
- Senior Web Developer: eCommerce, integrations, PIM, and production delivery.
- Integration Specialist: API connectivity, automation, and cross-system workflows.
- Full-stack Engineer: frontend experiences, backend services, and operational tooling.

## contact
linkedin: https://www.linkedin.com/in/anatolij-prihosko/
cta: Connect on LinkedIn
```

- [ ] **Step 2: Verify the file exists**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
text = Path('cv.md').read_text(encoding='utf-8')
for heading in ['## profile', '## expertise', '## ecommerce', '## integrations', '## pim', '## projects', '## timeline', '## contact']:
    assert heading in text, heading
print('cv.md sections ok')
PY
```

Expected: `cv.md sections ok`

---

### Task 3: Static HTML Shell

**Files:**
- Replace: `index.html`

- [ ] **Step 1: Replace index markup**

Replace `index.html` with semantic one-page markup using this structure and exact external dependencies:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>1334 TECH — Anatolij Prihosko</title>
    <meta name="description" content="Anatolij Prihosko — senior web developer focused on eCommerce, integrations, PIM, and production web systems." />
    <meta name="keywords" content="senior web developer,eCommerce,integrations,PIM,frontend,backend,APIs,1334 TECH" />
    <meta name="author" content="Anatolij Prihosko" />
    <meta property="og:title" content="1334 TECH — Anatolij Prihosko" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://1334.tech" />
    <meta property="og:image" content="https://1334.tech/img/thumbnail.jpg" />
    <meta property="og:description" content="Senior web developer focused on eCommerce, integrations, PIM, and production web systems." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/style.min.css" />
  </head>
  <body>
    <canvas id="nebula-canvas" aria-hidden="true"></canvas>
    <div class="site-shell">
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="brand" href="#profile" aria-label="1334 TECH home">
          <img src="img/1334_logo.png" alt="" width="26" height="26" />
          <span>1334 TECH</span>
        </a>
        <div class="nav-links">
          <a href="#profile"><span aria-hidden="true">◉</span> Profile</a>
          <a href="#expertise"><span aria-hidden="true">⌁</span> CV Scenes</a>
          <a class="linkedin-icon" href="https://www.linkedin.com/in/anatolij-prihosko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
        </div>
      </nav>

      <main>
        <section id="profile" class="hero-stage" aria-label="Interactive CV profile">
          <div class="stage-copy" aria-live="polite">
            <p class="eyebrow" id="scene-eyebrow">⚡ Scene 01 / Profile loaded from cv.md</p>
            <h1 id="scene-title">Reliable web systems for connected commerce.</h1>
            <p id="scene-summary" class="scene-summary">I build and connect eCommerce platforms, APIs, PIM workflows, and full-stack systems for international clients with a practical focus on production delivery.</p>
            <div class="expertise-grid" id="expertise-grid" aria-label="Expertise sections">
              <button class="expertise-card active" type="button" data-section="ecommerce"><span>🛒</span><strong>eCommerce</strong><small>Commerce systems and delivery</small></button>
              <button class="expertise-card" type="button" data-section="integrations"><span>🔌</span><strong>Integrations</strong><small>APIs and automation</small></button>
              <button class="expertise-card" type="button" data-section="pim"><span>📦</span><strong>PIM</strong><small>Product data workflows</small></button>
              <button class="expertise-card" type="button" data-section="timeline"><span>▤</span><strong>Timeline</strong><small>Career chapters</small></button>
            </div>
          </div>

          <aside class="terminal-panel" id="terminal-panel" aria-label="Animated CV terminal">
            <div class="terminal-titlebar">
              <span class="dot red"></span><span class="dot amber"></span><span class="dot green"></span>
              <span id="terminal-title">cv.md :: profile</span>
            </div>
            <div class="terminal-body" id="terminal-body" aria-live="polite"></div>
          </aside>
        </section>

        <section id="expertise" class="scroll-scene" data-scene="expertise"><span>01</span><strong>Expertise</strong></section>
        <section id="projects" class="scroll-scene" data-scene="projects"><span>02</span><strong>Selected work</strong></section>
        <section id="timeline" class="scroll-scene" data-scene="timeline"><span>03</span><strong>Timeline</strong></section>
        <section id="contact" class="scroll-scene" data-scene="contact"><span>04</span><strong>Contact</strong></section>
      </main>

      <footer class="binary-footer">
        <div class="binary-layer binary-cyan" aria-hidden="true"></div>
        <div class="binary-layer binary-blue" aria-hidden="true"></div>
        <div class="binary-layer binary-gold" aria-hidden="true"></div>
        <div class="footer-content">
          <div><strong>1334 TECH</strong><span>Senior web development · connected systems · production delivery</span></div>
          <div class="footer-actions"><span class="prompt">$</span><span class="cursor"></span><a class="linkedin-icon" href="https://www.linkedin.com/in/anatolij-prihosko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a></div>
        </div>
      </footer>
    </div>

    <script type="importmap">
      {
        "imports": {
          "three": "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js"
        }
      }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js"></script>
    <script type="module" src="js/index.min.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Verify HTML references expected assets**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
html = Path('index.html').read_text(encoding='utf-8')
for token in ['css/style.min.css', 'js/index.min.js', 'img/1334_logo.png', 'three@0.165.0', 'gsap@3.12.5', 'marked@12.0.2']:
    assert token in html, token
print('index.html references ok')
PY
```

Expected: `index.html references ok`

---

### Task 4: Visual System CSS

**Files:**
- Replace: `css/style.css`
- Generate later: `css/style.min.css`

- [ ] **Step 1: Replace CSS source**

Replace `css/style.css` with complete styles for:
- fixed full-screen `#nebula-canvas`
- dark body and typography
- nav with small logo and LinkedIn icon
- two-column hero stage
- cards with hover/focus animation
- terminal panel, scanline, cursor, loader rows
- scroll scene markers
- binary footer with dense low-opacity breathing 0/1 layers
- responsive layout
- reduced-motion overrides

Use these exact CSS custom properties and class names so the JavaScript can target them:

```css
:root {
  --bg: #020617;
  --panel: rgba(2, 6, 23, 0.88);
  --panel-strong: rgba(15, 23, 42, 0.92);
  --text: #e5e7eb;
  --muted: #94a3b8;
  --cyan: #22d3ee;
  --blue: #60a5fa;
  --green: #a7f3d0;
  --gold: #facc15;
  --border: rgba(148, 163, 184, 0.18);
  --glow: rgba(45, 212, 191, 0.22);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-height: 100%; background: var(--bg); color: var(--text); font-family: Inter, system-ui, sans-serif; overflow-x: hidden; }
a { color: inherit; }
button { font: inherit; }
#nebula-canvas { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 0; background: radial-gradient(circle at 70% 30%, rgba(37, 99, 235, .18), transparent 30%), #020617; }
.site-shell { position: relative; z-index: 1; min-height: 100vh; }
.site-nav { position: fixed; z-index: 20; top: 0; left: 0; right: 0; height: 72px; display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(20px, 4vw, 56px); border-bottom: 1px solid rgba(148, 163, 184, .14); backdrop-filter: blur(18px); background: rgba(2, 6, 23, .45); }
.brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 900; letter-spacing: .14em; }
.brand img { width: 26px; height: 26px; object-fit: contain; border-radius: 6px; filter: drop-shadow(0 0 8px rgba(250, 204, 21, .35)); }
.nav-links { display: flex; align-items: center; gap: 18px; color: var(--muted); font-size: 13px; }
.nav-links a { text-decoration: none; transition: transform .25s ease, color .25s ease; }
.nav-links a:hover, .nav-links a:focus-visible { color: white; transform: translateY(-2px); outline: none; }
.linkedin-icon { width: 36px; height: 36px; border-radius: 10px; background: #0a66c2; color: white; display: inline-flex; align-items: center; justify-content: center; font-weight: 900; text-decoration: none; box-shadow: 0 0 24px rgba(10, 102, 194, .32); }
.linkedin-icon:hover, .linkedin-icon:focus-visible { transform: translateY(-2px) scale(1.08); box-shadow: 0 0 34px rgba(10, 102, 194, .55); outline: 2px solid rgba(96, 165, 250, .8); outline-offset: 3px; }
.hero-stage { min-height: 100vh; display: grid; grid-template-columns: minmax(0, 1fr) minmax(420px, .92fr); align-items: center; gap: clamp(28px, 5vw, 72px); padding: 120px clamp(20px, 4vw, 56px) 48px; }
.stage-copy { max-width: 620px; }
.eyebrow { display: inline-flex; padding: 8px 12px; border-radius: 999px; background: rgba(15, 23, 42, .82); border: 1px solid rgba(45, 212, 191, .3); color: var(--green); font-size: 13px; }
h1 { margin: 18px 0; color: white; font-size: clamp(42px, 6vw, 76px); line-height: .98; letter-spacing: -.06em; }
.scene-summary { color: #b6c3d1; font-size: clamp(16px, 1.5vw, 19px); line-height: 1.72; }
.expertise-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 28px; perspective: 900px; }
.expertise-card { text-align: left; color: #cbd5e1; background: rgba(15, 23, 42, .74); border: 1px solid var(--border); border-radius: 16px; padding: 16px; cursor: pointer; transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease, background .28s ease; }
.expertise-card span { display: block; font-size: 22px; margin-bottom: 8px; }
.expertise-card strong { display: block; color: white; }
.expertise-card small { color: var(--muted); }
.expertise-card:hover, .expertise-card:focus-visible, .expertise-card.active { transform: translateY(-8px) rotateX(5deg); border-color: rgba(45, 212, 191, .85); box-shadow: 0 18px 50px rgba(45, 212, 191, .18); background: rgba(15, 23, 42, .9); outline: none; }
.terminal-panel { background: var(--panel); border: 1px solid rgba(45, 212, 191, .42); border-radius: 24px; box-shadow: 0 30px 95px rgba(0, 0, 0, .6), 0 0 70px rgba(45, 212, 191, .17); overflow: hidden; font-family: 'Share Tech Mono', monospace; min-height: 480px; position: relative; transform-style: preserve-3d; transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
.terminal-panel:hover, .terminal-panel.is-tilting { transform: perspective(900px) rotateY(-3deg) translateY(-4px); border-color: rgba(45, 212, 191, .75); box-shadow: 0 40px 110px rgba(0, 0, 0, .65), 0 0 90px rgba(45, 212, 191, .25); }
.terminal-panel.is-loading { animation: terminal-flip .75s ease both; }
.terminal-panel::after { content: ''; position: absolute; left: 0; right: 0; top: 44px; height: 96px; background: linear-gradient(transparent, rgba(45, 212, 191, .16), transparent); animation: scanline 2.4s ease-in-out infinite; pointer-events: none; }
.terminal-titlebar { height: 44px; background: rgba(15, 23, 42, .95); display: flex; align-items: center; gap: 8px; padding: 0 14px; border-bottom: 1px solid rgba(148, 163, 184, .16); }
.terminal-titlebar .dot { width: 11px; height: 11px; border-radius: 50%; }
.red { background: #ef4444; } .amber { background: #f59e0b; } .green { background: #10b981; }
#terminal-title { margin-left: auto; color: #64748b; font-size: 12px; }
.terminal-body { padding: 25px; color: var(--green); font-size: 15px; line-height: 1.78; min-height: 430px; }
.terminal-command { color: var(--green); }
.terminal-command .prompt, .prompt { color: var(--blue); }
.terminal-muted { color: #64748b; }
.terminal-heading { margin-top: 12px; color: white; font-size: 22px; }
.terminal-output { color: #cbd5e1; }
.terminal-proof { color: #93c5fd; }
.loader-icon { display: inline-block; width: 20px; color: var(--cyan); animation: breathe-cyan 1.3s ease-in-out infinite; }
.cursor { display: inline-block; width: 10px; height: 18px; background: var(--cyan); vertical-align: -3px; animation: blink 1s steps(1, end) infinite; }
.scroll-scene { min-height: 68vh; display: flex; align-items: center; justify-content: center; gap: 16px; color: rgba(226, 232, 240, .64); text-transform: uppercase; letter-spacing: .18em; }
.scroll-scene span { color: var(--cyan); }
.binary-footer { position: relative; min-height: 290px; overflow: hidden; background: linear-gradient(135deg, #020617, #06111f 58%, #0a1020); border-top: 1px solid rgba(45, 212, 191, .2); font-family: 'Share Tech Mono', monospace; }
.binary-footer::before { content: ''; position: absolute; inset: -40px; background-image: radial-gradient(circle at 28% 42%, rgba(34, 211, 238, .1), transparent 30%), radial-gradient(circle at 74% 50%, rgba(96, 165, 250, .1), transparent 32%), linear-gradient(90deg, rgba(34, 211, 238, .08), rgba(96, 165, 250, .06), rgba(250, 204, 21, .05)); background-size: 360px 180px; animation: footer-flow 22s linear infinite; }
.binary-footer::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, transparent 0 32%, rgba(2, 6, 23, .42) 68%, rgba(2, 6, 23, .72) 100%); }
.binary-layer { position: absolute; inset: 12px -20px; word-break: break-all; pointer-events: none; }
.binary-cyan { color: var(--cyan); font-size: 12px; line-height: 1.22; letter-spacing: .2em; animation: breathe-cyan 5.5s ease-in-out infinite; }
.binary-blue { color: var(--blue); font-size: 10px; line-height: 1.35; letter-spacing: .32em; animation: breathe-blue 6.8s ease-in-out infinite reverse; }
.binary-gold { color: var(--gold); font-size: 14px; line-height: 1.6; letter-spacing: .14em; animation: breathe-gold 7.4s ease-in-out infinite; }
.footer-content { position: relative; z-index: 2; min-height: 230px; padding: 34px clamp(20px, 4vw, 56px); display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.footer-content strong { display: block; letter-spacing: .14em; }
.footer-content span { color: var(--muted); }
.footer-actions { display: flex; gap: 12px; align-items: center; }
@keyframes scanline { from { transform: translateY(-100%); } to { transform: translateY(420%); } }
@keyframes blink { 0%, 45% { opacity: 1; } 46%, 100% { opacity: 0; } }
@keyframes terminal-flip { 0% { transform: perspective(900px) rotateY(0deg); } 50% { transform: perspective(900px) rotateY(-18deg) translateX(-10px); } 100% { transform: perspective(900px) rotateY(0deg); } }
@keyframes breathe-cyan { 0%, 100% { opacity: .16; transform: scale(1); } 50% { opacity: .38; transform: scale(1.025); } }
@keyframes breathe-blue { 0%, 100% { opacity: .12; transform: scale(.99); } 50% { opacity: .32; transform: scale(1.035); } }
@keyframes breathe-gold { 0%, 100% { opacity: .1; transform: scale(1.01); } 50% { opacity: .28; transform: scale(1.045); } }
@keyframes footer-flow { from { background-position: 0 0; } to { background-position: 360px 180px; } }
@media (max-width: 940px) { .hero-stage { grid-template-columns: 1fr; } .terminal-panel { min-height: 420px; } .nav-links a:not(.linkedin-icon) { display: none; } }
@media (max-width: 640px) { .expertise-grid { grid-template-columns: 1fr; } .footer-content { align-items: flex-start; flex-direction: column; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
```

- [ ] **Step 2: Verify required selectors exist**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
css = Path('css/style.css').read_text(encoding='utf-8')
for selector in ['#nebula-canvas', '.hero-stage', '.terminal-panel', '.expertise-card', '.binary-footer', '@media (prefers-reduced-motion: reduce)']:
    assert selector in css, selector
print('style.css selectors ok')
PY
```

Expected: `style.css selectors ok`

---

### Task 5: JavaScript Interactions and Three.js Nebula

**Files:**
- Replace: `js/index.js`
- Generate later: `js/index.min.js`

- [ ] **Step 1: Replace JS source**

Replace `js/index.js` with a module script implementing these units:

```javascript
import * as THREE from 'three';

const LINKEDIN_URL = 'https://www.linkedin.com/in/anatolij-prihosko/';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fallbackCv = {
  profile: {
    title: 'Reliable web systems for connected commerce.',
    summary: 'I build and connect eCommerce platforms, APIs, PIM workflows, and full-stack systems for international clients with a practical focus on production delivery.'
  },
  ecommerce: { icon: '🛒', headline: 'eCommerce Systems', summary: 'Commerce platform delivery, integrations, product data flows, checkout and business process support.', proof: 'International clients · dozens of delivered projects · production-first delivery' },
  integrations: { icon: '🔌', headline: 'API Integrations', summary: 'Connecting business systems through APIs, automation, data normalization, queues, and monitoring-friendly workflows.', proof: 'Multi-system delivery · reliable handoffs · maintainable integration surfaces' },
  pim: { icon: '📦', headline: 'PIM Workflows', summary: 'Product information modeling, enrichment flows, catalog synchronization, and channel-specific delivery support.', proof: 'Product data clarity · repeatable workflows · commerce-ready output' },
  timeline: { icon: '▤', headline: 'Career Timeline', summary: 'Senior Web Developer, Integration Specialist, and full-stack delivery partner for production web systems.', proof: 'eCommerce · integrations · PIM · frontend · backend' },
  projects: { icon: '◇', headline: 'Selected Work', summary: 'Commerce integrations, platform improvements, product data flows, and full-stack production support.', proof: 'Practical delivery across international client work' },
  contact: { icon: 'in', headline: 'Connect on LinkedIn', summary: 'Open my LinkedIn profile to connect or review professional background.', proof: LINKEDIN_URL }
};

const elements = {
  title: document.querySelector('#scene-title'),
  summary: document.querySelector('#scene-summary'),
  eyebrow: document.querySelector('#scene-eyebrow'),
  terminalPanel: document.querySelector('#terminal-panel'),
  terminalTitle: document.querySelector('#terminal-title'),
  terminalBody: document.querySelector('#terminal-body'),
  cards: [...document.querySelectorAll('.expertise-card')],
  scenes: [...document.querySelectorAll('.scroll-scene')]
};

let cv = fallbackCv;
let activeSection = 'profile';
let terminalToken = 0;

async function loadCv() {
  try {
    const response = await fetch('cv.md', { cache: 'no-store' });
    if (!response.ok) throw new Error(`cv.md ${response.status}`);
    const markdown = await response.text();
    cv = { ...fallbackCv, ...parseCv(markdown) };
  } catch (error) {
    console.warn('Using fallback CV content:', error);
  }
}

function parseCv(markdown) {
  const sections = {};
  const matches = markdown.split(/\n##\s+/).slice(1);
  for (const block of matches) {
    const [headingLine, ...bodyLines] = block.split('\n');
    const key = headingLine.trim().toLowerCase();
    const body = bodyLines.join('\n').trim();
    const data = {};
    for (const line of body.split('\n')) {
      const pair = line.match(/^([a-zA-Z]+):\s*(.+)$/);
      if (pair) data[pair[1].toLowerCase()] = pair[2].trim();
    }
    if (!data.summary) data.summary = body.replace(/^[-*]\s+/gm, '').replace(/\n+/g, ' ').trim();
    if (!data.headline) data.headline = fallbackCv[key]?.headline || key.replace(/\b\w/g, char => char.toUpperCase());
    if (!data.icon) data.icon = fallbackCv[key]?.icon || '◇';
    if (!data.proof) data.proof = fallbackCv[key]?.proof || 'Loaded from cv.md';
    sections[key] = data;
  }
  return sections;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function terminalLine(html, className = '') {
  return `<div class="${className}">${html}</div>`;
}

function renderIdlePrompt() {
  return terminalLine('<span class="prompt">$</span> <span class="cursor"></span>', 'terminal-command');
}

async function renderTerminal(section, options = {}) {
  const token = ++terminalToken;
  const data = cv[section] || fallbackCv[section] || fallbackCv.profile;
  activeSection = section;
  elements.terminalTitle.textContent = `cv.md :: ${section}`;
  elements.terminalPanel.classList.add('is-loading');
  const command = section === 'timeline' ? 'hydrate timeline' : section === 'contact' ? 'resolve contact links' : `load cv.md --section ${section} --mode interactive`;
  const loader = [
    ['◷', 'scanning markdown frontmatter...', 'ok'],
    ['◇', 'matching expertise graph nodes...', `${section.length + 16} links`],
    ['▣', 'hydrating terminal payload...', 'ready'],
    ['↻', 'rotating display plane...', 'done']
  ];
  elements.terminalBody.innerHTML = terminalLine(`<span class="prompt">$</span> ${escapeHtml(command)}`, 'terminal-command');
  if (!prefersReducedMotion && options.animate !== false) {
    for (const [icon, text, status] of loader) {
      if (token !== terminalToken) return;
      await wait(180);
      elements.terminalBody.insertAdjacentHTML('beforeend', terminalLine(`<span class="loader-icon">${icon}</span><span class="terminal-muted">${escapeHtml(text)}</span> <span>${escapeHtml(status)}</span>`));
    }
    await wait(160);
  }
  if (token !== terminalToken) return;
  elements.terminalBody.insertAdjacentHTML('beforeend', terminalLine(`${escapeHtml(data.icon || '◇')} ${escapeHtml(data.headline || data.title || section)}`, 'terminal-heading'));
  elements.terminalBody.insertAdjacentHTML('beforeend', terminalLine(escapeHtml(data.summary || ''), 'terminal-output'));
  elements.terminalBody.insertAdjacentHTML('beforeend', terminalLine('<span class="prompt">$</span> show --proof --format compact', 'terminal-command'));
  elements.terminalBody.insertAdjacentHTML('beforeend', terminalLine(escapeHtml(data.proof || ''), 'terminal-proof'));
  elements.terminalBody.insertAdjacentHTML('beforeend', renderIdlePrompt());
  elements.terminalPanel.classList.remove('is-loading');
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setScene(section) {
  const data = cv[section] || fallbackCv[section] || fallbackCv.profile;
  elements.eyebrow.textContent = `⚡ Scene / ${section} loaded from cv.md`;
  elements.title.textContent = data.title || data.headline || fallbackCv.profile.title;
  elements.summary.textContent = data.summary || fallbackCv.profile.summary;
  elements.cards.forEach(card => card.classList.toggle('active', card.dataset.section === section));
  renderTerminal(section);
}

function setupCards() {
  elements.cards.forEach(card => {
    card.addEventListener('mouseenter', () => highlightNebula(card.dataset.section));
    card.addEventListener('focus', () => highlightNebula(card.dataset.section));
    card.addEventListener('click', () => setScene(card.dataset.section));
  });
}

function setupScrollScenes() {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  elements.scenes.forEach(scene => {
    ScrollTrigger.create({
      trigger: scene,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setScene(scene.dataset.scene),
      onEnterBack: () => setScene(scene.dataset.scene)
    });
  });
}

let nebula;
function setupNebula() {
  const canvas = document.querySelector('#nebula-canvas');
  if (!canvas || prefersReducedMotion) return;
  try {
    nebula = createNebula(canvas);
    nebula.start();
  } catch (error) {
    console.warn('WebGL background disabled:', error);
  }
}

function createNebula(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020617, 0.035);
  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 80);
  camera.position.set(0, 0, 18);
  const group = new THREE.Group();
  scene.add(group);
  const pointer = new THREE.Vector2();

  const nodeGeometry = new THREE.SphereGeometry(0.045, 10, 10);
  const cyan = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.62 });
  const blue = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5 });
  const gold = new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.35 });
  const nodes = [];
  for (let index = 0; index < 95; index += 1) {
    const mesh = new THREE.Mesh(nodeGeometry, index % 9 === 0 ? gold : index % 3 === 0 ? blue : cyan);
    mesh.position.set((Math.random() - 0.5) * 26, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 12);
    mesh.userData.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.001);
    nodes.push(mesh);
    group.add(mesh);
  }

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.16 });
  for (let index = 0; index < nodes.length - 1; index += 2) {
    const geometry = new THREE.BufferGeometry().setFromPoints([nodes[index].position, nodes[(index + 7) % nodes.length].position]);
    group.add(new THREE.Line(geometry, lineMaterial));
  }

  const serverMaterial = new THREE.MeshBasicMaterial({ color: 0x0f172a, wireframe: true, transparent: true, opacity: 0.42 });
  const servers = [];
  for (let index = 0; index < 9; index += 1) {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.08), serverMaterial);
    box.position.set((Math.random() - 0.5) * 22, (Math.random() - 0.5) * 11, (Math.random() - 0.5) * 8);
    box.rotation.z = Math.random() * Math.PI;
    servers.push(box);
    group.add(box);
  }

  function resize() {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }

  function animate() {
    if (document.hidden) return;
    group.rotation.y += 0.0015;
    group.rotation.x += 0.0004;
    nodes.forEach(node => node.position.add(node.userData.velocity));
    servers.forEach((server, index) => {
      server.rotation.x += 0.001 + index * 0.00003;
      server.rotation.y += 0.0015;
    });
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.025;
    camera.position.y += (-pointer.y * 0.8 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', event => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  });
  resize();
  return { start: animate, group };
}

function highlightNebula(section) {
  document.body.dataset.nebulaFocus = section;
}

function fillFooterBinary() {
  const binary = '01001101011001010110110001100100001000000110001101101111011011010110110101100101011100100110001101100101001000000110100101101110011101000110010101100111011100100110000101110100011010010110111101101110011100110010000010101010100101010010101000110100001100110011010000100000001110011011110010111001101110100011001010110110101110011001000000110000101110000011010010111001100100000001100100011000010111010001100001';
  document.querySelectorAll('.binary-layer').forEach((layer, index) => {
    layer.textContent = binary.repeat(index + 4);
  });
}

async function init() {
  fillFooterBinary();
  setupCards();
  setupNebula();
  await loadCv();
  setScene('profile');
  setupScrollScenes();
}

init();
```

- [ ] **Step 2: Verify JS syntax by importing it through Node parse mode**

Run:

```bash
node --check js/index.js
```

Expected: `node --check` exits 0. If Node is unavailable, skip this step and rely on browser console verification later.

---

### Task 6: Build Minified Assets

**Files:**
- Modify: `css/style.min.css`
- Modify: `js/index.min.js`

- [ ] **Step 1: Run build**

Run:

```bash
make build
```

Expected:
- Prints `minified css/style.css -> css/style.min.css`.
- Prints `minified js/index.js -> js/index.min.js`.
- Either optimizes images or prints `image optimization skipped: Pillow is not installed`.

- [ ] **Step 2: Verify minified assets are non-empty and referenced**

Run:

```bash
python3 - <<'PY'
from pathlib import Path
for path in ['css/style.min.css', 'js/index.min.js']:
    size = Path(path).stat().st_size
    assert size > 1000, f'{path} unexpectedly small: {size}'
html = Path('index.html').read_text(encoding='utf-8')
assert 'css/style.min.css' in html
assert 'js/index.min.js' in html
print('minified assets ok')
PY
```

Expected: `minified assets ok`

---

### Task 7: Local Static Verification

**Files:**
- No source changes unless verification finds issues.

- [ ] **Step 1: Start the local server**

Run:

```bash
make serve
```

Expected:
- Prints `Serving static site at http://localhost:8000/`.
- Starts Python’s static file server.

- [ ] **Step 2: Verify in browser**

Open `http://localhost:8000/` and verify:
- No console errors.
- Small 1334 logo appears top-left next to `1334 TECH`.
- LinkedIn appears as an icon-style button.
- Left side shows title/info/cards; right side shows terminal.
- Terminal always has a blinking cursor.
- Terminal initial profile content loads from `cv.md` or fallback.
- Clicking eCommerce/integrations/PIM/timeline cards rotates/reloads terminal with CLI loader lines.
- Hovering cards, terminal, and LinkedIn icon triggers hover animations.
- Three.js data nebula renders with low-opacity moving dots, moving server rectangles, and connecting lines.
- Footer shows dense low-opacity cyan/blue/gold binary layers with breathing animation.
- Scrolling down/up changes scenes and terminal content.
- In reduced-motion mode, content remains readable and continuous animation is suppressed.

- [ ] **Step 3: Stop the server**

Stop the server with `Ctrl+C` in the terminal where `make serve` is running.

---

### Task 8: Deploy Command Review Only

**Files:**
- No source changes unless command review finds issues.

- [ ] **Step 1: Review deploy dry-run output**

Run:

```bash
make -n deploy
```

Expected:
- Shows that `build` runs before deployment.
- Shows use of `.deploy-worktree`.
- Shows removal of tracked deploy-branch files before copying the current static output.
- Shows `CNAME` is not excluded.
- Does not actually run deployment because of `-n`.

- [ ] **Step 2: Do not deploy during implementation verification**

Do not run `make deploy` unless the user explicitly asks for deployment. The target commits and pushes to `gh-pages` by design.

---

## Self-Review Notes

- Spec coverage: plan covers static/no-build constraints, `Makefile`, `serve/build/deploy`, `cv.md`, one-page layout, terminal, scroll/click interactions, Three.js data nebula, footer, hover states, minified asset sync, and verification.
- Placeholder scan: the only placeholder is the explicitly requested placeholder `cv.md` content source; no unresolved implementation placeholders remain.
- Type/name consistency: DOM IDs/classes in `index.html`, CSS selectors, and JS selectors match (`#terminal-body`, `#terminal-panel`, `.expertise-card`, `.binary-layer`, `#nebula-canvas`).
