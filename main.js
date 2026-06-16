import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const isMobile = window.matchMedia('(max-width: 768px)').matches
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ─── Preloader ────────────────────────────────────────────
const BOOT_LINES = [
  '> INITIALISING 1334.TECH',
  '> LOADING...',
  '> READY',
]

function runPreloader() {
  return new Promise(resolve => {
    const container = document.getElementById('preloader-lines')
    const cursor = document.getElementById('preloader-cursor')
    let lineIndex = 0
    let charIndex = 0

    function typeLine() {
      if (lineIndex >= BOOT_LINES.length) {
        cursor.remove()
        setTimeout(() => {
          const preloader = document.getElementById('preloader')
          preloader.classList.add('hidden')
          preloader.addEventListener('transitionend', resolve, { once: true })
        }, 400)
        return
      }
      const line = BOOT_LINES[lineIndex]
      if (charIndex === 0) {
        const el = document.createElement('div')
        container.appendChild(el)
        container.appendChild(cursor)
      }
      const els = container.querySelectorAll('div')
      els[lineIndex].textContent = line.slice(0, charIndex + 1)
      charIndex++
      if (charIndex < line.length) {
        setTimeout(typeLine, 22)
      } else {
        lineIndex++
        charIndex = 0
        setTimeout(typeLine, 180)
      }
    }

    typeLine()
  })
}

// ─── Custom Cursor ────────────────────────────────────────
function initCursor() {
  if (isMobile) return
  const dot = document.getElementById('cursor-dot')
  const ring = document.getElementById('cursor-ring')
  let mx = 0, my = 0, rx = 0, ry = 0

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY
    dot.style.left = mx + 'px'
    dot.style.top = my + 'px'
  })

  const hoverEls = document.querySelectorAll('a, button, .card, .tech-item, .sidenav-item')
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('expanded'))
    el.addEventListener('mouseleave', () => ring.classList.remove('expanded'))
  })

  function lerpCursor() {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    ring.style.left = rx + 'px'
    ring.style.top = ry + 'px'
    requestAnimationFrame(lerpCursor)
  }
  lerpCursor()
}

// ─── Smooth Scroll ────────────────────────────────────────
function initScroll() {
  const lenis = new Lenis({ lerp: 0.08, duration: 1.4 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add(time => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  // side nav active state
  const sections = document.querySelectorAll('.section')
  const navItems = document.querySelectorAll('.sidenav-item')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(n => n.classList.remove('active'))
        const active = document.querySelector(`.sidenav-item[data-section="${entry.target.id}"]`)
        if (active) active.classList.add('active')
      }
    })
  }, { threshold: 0.4 })
  sections.forEach(s => observer.observe(s))

  // smooth nav click
  document.querySelectorAll('[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(a.getAttribute('href'))
      if (target) lenis.scrollTo(target, { duration: 1.6, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    })
  })

  return lenis
}

// ─── Reduced-motion fallback: just set final state ─────────
function revealAllImmediately() {
  document.querySelectorAll(
    '.reveal-word, .mono-label, .hero-body, .cta-btn, .card, .section-h2, .contact-h2, .contact-h2 span'
  ).forEach(el => {
    el.classList.add('visible')
    el.style.opacity = '1'
    el.style.transform = 'none'
    el.style.clipPath = 'none'
  })
  const canvas = document.getElementById('webgl')
  if (canvas) canvas.style.opacity = '1'
}

// ─── Initial cinematic load reveal ─────────────────────────
function initLoadReveal(three) {
  // 1. Canvas fade-in + bloom flash
  if (three && three.canvas) {
    gsap.to(three.canvas, { opacity: 1, duration: 1.4, ease: 'power2.out' })
  }
  if (three && three.bloom) {
    three.bloom.strength = 2.0
    gsap.to(three.bloom, { strength: 1.0, duration: 1.2, ease: 'power3.out' })
  }

  // 2. Orchestrated hero text sequence
  const monoLabel = document.querySelector('#hero .mono-label')
  const words = document.querySelectorAll('#hero .reveal-word')
  const heroBody = document.querySelector('#hero .hero-body')
  const cta = document.querySelector('#hero .cta-btn')
  const scrollCue = document.querySelector('.scroll-cue')

  if (scrollCue) gsap.set(scrollCue, { opacity: 0, y: 12 })

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })

  tl.fromTo(monoLabel,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }, 0.1)

  tl.fromTo(words,
    { clipPath: 'inset(0 100% 0 0)', y: 24 },
    { clipPath: 'inset(0 0% 0 0)', y: 0, duration: 0.9, stagger: 0.15, ease: 'expo.out' }, 0.25)

  tl.fromTo(heroBody,
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.7 }, '-=0.45')

  tl.fromTo(cta,
    { opacity: 0, y: 16, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6,
      onStart: () => { if (cta) cta.classList.add('cta-glow-pulse') },
      onComplete: () => { if (cta) cta.classList.remove('cta-glow-pulse') } }, '-=0.25')

  if (scrollCue) {
    tl.to(scrollCue, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
  }
}

