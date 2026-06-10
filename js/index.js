const ANIME_URL = 'https://esm.sh/animejs@4.4.0';

const root = document.documentElement;
const shell = document.querySelector('.shell');
const replay = document.querySelector('.replay');
const starfield = document.querySelector('.starfield');
const interactiveSelector = 'a, button, input, select, textarea, [tabindex]';
const floaties = Array.from(document.querySelectorAll('.floaty')).filter((el) => !el.querySelector(interactiveSelector));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let intro = document.querySelector('.intro');
const introMarkup = intro ? intro.innerHTML : '';
const introLabel = intro ? intro.getAttribute('aria-label') : 'Animated profile signal';
let animeApi = null;
let activeTimeline = null;
let introCleanupTimer = null;
let introFailOpenTimer = null;
let introRunId = 0;
let typingTimers = [];
let typingStarted = false;
let introBypassed = false;
const INTRO_SPEED = 1.25;

const state = { x: 0, y: 0, tx: 0, ty: 0 };

function createStarfield(count = 240) {
  if (!starfield) return;
  starfield.textContent = '';
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement('span');
    const size = Math.random() * 2.3 + (Math.random() > 0.9 ? 1.8 : 0.6);
    star.className = ['star', ['', 'accent-cyan', 'accent-violet', 'accent-green'][Math.floor(Math.random() * 4)]].join(' ').trim();
    star.style.setProperty('--x', `${Math.random() * 100}%`);
    star.style.setProperty('--y', `${Math.random() * 100}%`);
    star.style.setProperty('--s', `${size}px`);
    star.style.setProperty('--o', `${Math.random() * 0.75 + 0.2}`);
    star.style.setProperty('--tw', `${Math.random() * 3.8 + 2.4}s`);
    star.style.setProperty('--drift', `${Math.random() * 18 + 12}s`);
    star.style.setProperty('--delay', `${-(Math.random() * 4.5)}s`);
    star.style.setProperty('--delay2', `${-(Math.random() * 8)}s`);
    starfield.appendChild(star);
  }
}

function resetIntroText() {
  document.querySelectorAll('.intro-grid p').forEach((p) => { p.textContent = 'Signal'; });
  document.querySelectorAll('.matrix p').forEach((p, i) => { p.textContent = ['0101 0011', '1110 0100', '0011 1001', 'commerce', 'api', 'pim', 'systems', 'routing', 'normalizing', 'monitoring', 'production', 'reliability', 'handoffs'][i] || 'signal'; });
  document.querySelectorAll('.features p').forEach((p, i) => { p.textContent = ['Commerce', 'Systems', 'APIs', 'Automation', 'Reliability', 'PIM', 'Product Data', 'Delivery', 'Frontend', 'Backend', 'Operations'][i] || 'Systems'; });
  const finalSignal = document.querySelector('.final-signal');
  if (finalSignal) finalSignal.textContent = 'ANATOLIJ PRIHOSKO';
}

function scaled(value) {
  return Math.round(value * INTRO_SPEED);
}

function clearIntroTimers() {
  if (introCleanupTimer) {
    window.clearTimeout(introCleanupTimer);
    introCleanupTimer = null;
  }
  if (introFailOpenTimer) {
    window.clearTimeout(introFailOpenTimer);
    introFailOpenTimer = null;
  }
}

function setShellInteractive(isInteractive) {
  if (!shell) return;
  shell.inert = !isInteractive;
  if (isInteractive) shell.removeAttribute('aria-hidden');
  else shell.setAttribute('aria-hidden', 'true');
}

function removeIntroOverlay(runId) {
  if (runId !== introRunId || introBypassed) return;
  if (intro) {
    resetIntroText();
    intro.remove();
    intro = null;
  }
  setShellInteractive(true);
}

function completeIntro(runId) {
  if (runId !== introRunId || introBypassed) return;
  clearIntroTimers();
  activeTimeline = null;
}

function clearTypingTimers() {
  typingTimers.forEach((timer) => window.clearTimeout(timer));
  typingTimers = [];
  typingStarted = false;
}

function stopActiveTimeline() {
  const tl = activeTimeline;
  activeTimeline = null;
  if (!tl) return;
  try { tl.pause?.(); } catch {}
  try { tl.cancel?.(); } catch {}
}

function finishIntro() {
  introRunId += 1;
  introBypassed = true;
  clearIntroTimers();
  clearTypingTimers();
  stopActiveTimeline();
  applyFailOpenState();
}

