---
name: motion-animations
description: >
  MASTER skill pro animace a vizuální efekty v React/Vite appkách a HTML projektechh.
  Pokrývá 19 kategorií efektů: hover/gesture animace, page transitions, grafy, parallax,
  3D efekty, fluid/blob, příroda, glitch, text efekty, loading stavy, hry, speciální efekty,
  zvuk, konfety a více. Každá kategorie má hotové demo soubory (motion-demo-01 až motion-demo-19).
  Použij VŽDY když uživatel zmíní: animace, efekt, motion, přechod stránek, loading,
  skeleton screen, konfety, blob, parallax, glitch, neon, typewriter, spinner, hover efekt,
  "chci aby to vypadalo lépe", "přidej animaci", "oživit appku", Mystická Apatyka vizuál,
  nebo jakýkoliv vizuální efekt do React/Vite appky.
  Stav: 24. 6. 2026.
---

# Motion Animations — MASTER Skill

> Kompletní katalog animačních efektů pro Zdeny projekty.
> Demo soubory: `motion-demo-01.html` až `motion-demo-19.html` — vždy otevřít jako referenci před implementací.
> Komunikace se Zdeny **vždy ČESKY**.

---

## ⚡ PRVNÍ KROK: Vždy otevři příslušné demo

Před implementací jakéhokoli efektu:
1. Najdi správnou kategorii v tomto skilu
2. Otevři příslušný `motion-demo-XX.html` jako referenci
3. Zkopíruj logiku do React/Vite projektu

---

## Kontext projektů

**Zdeny projekty kde se animace používají:**
- `~/Desktop/claude+YBworkflow/mijn-peuter/` → RaisingSmall (React/Vite)
- `~/Desktop/claude+YBworkflow/raisingamsterdam/` → RaisingAmsterdam (React/Vite/Supabase)
- Mystická Apatyka (Bach esence appka) — v přípravě, tmavě zelená + zlatá paleta

**Instalace Motion.dev do React projektu:**
```bash
npm install motion
```

**Základní import:**
```jsx
import { motion, AnimatePresence } from "motion/react"
```

**⚠️ Safari/iOS pravidla (KRITICKÉ):**
- NIKDY nepoužívat `ctx.roundRect()` → použij vlastní `rrect()` helper
- NIKDY nepoužívat `ctx.createConicGradient()` → nahraď segmenty
- NIKDY nepoužívat `event.target` v onclick → předej `this` jako parametr
- Testovat vždy na iPhone Safari, ne jen Chrome

```javascript
// Polyfill pro rounded rect na Safari
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
```

---

## 📁 PŘEHLED VŠECH 19 DEMO SOUBORŮ

| Demo | Kategorie | Klíčové efekty |
|------|-----------|----------------|
| 01 | Základní Motion.dev | whileHover, AnimatePresence, whileInView, stagger |
| 02 | Interakce | Drag, Layout, Scroll progress, Gesta, Čísla, Checklist |
| 03 | Přechody & Kroky | Page transitions, Wizard, Progress bary, Swipe cards |
| 04 | Parallax & 3D scroll | Parallax, Magnetická tlačítka, Reveal on scroll |
| 05 | Grafy & Statistiky | Bar chart, Ring chart, Line chart, Gauges, Vrijheidsgetal |
| 06 | Toasty & Navigace | Toast notifikace, Mikrointerakce, Bottom nav, Hamburger, Tab bar |
| 07 | Geometrie (B&W) | Čáry, Morph tvarů, Mřížka, Částice, Typografie |
| 08 | Fluid & Blob | Blob, Vlny, Metabally, Lávová lampa, Fluid kreslení |
| 09 | 3D & Vesmír | Warp speed, Galaxie, Planety, Mlhovina, Tunel |
| 10 | Konfety & Oslavy | Konfety, Success animace, Milníky, Odznaky, Ohňostroj |
| 11 | Příroda & Organika | Déšť, Sníh, Oheň, Listí, Vítr/tráva |
| 12 | Glitch & Distortion | Glitch text, RGB split, VHS, Pixel break, Scanlines |
| 13 | Barvy & Gradienty | Mesh gradient, Aurora, Hologram, Spektrum, Gradient |
| 14 | Čísla & Data | Koláčový graf, Heatmapa, Timeline, Bubliny, Flow |
| 15 | Text Efekty | Scramble, Typewriter, Neon, Split text, Reveal z mlhy |
| 16 | Loading Stavy | Skeleton, Spinnery, Progress, Button stavy, DNA spinner |
| 17 | Interaktivní Hry | Stírací los, Kolo štěstí, Memory, Quiz |
| 18 | Speciální Efekty | Cursor trail, Magnetické pole, Ripple, Mandala, Gravitace |
| 19 | Zvuk & Vizualizace | Audio bary, Waveform, Kruhový vizualizér, Beat, Mikrofon |

