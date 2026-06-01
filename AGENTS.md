# Repository Instructions

## Project shape
- This is a pure static GitHub Pages site for `1334.tech`; there is no package manager manifest, lockfile, CI workflow, or build/test/lint config in the repo.
- `CNAME` sets the production custom domain to `1334.tech`; do not remove or rename it unless changing GitHub Pages domain setup.
- `index.html` is the page entrypoint and loads deployed local assets from `css/style.min.css` and `js/index.min.js`.

## Editing assets
- Keep source and deployed asset pairs in sync: `css/style.css` ↔ `css/style.min.css`, `js/index.js` ↔ `js/index.min.js`, and `js/typing.js` ↔ `js/typing.min.js`.
- There is no minification script checked in. If you edit an unminified asset, update the matching `.min.*` file manually or with an external minifier and verify `index.html` still references the intended file.
- `js/typing.js` / `js/typing.min.js` are vendored Typed.js code; prefer changing usage in `index.html` or `js/index.js` over modifying the vendor copy.

## Runtime dependencies
- External libraries are CDN-loaded from `index.html`: animate.css 4.1.1, Bootstrap 5.3.3, jQuery 3.7.1, particles.js 2.0.0, and typed.js 2.1.0.
- `js/index.js` depends on browser globals from those CDNs (`$`, `particlesJS`, `Typed`); keep script ordering in `index.html` intact.

## Verification
- There are no repo-native automated checks. For visual/runtime changes, serve the directory as static files, for example `python3 -m http.server 8000`, then open `http://localhost:8000/` and check the console.
