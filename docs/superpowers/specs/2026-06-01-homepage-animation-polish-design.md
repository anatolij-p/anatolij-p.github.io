# Homepage Animation Polish Design

## Goal

Polish the existing static homepage interactions without changing the overall page structure, visual identity, or runtime dependencies. The changes should make the site feel more intentional while keeping it fast, accessible, and simple to maintain.

## Scope

- Remove the personal name from the top-left header area, leaving only `1334 TECH`.
- Add subtle hover/focus button animation to `1334 TECH`, `Connect on LinkedIn`, and the replay/reload button.
- Slow the existing intro, tech listing, info listing, loading text, and terminal transition timings by about 25%.
- Make the intro terminal elements appear like CLI text being typed.
- Add an `X` skip button during the intro overlay.
- Ensure `Connect on LinkedIn` opens `https://www.linkedin.com/in/anatolij-prihosko/` in a new tab.

## Chosen Approach

Use targeted polish on the current implementation instead of replacing the intro animation system. This keeps risk low for the static GitHub Pages site and preserves the current cyber/terminal aesthetic.

The selected button animation style is a subtle lift and cyan glow. On hover and keyboard focus, supported interactive elements should raise slightly, brighten, and gain a cyan glow. This should be implemented with CSS transitions and should avoid layout shifts.

## Files and Boundaries

- `index.html`: update header markup, LinkedIn anchor attributes, and add the intro skip button markup.
- `css/style.css`: add/adjust styles for hover/focus states, skip button, terminal typing presentation, and reduced-motion behavior.
- `css/style.min.css`: keep deployed CSS in sync with `css/style.css`.
- `js/index.js`: adjust animation timings, implement typed terminal reveal, and wire the skip button.
- `js/index.min.js`: keep deployed JavaScript in sync with `js/index.js`.

Do not edit vendored Typed.js files unless unavoidable. The current need can be handled in site-specific code.

## Behavior Details

### Header

The top-left brand area should no longer display `Anatolij Prihosko`. The visible brand should remain `1334 TECH`.

### Buttons and Links

`1334 TECH`, `Connect on LinkedIn`, and the replay/reload control should share a subtle interactive style:

- smooth transition;
- slight upward movement;
- cyan glow or brighter border/fill;
- visible keyboard focus state;
- no disruptive glitching or large movement.

The LinkedIn button should open `https://www.linkedin.com/in/anatolij-prihosko/` in a new browser tab and include safe external-link attributes such as `rel="noopener noreferrer"`.

### Intro and Terminal Sequence

Existing animation durations and staggers should be increased by roughly 25%. This should apply to the tech/info listing reveals and the transition around loading text and terminal display.

Terminal elements should reveal in a CLI-like way. The preferred effect is typed text or typed lines, not a simple bulk fade-in. The implementation should remain lightweight and should not add new dependencies.

### Skip Intro

The intro overlay should include a visible `X` button. Clicking it should immediately stop or bypass the intro timeline, hide the intro/loading/terminal elements, and show the final page state. The skip action should not leave hidden timers or animations that later alter the page unexpectedly.

### Reduced Motion

For users with `prefers-reduced-motion: reduce`, animations should remain minimal. Long typing effects should be skipped or shortened so the final content becomes available quickly.

## Testing and Verification

Because the repo has no package manager or automated test setup, verification is manual:

1. Serve the site statically, for example with `python3 -m http.server 8000`.
2. Open `http://localhost:8000/`.
3. Confirm the header only shows `1334 TECH`.
4. Confirm the three interactive controls have subtle hover/focus animation.
5. Confirm the intro is slightly slower and terminal content appears typed.
6. Confirm the `X` skip button immediately shows the final page.
7. Confirm LinkedIn opens the approved URL in a new tab.
8. Check browser console for runtime errors.

## Out of Scope

- Replacing the whole animation system.
- Adding build tooling or new runtime dependencies.
- Changing the domain, `CNAME`, content copy beyond the requested header name removal, or vendored library files.