---

## 🎯 DEMO 01 — Základní Motion.dev efekty

**Soubor:** `motion-demo-01.html`
**Kdy použít:** první animace do appky, karty, tlačítka, listy

### whileHover — reakce na myš/dotyk
```jsx
import { motion } from "motion/react"

// Karta která reaguje na hover
<motion.div
  whileHover={{ scale: 1.03, x: 6 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  obsah karty
</motion.div>

// Tlačítko s bounce
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Koupit přístup
</motion.button>
```

### AnimatePresence — plynulé zmizení/objevení
```jsx
import { motion, AnimatePresence } from "motion/react"

<AnimatePresence>
  {visible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -20 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      obsah modalu
    </motion.div>
  )}
</AnimatePresence>
```

### whileInView — animace při scrollování
```jsx
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, margin: "-40px" }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
>
  sekce stránky
</motion.div>
```

### stagger — kaskádové objevení
```jsx
const container = {
  visible: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

<motion.div variants={container} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div variants={item} transition={{ type: "spring" }}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎯 DEMO 02 — Drag, Layout, Scroll, Gesta

**Soubor:** `motion-demo-02.html`
**Kdy použít:** táhnutelné prvky, přepínání zobrazení, progress, checklist

### Drag — tahání prstem
```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
  whileDrag={{ scale: 1.1 }}
>
  táhni mě
</motion.div>
```

### Layout — plynulá změna layoutu
```jsx
// Při změně CSS grid/flex se prvky plynule přesunou
<motion.div layout>
  obsah který mění velikost
</motion.div>
```

### Scroll progress bar
```jsx
import { useScroll, useSpring } from "motion/react"

function ScrollBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return <motion.div style={{ scaleX, transformOrigin: "left" }} />
}
```

---

## 🎯 DEMO 03 — Přechody stránek & Wizard

**Soubor:** `motion-demo-03.html`
**Kdy použít:** onboarding, nastavení profilu, aktivace licence, přechody mezi stránkami

### Page transitions — posun stránek
```jsx
// Stránka přijede zprava
const pageVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -60 }
}

<AnimatePresence mode="wait">
  <motion.div
    key={currentPage}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    {pages[currentPage]}
  </motion.div>
</AnimatePresence>
```

### Step wizard — krokový průvodce
```jsx
// Animovaná linka mezi kroky
<motion.div
  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
/>
```

### Swipe cards — Tinder styl
```jsx
<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, { offset }) => {
    if (offset.x > 100) swipeRight()
    if (offset.x < -100) swipeLeft()
  }}
  animate={controls}
>
  karta
</motion.div>
```

---

## 🎯 DEMO 04 — Parallax & 3D Scroll

**Soubor:** `motion-demo-04.html`
**Kdy použít:** hero sekce, landing page, scroll-based animace

### Parallax scroll
```jsx
import { useScroll, useTransform } from "motion/react"

function ParallaxHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  return (
    <motion.div style={{ y, opacity }}>
      hero obsah
    </motion.div>
  )
}
```

### Magnetické tlačítko
```jsx
function MagneticButton({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width/2) * 0.3
    const y = (e.clientY - rect.top - rect.height/2) * 0.3
    setPosition({ x, y })
  }
  
  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      {children}
    </motion.button>
  )
}
```

---

## 🎯 DEMO 05 — Grafy & Statistiky

**Soubor:** `motion-demo-05.html`
**Kdy použít:** dashboard RaisingSmall, Vrijheidsgetal, příjmy, progress

### Animovaný progress bar
```jsx
<motion.div
  initial={{ width: 0 }}
  animate={{ width: `${percentage}%` }}
  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
  style={{ background: color, height: 8, borderRadius: 4 }}