function wireSkipButton(currentIntro = intro) {
  const scope = currentIntro?.querySelector ? currentIntro : document;
  const skip = scope?.querySelector?.('.intro-skip');
  if (!skip || skip.dataset.bound === 'true') return;
  skip.dataset.bound = 'true';
  skip.addEventListener('click', finishIntro);
}

function prepareTerminalTyping() {
  document.querySelectorAll('.line').forEach((line) => {
    const [prefix, text] = Array.from(line.children);
    if (!prefix || !text) return;
    text.classList.add('typed-text');
    text.dataset.fullText = (text.dataset.fullText || text.textContent.trim());
    line.classList.remove('is-typing');
    text.textContent = '';
  });
}

function typeTerminalLines(runId) {
  if (typingStarted) return;
  typingStarted = true;
  const lines = Array.from(document.querySelectorAll('.line'));
  lines.forEach((line, index) => {
    const text = line.querySelector('.typed-text');
    if (!text) return;
    line.classList.add('is-typing');
    const content = text.dataset.fullText || text.textContent.trim();
    text.textContent = '';
    const startTimer = window.setTimeout(() => {
      if (runId !== introRunId) return;
      let pos = 1;
      const charDelay = scaled(34);
      const tick = () => {
        if (runId !== introRunId) return;
        text.textContent = content.slice(0, pos);
        pos += 1;
        if (pos <= content.length) {
          typingTimers.push(window.setTimeout(tick, charDelay));
        } else {
          line.classList.remove('is-typing');
        }
      };
      tick();
    }, scaled(180 + index * 180));
    typingTimers.push(startTimer);
  });
}

function ensureIntro() {
  intro = document.querySelector('.intro');
  if (intro) return intro;
  intro = document.createElement('section');
  intro.className = 'intro';
  intro.setAttribute('aria-label', introLabel);
  intro.innerHTML = introMarkup;
  document.body.prepend(intro);
  wireSkipButton(intro);
  return intro;
}

function applyFailOpenState() {
  clearTypingTimers();
  if (intro) {
    resetIntroText();
    intro.remove();
    intro = null;
  }
  document.querySelectorAll('.line').forEach((line) => {
    const text = line.querySelector('.typed-text');
    if (!text) return;
    text.textContent = text.dataset.fullText || text.textContent;
    line.classList.remove('is-typing');
  });
  if (!shell) return;
  setShellInteractive(true);
  shell.style.opacity = '1';
  shell.style.transform = 'none';
  shell.style.filter = 'none';
}

function scheduleFailOpen(runId) {
  introFailOpenTimer = window.setTimeout(() => {
    if (runId !== introRunId) return;
    introRunId += 1;
    introBypassed = true;
    clearIntroTimers();
    stopActiveTimeline();
    applyFailOpenState();
  }, scaled(42000));
}

