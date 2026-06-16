# 1334 Tech

Personal landing page for Anatolij Prihosko / 1334 Tech. Cinematic, immersive design built for high visual impact — Awwwards / FWA aesthetic.

Live: [anatolij-p.github.io](https://anatolij-p.github.io)

## Stack

- **Vite** — build tool, dev server, HMR
- **Three.js** — 50k-particle WebGL scene with morphing states
- **GSAP + ScrollTrigger** — scroll-driven particle morphs and entrance animations
- **Lenis** — smooth-scroll driver feeding ScrollTrigger
- **gh-pages** — deploys `dist/` to the `gh-pages` branch

## Sections

| Section | Three.js state | Description |
|---|---|---|
| `#hero` | Organic spherical scatter | Intro — name, role, CTA |
| `#stack` | Isometric 3D grid | Tech stack cards with marquee strip |
| `#contact` | Dense orb (x=+55) | Contact links + explosion animation on enter |

## Dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # verify production build locally
npm run deploy   # push dist/ to gh-pages branch
```

## Deployment

Hosted on GitHub Pages via the `gh-pages` branch. GitHub repo → Settings → Pages must point to that branch (one-time setup). `vite.config.js` uses `base: '/'` — correct for a user page, do not change to a sub-path.

## Mobile

WebGL canvas and custom cursor are disabled below `768px` — a CSS gradient background replaces the scene. `prefers-reduced-motion` disables all animation.