/>
```

### Animované číslo (counter)
```jsx
import { useMotionValue, useTransform, animate } from "motion/react"

function AnimatedNumber({ target }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  
  useEffect(() => {
    animate(count, target, { duration: 1.4, ease: "easeOut" })
  }, [target])
  
  return <motion.span>{rounded}</motion.span>
}
```

### SVG kruhový graf (ring)
```jsx
// circumference = 2 * π * radius
const circumference = 2 * Math.PI * 65

<motion.circle
  strokeDasharray={circumference}
  initial={{ strokeDashoffset: circumference }}
  animate={{ strokeDashoffset: circumference * (1 - percentage/100) }}
  transition={{ duration: 1.2, ease: "easeOut" }}
/>
```

---

## 🎯 DEMO 06 — Toasty & Navigace

**Soubor:** `motion-demo-06.html`
**Kdy použít:** notifikace po platbě, bottom nav, hamburger menu, tab bar

### Toast notifikace
```jsx
function Toast({ type, title, message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {title}: {message}
    </motion.div>
  )
}
```

### Bottom navigation s animací
```jsx
// Aktivní ikona poskočí nahoru
<motion.div
  animate={isActive ? { y: -3, scale: 1.15 } : { y: 0, scale: 1 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  <Icon />
</motion.div>
```

### Sliding pill tab bar
```jsx
// Plovoucí indikátor pod aktivní záložkou
<motion.div
  className="tab-indicator"
  layoutId="tab-indicator"  // Magic Move — automaticky se přesune!
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
/>
```

### Hamburger → křížek
```jsx
<motion.span
  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
/>
<motion.span
  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
/>
<motion.span
  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
/>
```

---

## 🎯 DEMO 07 — Geometrie (Černobílé)

**Soubor:** `motion-demo-07.html`
**Kdy použít:** portfolio hero, loading screen, tech web, abstrakt pozadí
**Technologie:** Canvas API (ne Motion.dev)

### Pohybující se čáry (canvas)
```javascript
// requestAnimationFrame loop
function tick(t) {
  ctx.fillStyle = "rgba(10,10,10,0.15)"
  ctx.fillRect(0, 0, w, h)
  
  lines.forEach(l => {
    l.x += 0.5
    l.y = h/2 + Math.sin(t/1000 + l.phase) * (h/3)
    
    ctx.strokeStyle = `rgba(255,255,255,${l.alpha})`
    ctx.beginPath()
    ctx.moveTo(l.x - l.len/2, l.y)
    ctx.lineTo(l.x + l.len/2, l.y)
    ctx.stroke()
  })
  
  requestAnimationFrame(tick)
}
```

### Morph tvarů (SVG path interpolace)
```javascript
// Interpolace mezi body dvou tvarů
const pts = fromPts.map((p, i) => ({
  x: lerp(p.x, toPts[i].x, easeProgress),
  y: lerp(p.y, toPts[i].y, easeProgress),
}))
```

### Propojené částice
```javascript
// Čáry mezi blízkými částicemi
for (let i = 0; i < particles.length; i++) {
  for (let j = i+1; j < particles.length; j++) {
    const dist = distance(particles[i], particles[j])
    if (dist < 70) {
      ctx.globalAlpha = (1 - dist/70) * 0.25
      ctx.strokeStyle = "#fff"
      ctx.beginPath()
      ctx.moveTo(particles[i].x, particles[i].y)
      ctx.lineTo(particles[j].x, particles[j].y)
      ctx.stroke()
    }
  }
}
```

---

## 🎯 DEMO 08 — Fluid & Blob

**Soubor:** `motion-demo-08.html`
**Kdy použít:** Mystická Apatyka hero, wellness appka, organický vizuál
**Technologie:** Canvas API

### Organický blob (deformovaný kruh)
```javascript
function blobPoint(cx, cy, r, angle, t, complexity, noise) {
  let rad = r
  for (let i = 1; i <= complexity; i++) {
    rad += noise * (r/i) * Math.sin(i * angle + t * (0.3 + i*0.1) + i*1.3)
  }
  return { x: cx + Math.cos(angle)*rad, y: cy + Math.sin(angle)*rad }
}

// Kresli N bodů a spoj quadratic curves
const pts = []
for (let i = 0; i <= N; i++) {
  const angle = (i/N) * Math.PI * 2
  pts.push(blobPoint(cx, cy, r, angle, t/1800, 4, 0.35))
}
ctx.beginPath()
pts.forEach((p, i) => {
  if (i === 0) ctx.moveTo(p.x, p.y)
  else {
    const prev = pts[i-1]
    const mx = (prev.x + p.x) / 2, my = (prev.y + p.y) / 2
    ctx.quadraticCurveTo(prev.x, prev.y, mx, my)
  }
})
ctx.closePath()
```

### Plovoucí lístečky (Mystická Apatyka styl)
```javascript
// Přesně takto jsou lístečky v tvém screenshotu
const leaves = Array.from({length: 35}, () => ({
  x: rand(0, w), y: rand(-h, h*0.5),
  vx: rand(-0.5, 0.5), vy: rand(0.5, 2),
  rotation: rand(0, 360), rotSpeed: rand(-2, 2),
  size: rand(8, 22), alpha: rand(0.6, 1),
  wobble: rand(0, Math.PI*2),
  color: "#34d399" // nebo amber pro Mystickou Apatéku
}))

// V tick():
leaves.forEach(l => {
  l.wobble += 0.03
  l.x += l.vx + Math.sin(l.wobble) * 0.5
  l.y += l.vy
  l.rotation += l.rotSpeed
  if (l.y > h + l.size) { l.y = -l.size; l.x = rand(0, w) }
  
  ctx.save()
  ctx.translate(l.x, l.y)
  ctx.rotate(l.rotation * Math.PI/180)
  ctx.globalAlpha = l.alpha
  // drawLeaf(ctx, l.size, color)
  ctx.restore()
})
```

---

## 🎯 DEMO 09 — 3D & Vesmír

**Soubor:** `motion-demo-09.html`
**Kdy použít:** hero vizuál, intro animace, prémiový dojem
**Technologie:** Canvas API s pseudo-3D projekcí

### Warp speed (hvězdy letí na tebe)
```javascript
const stars = Array.from({length: 300}, () => ({
  x: (Math.random() - 0.5) * w * 3,
  y: (Math.random() - 0.5) * h * 3,
  z: Math.random() * w,
  pz: 0,
}))

stars.forEach(s => {
  s.pz = s.z
  s.z -= speed * 4
  if (s.z <= 0) { s.x = rand(-w, w); s.z = w; s.pz = w }
  
  const sx = cx + (s.x / s.z) * w * 0.5
  const sy = cy + (s.y / s.z) * h * 0.5
  const px = cx + (s.x / s.pz) * w * 0.5
  const py = cy + (s.y / s.pz) * h * 0.5
  
  ctx.strokeStyle = `rgba(180,200,255,${1 - s.z/w})`
  ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(sx, sy); ctx.stroke()
})
```

### Nekonečný tunel
```javascript
for (let i = N; i >= 1; i--) {
  const progress = i / N
  const r = progress * Math.min(w, h) * 0.45
  const hue = 200 + progress * 120 + t/30
  
  ctx.beginPath()
  // draw shape (hexagon, circle, star) at radius r
  // pointed toward mouse position
  ctx.strokeStyle = `hsla(${hue%360},70%,65%,${0.1 + progress*0.1})`
  ctx.stroke()
}
```

---

## 🎯 DEMO 10 — Konfety & Oslavy

**Soubor:** `motion-demo-10.html`
**Kdy použít:** po platbě, aktivaci licence, splnění milníku, rekordu

### Konfety výbuch
```javascript
function fireConfetti(palette) {
  const pieces = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 100,
    vx: (Math.random() - 0.5) * 6,
    vy: 2 + Math.random() * 4,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 8,
    w: 6 + Math.random() * 10,
    h: 3 + Math.random() * 6,
    color: palette[Math.floor(Math.random() * palette.length)],
    gravity: 0.12,
    alpha: 1,
  }))
  // animate pieces falling down
}