function runIntro(api = animeApi) {
  introRunId += 1;
  const runId = introRunId;
  clearTypingTimers();
  stopActiveTimeline();
  try {
    const currentIntro = ensureIntro();
    if (!shell || !currentIntro) return;
    wireSkipButton(currentIntro);
    if (shell.contains(document.activeElement)) {
      currentIntro.querySelector('.intro-skip')?.focus({ preventScroll: true });
    }
    setShellInteractive(false);
    resetIntroText();
    prepareTerminalTyping();
    shell.style.opacity = '0';
    shell.style.transform = 'translateY(18px) scale(.992)';
    shell.style.filter = 'blur(10px)';
    document.querySelectorAll('.slide').forEach((slide) => { slide.style.opacity = '0'; slide.style.transform = 'translateY(8px)'; });
    const loader = document.querySelector('.loader-ring');
    if (loader) loader.style.opacity = '0';
    if (reduceMotion || !api) {
      currentIntro.remove();
      applyFailOpenState();
      return;
    }
    const { createTimeline, scrambleText, stagger } = api;
    const tl = createTimeline();
    tl.add('.loader-ring', { opacity: [0, .88], rotate: [0, 270], scale: [.8, 1.02], duration: scaled(980), ease: 'inOutSine' });
    tl.add('.intro-grid', { opacity: { to: 1, duration: scaled(220), ease: 'linear' }, translateY: [12, 0], scale: [{ from: .94, to: 1, duration: scaled(980), ease: 'out(3)' }] }, '<<+=120');
    tl.add('.intro-grid p.center', { color: { from: 'var(--gold)', to: 'var(--cyan)' }, innerHTML: scrambleText({ override: ' ', ease: 'inQuad', duration: scaled(460), from: 'center', cursor: '░▒▓█' }) }, '<<');
    tl.add('.intro-grid p:not(.center)', { color: { to: 'var(--red)' }, innerHTML: scrambleText({ override: ' ', from: 'center', duration: scaled(500), revealDelay: scaled(180), cursor: '░▒▓', perturbation: .22 }) }, stagger([scaled(80), scaled(520)], { grid: true, from: 'center', ease: 'out(2.5)', start: '<<' }));
    tl.add('.intro-grid p:not(.center)', { innerHTML: scrambleText({ text: '', override: false, from: 'center', ease: 'outQuad', reversed: true, duration: scaled(460), cursor: '░▒▓' }) }, '<+=120');
    tl.add('.intro-grid p.center', { color: { to: 'var(--cyan)' }, duration: scaled(520), ease: 'inOutSine', innerHTML: scrambleText({ text: 'COMPLEX SYSTEMS', ease: 'inQuad', override: false, from: 'center', duration: scaled(640), perturbation: .18 }) }, '<<');
    tl.add('.intro-grid p.center', { innerHTML: scrambleText({ text: 'MADE RELIABLE', override: false, from: 'right', duration: scaled(560), settleDuration: scaled(240), ease: 'out(2.5)', cursor: '░▒▓' }) }, '<+=420');
    tl.add('.intro-grid', { opacity: 0, translateY: -6, duration: scaled(240), ease: 'inQuad' }, '<+=160');
    tl.set('.matrix', { opacity: 1 }, '<<-=100');
    tl.add('.matrix p', { innerHTML: scrambleText({ override: ' ', from: 'random', duration: scaled(470), revealDelay: scaled(100), cursor: '_01', perturbation: .58 }) }, stagger([0, scaled(520)], { grid: true, from: 'center', ease: 'out(2.5)', start: '<<' }));
    tl.add('.matrix p', { scale: [.92, 1.05, 1], color: { to: 'var(--green)' }, duration: scaled(440), ease: 'inOutSine' }, stagger([0, scaled(70)], { grid: true, from: 'center', start: '<<' }));
    tl.add('.matrix p', { innerHTML: scrambleText({ text: '', override: false, from: 'center', reversed: true, duration: scaled(280), cursor: '░▒▓' }) }, stagger([0, scaled(200)], { grid: true, from: 'center', ease: 'out(2.5)', start: '<+=150' }));
    tl.set('.features', { opacity: 1 }, '<<');
    tl.add('.features p', { innerHTML: scrambleText({ override: ' ', from: 'center', duration: scaled(400), revealDelay: scaled(140), cursor: '░▒▓', perturbation: .38 }) }, stagger([0, scaled(560)], { grid: true, from: 'center', ease: 'out(2.5)', start: '<<+=100', reversed: true }));
    tl.add('.features p', { innerHTML: scrambleText({ text: '&nbsp;', override: false, from: 'center', reversed: true, duration: scaled(260), cursor: '░▒▓' }) }, stagger([0, scaled(180)], { grid: true, from: 'center', ease: 'out(2.5)', start: '<+=160' }));
    tl.set('.final-slide', { opacity: 1 }, '<<');
    tl.add('.loader-ring', { rotate: [270, 640], scale: [1.02, .72], opacity: [.82, .28], duration: scaled(780), ease: 'inOutSine' }, '<<');
    tl.add('.handoff-glow', { opacity: [0, .9, 0], scale: [.72, 1.18], duration: scaled(980), ease: 'inOutSine' }, '<<+=80');
    tl.add('.final-slide p', { opacity: [0, 1], translateY: [12, 0], filter: ['blur(10px)', 'blur(0px)'], ease: 'out(3)', innerHTML: scrambleText({ override: ' ', from: 'center', settleDuration: scaled(260), revealRate: 30, perturbation: .16, cursor: '░▒▓' }) }, '<+=120');
    tl.add('.final-slide p', { color: { to: 'var(--cyan)', duration: scaled(520) }, duration: scaled(640), ease: 'inOutSine', innerHTML: scrambleText({ text: 'ANATOLIJ PRIHOSKO', override: false, from: 'right', cursor: '░▒▓', duration: scaled(640), ease: 'out(2.5)' }) }, '<+=320');
    tl.add('.intro', { opacity: 0, duration: scaled(280), ease: 'outQuad', onBegin: () => { if (currentIntro) currentIntro.classList.add('is-exiting'); }, onComplete: () => removeIntroOverlay(runId) }, '<+=220');
    tl.add('.shell', { opacity: 1, translateY: [18, 0], scale: [.992, 1], filter: ['blur(10px)', 'blur(0px)'], duration: scaled(760), ease: 'out(3)' }, '<+=40');
    tl.add('.nav', { opacity: [0, 1], translateY: [-10, 0], duration: scaled(420), ease: 'out(3)' }, '<<+=100');
    tl.add('.kicker', { opacity: [0, 1], translateX: [-14, 0], duration: scaled(360), ease: 'out(3)' }, '<+=60');
    tl.add('h1', { opacity: [0, 1], translateY: [24, 0], filter: ['blur(16px)', 'blur(0px)'], duration: scaled(680), ease: 'out(4)' }, '<+=60');
    tl.add('.signal', { innerHTML: scrambleText({ text: 'made reliable.', override: false, from: 'right', duration: scaled(560), cursor: '░▒▓' }) }, '<<+=160');
    tl.add('.bio', { opacity: [0, 1], translateY: [12, 0], duration: scaled(420), ease: 'out(3)' }, '<+=120');
    tl.add('.button', { opacity: [0, 1], translateY: [12, 0], scale: [.96, 1], duration: scaled(400), ease: 'out(2.5)' }, stagger(scaled(72), { start: '<+=90' }));
    tl.add('.panel', { opacity: [0, 1], translateX: [36, 0], rotateY: [-8, 0], duration: scaled(620), ease: 'out(3)' }, '<-=360');
    tl.add('.line', { opacity: [0, 1], translateX: [12, 0], duration: scaled(260), ease: 'out(3)', onBegin: () => typeTerminalLines(runId) }, stagger(scaled(70), { start: '<+=160' }));
    tl.add('.chip-card', { opacity: [0, 1], translateY: [14, 0], scale: [.96, 1], duration: scaled(360), ease: 'out(2.5)' }, stagger(scaled(70), { start: '<+=90' }));
    tl.add('.footer', { opacity: [0, 1], translateY: [10, 0], duration: scaled(320), ease: 'out(3)', onComplete: () => completeIntro(runId) }, '<+=100');
    tl.init();
    activeTimeline = tl;
    introCleanupTimer = window.setTimeout(() => {
      removeIntroOverlay(runId);
    }, scaled(20000));
    scheduleFailOpen(runId);
  } catch {
    introRunId += 1;
    introBypassed = true;
    clearIntroTimers();
    stopActiveTimeline();
    applyFailOpenState();
  }
}

