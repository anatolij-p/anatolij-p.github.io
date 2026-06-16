# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server at http://localhost:5173 (HMR)
npm run build    # Production bundle → dist/
npm run preview  # Serve dist/ locally to verify production build
npm run deploy   # build + push dist/ to gh-pages branch (requires manual GH Pages setup once)
```

## Architecture

Single-page static site. No framework, no TypeScript — plain ES modules bundled by Vite.

**Entry point:** `index.html` → `main.js` + `style.css`

### Three.js scene (`main.js`)

The WebGL canvas is `position:fixed` behind all content and persists across all three sections. The scene has three particle states — each is a pre-computed `Float32Array` of 50,000 positions:

| State | Trigger | Description |
|---|---|---|
| `positions` | Hero (default) | Organic spherical scatter — hero network |
| `positionsGrid` | `#stack` scroll | Isometric 3D grid |
| `positionsSingularity` | `#contact` scroll | Dense orb offset to the right (x=+55) |

`lerpPositions(from, to, t)` interpolates directly on the `BufferAttribute` array — GSAP ScrollTrigger drives `t` via `onUpdate`. The singularity state uses a `uExplosion` GLSL uniform (driven by a GSAP yoyo tween on section enter) to radially burst particles outward from the orb centre.

**Post-processing stack:** `UnrealBloomPass` → `ChromaticAberrationPass` (custom GLSL) → `VignettePass` (custom GLSL) → `OutputPass`. Chroma + vignette are disabled adaptively if FPS drops below 30.

**Scroll orchestration:** Lenis wraps native scroll and feeds `ScrollTrigger.update()` on each tick. Two `ScrollTrigger.create()` calls handle the morph transitions. Side-nav active state uses `IntersectionObserver`.

### CSS

All design tokens in `:root` at the top of `style.css`. Key ones: `--cyan #00E5FF`, `--violet #7C5CFF`, `--amber #FFB454`, `--green #00FFA3`. Cards use `--card-accent` as a per-card CSS custom property set on `.card--cyan / --violet / --amber / --green`.

### Deployment

`gh-pages` npm package pushes `dist/` to the `gh-pages` branch. The GitHub repo Settings → Pages must point to that branch (one-time manual step). `vite.config.js` has `base: '/'` — correct for the user page (`anatolij-p.github.io`), do NOT change to a sub-path.

`public/CNAME` contains the custom domain (`1334.tech`) — Vite copies it into `dist/` automatically so it survives every deploy. Do not remove it.

`img/1334_logo.png` is the master logo asset. The nav mark and favicon are both derived from it via CSS filter (`brightness(0) invert(1)`) and ImageMagick respectively — edit that one file to update all uses.

### Mobile / accessibility

Canvas and custom cursor are disabled on `< 768px` — a CSS gradient background replaces the WebGL scene. `prefers-reduced-motion` disables all animation and makes content immediately visible.