// Palety
const palettes = {
  gold:    ["#fbbf24","#f59e0b","#fef3c7","#fff"],   // po platbě
  green:   ["#34d399","#10b981","#d1fae5","#fff"],   // po aktivaci klíče
  rainbow: ["#f87171","#fbbf24","#34d399","#7EC8E3","#a78bfa","#fff"], // velká oslava
}
```

### Button state animace (idle → loading → success)
```jsx
const [state, setState] = useState("idle") // "idle" | "loading" | "success" | "error"

const variants = {
  idle:    { scale: 1, background: "linear-gradient(90deg, #7EC8E3, #a78bfa)" },
  loading: { scale: 0.98, background: "rgba(126,200,227,0.15)" },
  success: { scale: 1.02, background: "rgba(52,211,153,0.15)" },
}

<motion.button
  variants={variants}
  animate={state}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  onClick={handleClick}
>
  {state === "loading" ? "Zpracovávám..." : state === "success" ? "✓ Hotovo!" : "Koupit"}
</motion.button>
```

---

## 🎯 DEMO 11 — Příroda & Organika

**Soubor:** `motion-demo-11.html`
**Kdy použít:** Mystická Apatyka, wellness vizuál, sezónní téma
**Technologie:** Canvas API

### Déšť
```javascript
const drops = Array.from({length: 200}, () => ({
  x: rand(0, w), y: rand(-h, 0),
  len: rand(10, 25), speed: rand(8, 16),
  alpha: rand(0.3, 0.8), width: rand(0.5, 1.5),
}))

