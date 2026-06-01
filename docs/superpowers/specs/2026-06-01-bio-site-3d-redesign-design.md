# Bio Site 3D Redesign Design

## Goal
Rebuild the one-page `1334.tech` bio site as a polished, APIANT-inspired senior web developer profile with an animated terminal, scroll-driven CV scenes, and a living Three.js data-nebula background.

## Constraints
- Work on branch `redesign-apiant-3d`.
- Keep the repository a no-build static GitHub Pages site.
- Use CDN-loaded browser libraries only; no app bundler.
- Add a `Makefile` for local serving, production asset optimization, and GitHub Pages deployment.
- Keep source/deployed asset pairs in sync: `css/style.css`/`css/style.min.css` and `js/index.js`/`js/index.min.js`.
- Use a placeholder `cv.md` for now as the runtime content source.
- Keep all important profile text in HTML/DOM-rendered terminal content, not canvas-only.

## Page Structure
The site remains one page with a pinned hero/stage and a footer.

1. **Top navigation**
   - Tiny `img/1334_logo.png` mark next to `1334 TECH` in the top-left.
   - Compact navigation labels with small icons.
   - LinkedIn rendered as an icon-style button, not text.

2. **Pinned scroll stage**
   - Left side: current CV scene title, short explanatory text, and expertise cards.
   - Right side: animated terminal panel.
   - Background: Three.js data galaxy/nebula.

3. **CV scenes**
   - `profile`: identity and positioning.
   - `expertise`: eCommerce, integrations, PIM, full-stack delivery.
   - `projects`: selected/fake project examples from `cv.md`.
   - `timeline`: career-style milestones from `cv.md`.
   - `contact`: LinkedIn/contact CTA.

4. **Footer**
   - Accepted footer design: dense low-opacity binary field with cyan, blue, and muted gold layers.
   - Binary layers breathe at different speeds over a dark gradient with radial fade.
   - Include `1334 TECH`, short positioning text, LinkedIn icon, and a blinking terminal cursor.

## Visual Style
- Dark, technical, premium B2B/platform tone inspired by APIANT without copying content or layout exactly.
- Color palette: near-black/navy base, cyan and blue data highlights, muted gold accent from the 1334 logo.
- Typography: refined sans-serif for headings/body; monospace for terminal and binary/CLI details.
- Use glassy panels, subtle borders, glow, blur, and depth rather than bright flat blocks.

## Three.js Data Nebula
The background should look like a huge galaxy/nebula made of data:
- Clustered glowing dots like stars/nodes.
- Curved data filaments/edges connecting clusters.
- Rectangular server-like blocks embedded in the field.
- Server rectangles contain random `0` and `1` binary strings only, not readable code labels.
- Dots and rectangles move slowly and independently, not as static decoration.
- Multiple movement layers drift at different speeds.
- Mouse movement adds subtle parallax.
- Hovering expertise cards can brighten or pulse related graph clusters/routes.
- Keep opacity low enough that text and terminal remain readable.

## Terminal Behavior
The terminal is the primary interactive identity element.

- It sits on the right side of the main stage.
- It always shows a prompt and blinking block cursor, even when idle.
- Initial load animates a CLI-style profile sequence.
- Scroll changes run short loading sequences before rendering the next scene.
- Clicking an expertise card triggers:
  1. Card hover/active visual state.
  2. Terminal 3D rotate/tilt transition.
  3. CLI loader lines with icons and status output.
  4. Replacement terminal content for the clicked CV section.

Example loader tone:

```text
$ load cv.md --section ecommerce --mode interactive
◷ scanning markdown frontmatter... ok
◇ matching expertise graph nodes... 24 links
▣ hydrating terminal payload... ready
↻ rotating display plane... done
```

Different sections should have themed commands, for example:
- `load cv.md --section ecommerce`
- `load cv.md --section integrations`
- `load cv.md --section pim`
- `hydrate timeline`
- `resolve contact links`