// ─── Section scroll transitions (S2 + S3) ──────────────────
function initSectionReveals() {
  // S2 — #stack
  const stackLabel = document.querySelector('#stack .mono-label')
  const stackH2 = document.querySelector('#stack .section-h2')
  const cards = gsap.utils.toArray('#stack .card')

  gsap.set(stackLabel, { opacity: 0, x: -30 })
  gsap.set(stackH2, { clipPath: 'inset(0 100% 0 0)' })
  gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 })

  ScrollTrigger.create({
    trigger: '#stack',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to(stackLabel, { opacity: 1, x: 0, duration: 0.6 }, 0)
      tl.to(stackH2, { clipPath: 'inset(0 0% 0 0)', duration: 1.0, ease: 'expo.out' }, 0.1)
      tl.to(cards, {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12,
        clearProps: 'transform,scale',
      }, 0.35)
    },
  })

  // S3 — #contact
  const contactLabel = document.querySelector('#contact .mono-label')
  const contactLines = gsap.utils.toArray('#contact .contact-h2 span')
  const contactCta = document.querySelector('#contact .contact-cta')

  gsap.set(contactLabel, { opacity: 0, x: -30 })
  gsap.set(contactLines, { opacity: 0, y: 40 })
  gsap.set(contactCta, { opacity: 0, y: 30 })

  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to(contactLabel, { opacity: 1, x: 0, duration: 0.6 }, 0)
      tl.to(contactLines, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.1)
      tl.to(contactCta, {
        opacity: 1, y: 0, duration: 0.6,
        onStart: () => { if (contactCta) contactCta.classList.add('cta-glow-pulse') },
        onComplete: () => { if (contactCta) contactCta.classList.remove('cta-glow-pulse') },
      }, 0.35)
    },
  })
}