// V tick():
drops.forEach(d => {
  d.y += d.speed
  if (d.y > h) { d.y = rand(-50, 0); d.x = rand(0, w) }
  ctx.strokeStyle = `rgba(170,210,255,${d.alpha})`
  ctx.beginPath()
  ctx.moveTo(d.x, d.y)
  ctx.lineTo(d.x, d.y + d.len)
  ctx.stroke()
})
```

### Oheň (pro Mystickou Apatéku — svíčka)
```javascript
// fireMode=0 → svíčka (jemná, mystická)
// Pohybuj myší → plamen sleduje kurzor
const mode = { cx: w/2, baseW: 30, n: 3, colors: ["#ff6b00","#ff9500","#ffcc00","#fff5e0"] }
```

---

## 🎯 DEMO 12 — Glitch & Distortion

**Soubor:** `motion-demo-12.html`
**Kdy použít:** error stránka, tech brand, retro vizuál, intro animace

### Glitch text efekt
```javascript
// Scramble znaky + RGB offset při glitchi
const chars = "!@#$%^&*<>?/\\|{}[]0123456789ABCDEF"

function glitchChar() {
  return chars[Math.floor(Math.random() * chars.length)]
}

// V tick() — při vysoké intenzitě:
let displayWord = word
if (intensity > 0.3) {
  displayWord = word.split("").map(c =>
    Math.random() < intensity * 0.5 ? glitchChar() : c
  ).join("")
}