## Scroll and Hover Interactions
- Use scroll-triggered scene changes. Scrolling down loads the next CV scene; scrolling up restores/reverses to the previous scene.
- Each scroll change should animate both the left content and terminal content.
- Expertise cards lift, glow, and slightly 3D-tilt on hover.
- Terminal gets a subtle mouse-follow tilt and stronger cyan border/glow on hover.
- LinkedIn/icon buttons scale/lift/glow on hover and have clear keyboard focus states.
- Background parallax responds to pointer movement.

## Content Source: `cv.md`
Create a placeholder `cv.md` in the repo for now. It should be human-readable but structured enough for simple runtime parsing.

Recommended sections:
- `profile`
- `summary`
- `expertise`
- `ecommerce`
- `integrations`
- `pim`
- `timeline`
- `contact`

The implementation can parse headings and simple lists rather than requiring a complex schema. If parsing fails, use hard-coded fallback content in JavaScript.

## Libraries
Use CDN-loaded libraries compatible with static GitHub Pages:
- Three.js for the data-nebula background.
- GSAP + ScrollTrigger for scroll scene transitions.
- A small Markdown parser such as marked for loading `cv.md`.

Avoid introducing Vite or an app bundling workflow. A small build helper script is allowed for minifying/optimizing static assets.

## Makefile and Production Workflow
Add a root `Makefile` with these targets:

- `make serve`
  - Serve the current working tree locally as static files.
  - Default command should be equivalent to `python3 -m http.server 8000`.
  - Print or document that the site is available at `http://localhost:8000/`.

- `make build`
  - Prepare production assets for GitHub Pages.
  - Minify `css/style.css` into `css/style.min.css`.
  - Minify `js/index.js` into `js/index.min.js`.
  - Leave vendored Typed.js alone unless it is intentionally changed.
  - Optimize image assets where practical without breaking visual quality or requiring a heavy app build pipeline.
  - Preserve `CNAME` and all static assets needed by `index.html`.

- `make deploy`
  - Run `make build` first.
  - Deploy the built static site to the `gh-pages` branch for GitHub Pages.
  - Preserve `CNAME` so the custom domain remains `1334.tech`.
  - Use a safe implementation, such as a temporary git worktree or equivalent branch checkout, so deployment does not accidentally mix source-branch-only files into the published branch.
  - The command may commit and push to `gh-pages` when a human intentionally runs it; do not run it automatically during development verification.

Build helper constraints:
- Prefer scripts that work with common local tooling and fail with a clear message if an optional optimizer is missing.
- If image optimization tools are not installed, `make build` should still minify CSS/JS and report that image optimization was skipped.
- Keep the GitHub Pages output static; no server-side runtime or package install should be required to view the deployed site.

## Accessibility and Performance
- Respect `prefers-reduced-motion`: disable scroll choreography, terminal flips, and continuous background motion; show static content with a blinking cursor only if acceptable.
- Provide readable static fallback content if WebGL or `cv.md` loading fails.
- Cap renderer pixel ratio and node counts for performance.
- Pause or reduce animation when the page is hidden.
- Keep all cards and icon buttons keyboard accessible.
- Maintain high contrast in terminal and body copy.
- Do not make scrolling impossible or trap the user in animation.

## Verification Plan
- Serve locally with `python3 -m http.server 8000`.
- Verify `make serve` starts the local static server.
- Verify `make build` updates minified CSS/JS assets and handles image optimization gracefully.
- Verify `make deploy` is present and review its commands, but do not run it unless deployment is explicitly requested.
- Open `http://localhost:8000/` and verify:
  - No console errors.
  - CSS and JS minified assets are the ones loaded by `index.html`.
  - Three.js background renders and animates.
  - Terminal always has a blinking cursor.
  - Scroll changes trigger scene animations.
  - Expertise card clicks rotate/reload terminal content.
  - Hover states work for cards, terminal, and LinkedIn icon.
  - Footer binary field breathes slowly and stays low opacity.
  - Reduced-motion mode degrades gracefully.