// ─── Three.js Scene ───────────────────────────────────────
function initThree() {
  if (isMobile || reducedMotion) return

  const canvas = document.getElementById('webgl')
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 80)

  // ── Particle system ──────────────────────────────────────
  const PARTICLE_COUNT = 50000
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const positionsGrid = new Float32Array(PARTICLE_COUNT * 3)
  const positionsSingularity = new Float32Array(PARTICLE_COUNT * 3)
  const sizes = new Float32Array(PARTICLE_COUNT)
  const colors = new Float32Array(PARTICLE_COUNT * 3)

  // Hero state: organic network topology
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 20 + Math.random() * 60
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = (Math.random() - 0.5) * 120

    // colour: mix of cyan, violet, white
    const t = Math.random()
    if (t < 0.5) { colors[i*3]=0; colors[i*3+1]=0.9; colors[i*3+2]=1 }
    else if (t < 0.8) { colors[i*3]=0.48; colors[i*3+1]=0.36; colors[i*3+2]=1 }
    else { colors[i*3]=0.9; colors[i*3+1]=0.93; colors[i*3+2]=0.95 }

    sizes[i] = 0.3 + Math.random() * 1.2
  }

  // Grid state: perfect isometric grid
  const gridSide = Math.ceil(Math.cbrt(PARTICLE_COUNT))
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (i % gridSide) - gridSide / 2
    const y = (Math.floor(i / gridSide) % gridSide) - gridSide / 2
    const z = Math.floor(i / (gridSide * gridSide)) - gridSide / 2
    positionsGrid[i * 3]     = x * 4
    positionsGrid[i * 3 + 1] = y * 4
    positionsGrid[i * 3 + 2] = z * 4
  }

  // Singularity state: orb offset right so text on the left stays readable
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = Math.pow(Math.random(), 2) * 14
    positionsSingularity[i * 3]     = r * Math.sin(phi) * Math.cos(theta) + 55
    positionsSingularity[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 0
    positionsSingularity[i * 3 + 2] = r * Math.cos(phi)
  }

  const geometry = new THREE.BufferGeometry()
  const posAttr = new THREE.BufferAttribute(positions.slice(), 3)
  posAttr.setUsage(THREE.DynamicDrawUsage)
  geometry.setAttribute('position', posAttr)
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

  const vertexShader = `
    attribute float aSize;
    uniform float uTime;
    uniform float uPixelRatio;
    uniform float uExplosion;
    varying vec3 vColor;
    varying float vDist;

    void main() {
      vColor = color;
      vec3 pos = position;

      // radial explosion from orb centre when in contact section
      if (uExplosion > 0.0) {
        vec3 orbCentre = vec3(55.0, 0.0, 0.0);
        vec3 dir = normalize(pos - orbCentre + vec3(0.001, 0.001, 0.001));
        float wave = sin(uTime * 1.2 + length(pos - orbCentre) * 0.3) * 0.5 + 0.5;
        pos += dir * uExplosion * 80.0 * wave;
      }

      vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
      vDist = length(mvPos.xyz);
      float pulse = sin(uTime * 1.5 + pos.x * 0.05 + pos.y * 0.05) * 0.4 + 0.6;
      gl_PointSize = aSize * uPixelRatio * pulse * (120.0 / -mvPos.z);
      gl_Position = projectionMatrix * mvPos;
    }
  `

  const fragmentShader = `
    varying vec3 vColor;
    varying float vDist;

    void main() {
      float d = length(gl_PointCoord - vec2(0.5));
      if (d > 0.5) discard;
      float alpha = 1.0 - smoothstep(0.0, 0.5, d);
      float glow = exp(-d * 5.0);
      vec3 col = vColor * (1.0 + glow * 0.8);
      gl_FragColor = vec4(col, alpha * 0.65);
    }
  `

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uExplosion: { value: 0 },
    },
    transparent: true,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // ── Connection lines (network edges) ─────────────────────
  const LINE_COUNT = 800
  const linePositions = new Float32Array(LINE_COUNT * 2 * 3)

  function buildEdges() {
    const src = geometry.attributes.position.array
    for (let i = 0; i < LINE_COUNT; i++) {
      const a = Math.floor(Math.random() * PARTICLE_COUNT)
      const b = Math.floor(Math.random() * PARTICLE_COUNT)
      linePositions[i * 6]     = src[a * 3]
      linePositions[i * 6 + 1] = src[a * 3 + 1]
      linePositions[i * 6 + 2] = src[a * 3 + 2]
      linePositions[i * 6 + 3] = src[b * 3]
      linePositions[i * 6 + 4] = src[b * 3 + 1]
      linePositions[i * 6 + 5] = src[b * 3 + 2]
    }
  }
  buildEdges()

  const lineGeo = new THREE.BufferGeometry()
  const linePosAttr = new THREE.BufferAttribute(linePositions, 3)
  linePosAttr.setUsage(THREE.DynamicDrawUsage)
  lineGeo.setAttribute('position', linePosAttr)

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x00E5FF,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const lines = new THREE.LineSegments(lineGeo, lineMat)
  scene.add(lines)

  // ── Post-processing ───────────────────────────────────────
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.0, 0.6, 0.15
  )
  composer.addPass(bloom)

  // Chromatic aberration pass
  const chromaPass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      uOffset: { value: 0.003 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float uOffset;
      varying vec2 vUv;
      void main() {
        vec2 dir = vUv - 0.5;
        float r = texture2D(tDiffuse, vUv + dir * uOffset).r;
        float g = texture2D(tDiffuse, vUv).g;
        float b = texture2D(tDiffuse, vUv - dir * uOffset).b;
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,
  })
  composer.addPass(chromaPass)

  // Vignette pass
  const vignettePass = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      varying vec2 vUv;
      void main() {
        vec4 col = texture2D(tDiffuse, vUv);
        float vignette = 1.0 - smoothstep(0.4, 1.2, length(vUv - 0.5) * 1.8);
        gl_FragColor = vec4(col.rgb * vignette, col.a);
      }
    `,
  })
  composer.addPass(vignettePass)

  composer.addPass(new OutputPass())

  // ── Mouse parallax ────────────────────────────────────────
  let mouseX = 0, mouseY = 0
  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
  })

  // ── Scroll state morphs ───────────────────────────────────
  const state = { progress: 0 }
  const morphPositions = new Float32Array(PARTICLE_COUNT * 3)

  function lerpPositions(from, to, t) {
    const pos = geometry.attributes.position.array
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      pos[i] = from[i] + (to[i] - from[i]) * t
    }
    geometry.attributes.position.needsUpdate = true
  }

  ScrollTrigger.create({
    trigger: '#stack',
    start: 'top 80%',
    end: 'top 20%',
    onUpdate: self => {
      const t = self.progress
      lerpPositions(positions, positionsGrid, t)
      lineMat.opacity = 0.06 * (1 - t)
      bloom.strength = 1.0 - t * 0.2
    },
    onLeaveBack: () => {
      lerpPositions(positions, positionsGrid, 0)
      lineMat.opacity = 0.06
      bloom.strength = 1.0
    },
  })

  let explosionTween = null
  let rotationTween = null
  let inContact = false

  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 80%',
    end: 'top 20%',
    onUpdate: self => {
      const t = self.progress
      lerpPositions(positionsGrid, positionsSingularity, t)
      bloom.strength = 0.8 + t * 0.5
      camera.position.z = 80 - t * 15
    },
    onEnter: () => {
      // freeze rotation so orb stays on the right (x=+55)
      inContact = true
      rotationTween = gsap.to(particles.rotation, { y: 0, x: 0, duration: 1.2, ease: 'power2.out' })

      // start pulsing explosion once orb is formed
      if (!explosionTween) {
        explosionTween = gsap.to(material.uniforms.uExplosion, {
          value: 1,
          duration: 1.8,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          onUpdate: () => {
            bloom.strength = 0.8 + material.uniforms.uExplosion.value * 0.9
          },
        })
      }
    },
    onLeaveBack: () => {
      inContact = false
      if (rotationTween) { rotationTween.kill(); rotationTween = null }
      if (explosionTween) { explosionTween.kill(); explosionTween = null }
      material.uniforms.uExplosion.value = 0
      lerpPositions(positionsGrid, positionsSingularity, 0)
      bloom.strength = 0.8
      camera.position.z = 80
    },
  })

  // ── Render loop ───────────────────────────────────────────
  let lastTime = 0
  let fps = 60
  let qualityReduced = false

  function animate(timestamp) {
    requestAnimationFrame(animate)
    const delta = timestamp - lastTime
    fps = fps * 0.95 + (1000 / delta) * 0.05
    lastTime = timestamp

    // adaptive quality
    if (fps < 30 && !qualityReduced) {
      qualityReduced = true
      chromaPass.enabled = false
      vignettePass.enabled = false
    }

    const t = timestamp * 0.001
    material.uniforms.uTime.value = t

    // slow orbital + mouse parallax (frozen in S3 so orb stays on the right)
    if (!inContact) {
      particles.rotation.y = t * 0.03 + mouseX * 0.08
      particles.rotation.x = mouseY * 0.05
    }
    lines.rotation.y = particles.rotation.y
    lines.rotation.x = particles.rotation.x

    composer.render()
  }

  animate(0)

  // ── Resize handler ────────────────────────────────────────
  window.addEventListener('resize', () => {
    const w = window.innerWidth, h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
    material.uniforms.uPixelRatio.value = renderer.getPixelRatio()
  })

  // WebGL context loss
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault()
    canvas.style.display = 'none'
  })

  return { bloom, material, canvas }
}

// ─── Boot ─────────────────────────────────────────────────
document.getElementById('footer-year').textContent = new Date().getFullYear()

async function boot() {
  if (reducedMotion) {
    document.getElementById('preloader').classList.add('hidden')
    initCursor()
    initScroll()
    revealAllImmediately()
    return
  }

  await runPreloader()

  initCursor()
  initScroll()
  const three = initThree()
  initLoadReveal(three)
  initSectionReveals()
}

boot()