// RGB split:
ctx.globalCompositeOperation = "screen"
ctx.fillStyle = "#ff0040"
ctx.fillText(word, w/2 + offsetX*2, h/2) // červený kanál
ctx.fillStyle = "#00ffff"
ctx.fillText(word, w/2 - offsetX, h/2)    // cyan kanál
ctx.globalCompositeOperation = "source-over"
ctx.fillStyle = "#ffffff"
ctx.fillText(word, w/2, h/2)               // bílý hlavní
```

---

## 🎯 DEMO 13 — Barvy & Gradienty

**Soubor:** `motion-demo-13.html`
**Kdy použít:** hero pozadí, premium look, ambient animace
**⚠️ Safari fix:** nepoužívat `createConicGradient` → viz polyfill výše

### Mesh gradient (pohyblivé barevné blobby)
```javascript
// N pohybujících se bodů, každý vyzařuje radial gradient
// Vrstveno přes sebe přes "screen" composite
ctx.globalCompositeOperation = "screen"
points.forEach(p => {
  const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, h*0.5)
  g.addColorStop(0, `hsla(${p.hue%360},90%,60%,0.35)`)
  g.addColorStop(1, "transparent")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)
})
ctx.globalCompositeOperation = "source-over"
```

### Aurora borealis
```javascript
// Vlny s barevnými gradienty, vrstvené
bands.forEach((b, i) => {
  b.phase += b.speed
  // draw sinusoidal wave path to bottom
  // fill with vertical gradient (transparent → color → transparent)
})
```

---

## 🎯 DEMO 14 — Čísla & Data

**Soubor:** `motion-demo-14.html`
**Kdy použít:** přehledy, statistiky, dashboardy

### Animovaný koláčový graf (Canvas)
```javascript
// Animace pomocí easeOut progress (0 → 1)
segs.forEach((seg, i) => {
  const start = (cum/total) * Math.PI*2 * easeOut(progress) - Math.PI/2
  const end   = ((cum+seg.v)/total) * Math.PI*2 * easeOut(progress) - Math.PI/2
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.arc(cx, cy, radius, start, end)
  ctx.closePath()
  ctx.fillStyle = seg.color
  ctx.fill()
  cum += seg.v
})
```

### Timeline animace
```javascript
// Čára se kreslí zleva doprava, body se objevují s delay
items.forEach((item, i) => {
  const delay = i/items.length * 0.5
  const localProgress = Math.max(0, Math.min((totalProgress - delay) / 0.5, 1))
  const x = pad + i * spacing
  // draw dot + label with opacity = easeOut(localProgress)
})
```

---

## 🎯 DEMO 15 — Text Efekty

**Soubor:** `motion-demo-15.html`
**Kdy použít:** hero headline, AI odpovědi, brand reveal, intro

### Scramble text (React)
```jsx
function useScramble(target, duration = 800) {
  const [display, setDisplay] = useState(target)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#"
  
  const scramble = useCallback(() => {
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const revealed = Math.floor(p * target.length)
      const result = target.split("").map((c, i) =>
        i < revealed ? c : chars[Math.floor(Math.random() * chars.length)]
      ).join("")
      setDisplay(result)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])
  
  return { display, scramble }
}
```

### Typewriter efekt
```jsx
function Typewriter({ lines, speed = 50 }) {
  const [text, setText] = useState("")
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const line = lines[lineIdx % lines.length]
      if (!deleting) {
        setText(line.slice(0, charIdx + 1))
        if (charIdx >= line.length - 1) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setText(line.slice(0, charIdx - 1))
        if (charIdx <= 0) {
          setDeleting(false)
          setLineIdx(l => l + 1)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed/2 : speed)
    return () => clearTimeout(timer)
  }, [charIdx, deleting, lineIdx])
  
  return <span>{text}<span className="cursor">|</span></span>
}
```

### Neon text (CSS)
```css
.neon {
  color: #7EC8E3;
  text-shadow:
    0 0 8px #7EC8E3,
    0 0 20px #7EC8E3,
    0 0 40px #7EC8E3,
    0 0 80px #7EC8E3;
  animation: neonPulse 2s ease-in-out infinite;
}