async function initIntro() {
  try {
    animeApi = await import(ANIME_URL);
  } catch {
    applyFailOpenState();
    return;
  }
  if (introBypassed) return;
  runIntro(animeApi);
}

function setupPointerParallax() {
  if (reduceMotion) return;
  window.addEventListener('pointermove', (event) => {
    state.tx = event.clientX / window.innerWidth - 0.5;
    state.ty = event.clientY / window.innerHeight - 0.5;
  });
  window.addEventListener('pointerleave', () => { state.tx = 0; state.ty = 0; });
  const frame = () => {
    state.x += (state.tx - state.x) * 0.075;
    state.y += (state.ty - state.y) * 0.075;
    root.style.setProperty('--ry', `${state.x * 6.5}deg`);
    root.style.setProperty('--rx', `${state.y * -5.8}deg`);
    root.style.setProperty('--mx', `${state.x * 88}px`);
    root.style.setProperty('--my', `${state.y * 88}px`);
    floaties.forEach((el) => {
      const depth = Number(el.dataset.depth || 20);
      el.style.transform = `translate3d(${state.x * depth}px, ${state.y * depth}px, ${depth / 3}px) rotateX(${state.y * -2}deg) rotateY(${state.x * 2}deg)`;
    });
    window.requestAnimationFrame(frame);
  };
  window.requestAnimationFrame(frame);
}

createStarfield();
setupPointerParallax();
wireSkipButton(document);
if (intro && !reduceMotion) setShellInteractive(false);
replay?.addEventListener('click', () => { introBypassed = false; runIntro(); });
initIntro();