@keyframes neonPulse {
  0%, 100% { text-shadow: 0 0 8px currentColor, 0 0 20px currentColor, 0 0 40px currentColor; }
  50%       { text-shadow: 0 0 4px currentColor, 0 0 10px currentColor; }
}
```

---

## 🎯 DEMO 16 — Loading Stavy

**Soubor:** `motion-demo-16.html`
**Kdy použít:** načítání dat, AI odpověď, upload, platba

### Skeleton screen (CSS shimmer)
```jsx
// CSS animace shimmer
.skeleton {
  background: linear-gradient(90deg, #1a2030 25%, #243040 50%, #1a2030 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

// React komponenta
function SkeletonCard() {
  return (
    <div className="card">
      <div className="skeleton avatar" />
      <div>
        <div className="skeleton line" style={{ width: "70%" }} />
        <div className="skeleton line" style={{ width: "45%" }} />
      </div>
    </div>
  )
}
```

### CSS spinnery
```css
/* Ring spinner */
.spin-ring {
  border: 3px solid rgba(126,200,227,0.15);
  border-top-color: #7EC8E3;
  animation: rotate 1s linear infinite;
}

/* Bouncing dots */
.dot { animation: bounce 0.8s ease-in-out infinite; }
.dot:nth-child(2) { animation-delay: 0.15s; }
.dot:nth-child(3) { animation-delay: 0.3s; }

@keyframes rotate { to { transform: rotate(360deg); } }
@keyframes bounce { 0%,100% { transform: scale(1); } 50% { transform: scale(1.4); } }
```

---

## 🎯 DEMO 17 — Interaktivní Hry

**Soubor:** `motion-demo-17.html`
**Kdy použít:** gamifikace, slevové akce, onboarding, user engagement

### Stírací los (Canvas)
```javascript
// Overlay namalovaný na canvas
// destination-out composite maže overlay při škrábání
canvas.addEventListener("touchmove", e => {
  ctx.globalCompositeOperation = "destination-out"
  ctx.beginPath()
  ctx.arc(x, y, 22, 0, Math.PI*2)
  ctx.fill()
  ctx.globalCompositeOperation = "source-over"
})
```

### Kolo štěstí (Canvas)
```javascript
// Segmenty nakresleny pomocí ctx.arc
// Rotace přes requestAnimationFrame s easeOut
function spinWheel() {
  const extra = Math.PI*2 * (5 + Math.random()*5) // 5-10 otáček
  const target = currentAngle + extra
  const duration = 3500
  
  function tick(t) {
    const p = Math.min((t - start) / duration, 1)
    const ease = 1 - Math.pow(1-p, 4) // easeOut quartic
    currentAngle = lerp(startAngle, target, ease)
    drawWheel(currentAngle)
    if (p < 1) requestAnimationFrame(tick)
  }
}
```

### Memory hra
```jsx
// Logika: flipped[] max 2 karty, compare, solved[]
function flipCard(index) {
  if (flipped.length >= 2 || flipped.includes(index) || solved.includes(index)) return
  const newFlipped = [...flipped, index]
  setFlipped(newFlipped)
  if (newFlipped.length === 2) {
    if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
      setSolved(prev => [...prev, ...newFlipped])
      setFlipped([])
    } else {
      setTimeout(() => setFlipped([]), 800)
    }
  }
}
```

---

## 🎯 DEMO 18 — Speciální Efekty

**Soubor:** `motion-demo-18.html`
**Kdy použít:** wow faktor, premium landing page, interaktivní hero

### Cursor trail (částice za kurzorem)
```javascript
// Při mousemove/touchmove přidej particle
function addParticle(x, y) {
  particles.push({
    x, y,
    vx: rand(-1.5, 1.5), vy: rand(-2, 0),
    life: 1, decay: 0.03,
    size: rand(2, 5),
    color: `hsl(${rand(200, 280)},80%,70%)`,
  })
}

// V tick(): particles fadují, padají, mizí
particles.forEach(p => {
  p.x += p.vx; p.y += p.vy; p.life -= p.decay
  ctx.globalAlpha = p.life
  ctx.fillStyle = p.color
  ctx.beginPath(); ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI*2); ctx.fill()
})
```

### Ripple efekt (vlnky na vodě)
```javascript
// Při kliknutí přidej ripple
ripples.push({ x, y, r: 0, maxR: 120, alpha: 0.8, speed: 2.5 })

// V tick():
ripples.forEach(r => {
  r.r += r.speed; r.alpha -= 0.012
  // Draw 3 rings per ripple
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.arc(r.x, r.y, r.r - i*15, 0, Math.PI*2)
    ctx.strokeStyle = `rgba(100,180,255,${r.alpha * (1 - i*0.25)})`
    ctx.stroke()
  }
})
```

### Mandala / Zrcadlové kreslení
```javascript
function paint(x, y) {
  for (let i = 0; i < axes; i++) {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(i * (Math.PI*2 / axes))
    // Nakresli čáru od posledního bodu k aktuálnímu
    ctx.beginPath()
    ctx.moveTo(lastX - cx, lastY - cy)
    ctx.lineTo(x - cx, y - cy)
    ctx.stroke()
    // Zrcadlo
    ctx.scale(1, -1)
    ctx.beginPath()
    ctx.moveTo(lastX - cx, -(lastY - cy))
    ctx.lineTo(x - cx, -(y - cy))
    ctx.stroke()
    ctx.restore()
  }
}
```

---

## 🎯 DEMO 19 — Zvuk & Vizualizace

**Soubor:** `motion-demo-19.html`
**Kdy použít:** AI hlas feedback, hudební přehrávač, podcast, meditace

### Web Audio API vizualizér
```javascript
// Setup
const audioCtx = new AudioContext()
const analyser = audioCtx.createAnalyser()
analyser.fftSize = 128
const source = audioCtx.createMediaStreamSource(stream)
source.connect(analyser)

// V tick():
const data = new Uint8Array(analyser.frequencyBinCount) // 64 hodnot
analyser.getByteFrequencyData(data)

data.forEach((v, i) => {
  const barHeight = (v / 255) * canvasHeight * 0.85
  ctx.fillRect(i * barWidth, canvasHeight - barHeight, barWidth - 1, barHeight)
})
```

### Simulovaný audio (bez mikrofonu)
```javascript
// Pro demo bez reálného zvuku
let audioPhase = 0
const audioData = new Float32Array(64).fill(0)

function simulateAudio(intensity = 1) {
  audioPhase += 0.08
  for (let i = 0; i < 64; i++) {
    const base = Math.pow(1 - i/64, 2)
    const wave = Math.sin(audioPhase * (1 + i*0.05)) * 0.5 + 0.5
    audioData[i] = lerp(audioData[i], (base*0.6 + wave*0.4) * intensity, 0.25)
  }
}
```

### AI hlas waveform (speaking / listening / idle)
```javascript
const intensity = { speaking: 1, listening: 0.4, idle: 0.08 }[state]
const speed =     { speaking: 0.12, listening: 0.05, idle: 0.02 }[state]

// 3 vrstvy sinusových vln s různou frekvencí
[0.6, 0.8, 1].forEach((amp, li) => {
  // draw wave at y = h/2 + sin(...) * amplitude * intensity
})
```

---

## 🛠️ IMPLEMENTAČNÍ VZORY PRO REACT/VITE

### Canvas v React komponentě
```jsx
import { useEffect, useRef } from "react"

function AnimatedCanvas({ width, height }) {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)
    
    let rafId
    function tick(t) {
      // animace
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    
    return () => cancelAnimationFrame(rafId) // cleanup!
  }, [])
  
  return <canvas ref={canvasRef} style={{ width, height }} />
}
```

### useAnimation hook pro čísla
```jsx
import { useEffect, useState } from "react"

function useAnimatedNumber(target, duration = 1200) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const ease = 1 - Math.pow(1-p, 3)
      setValue(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target])
  
  return value
}
```

### Podmíněné animace (reduce motion)
```jsx
import { useReducedMotion } from "motion/react"

function AnimatedComponent() {
  const shouldReduce = useReducedMotion()
  
  return (
    <motion.div
      animate={{ scale: shouldReduce ? 1 : 1.05 }}
      transition={{ duration: shouldReduce ? 0 : 0.3 }}
    >
      obsah
    </motion.div>
  )
}
```

---

## 🎨 MYSTICKÁ APATYKA — Specifické vzory

**Design:** tmavě zelená (#0d2018), zlatá (#C9922A), amber CTA
**Animace priority:**
1. Plovoucí lístečky (demo-08, Listí záložka, Magická paleta)
2. Blob hero (demo-08, zelená + amber paleta)
3. Aurora/mlhovina pozadí (demo-09 Mlhovina, demo-13 Aurora)
4. Svíčka efekt (demo-11 Oheň, svíčka mód)
5. Reveal z mlhy pro nadpisy (demo-15)

**Barevné konstanty pro canvas:**
```javascript
const APATYKA = {
  bg:     "#040d08",
  green1: "#0d2018",
  green2: "#1a3a20",
  gold:   "#C9922A",
  amber:  "#d97706",
  leaf:   "#34d399",
  cream:  "#fef9f0",
}
```

---

## 📋 CHECKLIST před přidáním animace

- [ ] Funguje na iOS Safari? (roundRect, conicGradient, event.target)
- [ ] Cleanup v useEffect return (cancelAnimationFrame, clearInterval)
- [ ] `useReducedMotion()` respektováno?
- [ ] Animace neblokuje hlavní thread (canvas mimo React render)?
- [ ] Na pomalém telefonu testováno? (Ondroid, starší iOS)
- [ ] `will-change: transform` přidáno pro CSS animace?

---

*Stav: 24. 6. 2026 | Autor: Zdeny + Claude | Demos: motion-demo-01 až motion-demo-19*
