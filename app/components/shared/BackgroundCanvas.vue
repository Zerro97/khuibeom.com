<script setup lang="ts">
let canvas: HTMLCanvasElement | null = null
let ctx: CanvasRenderingContext2D | null = null
let rafId: number | null = null

const CONTENT_WIDTH = 1080

interface Particle {
  x: number
  y: number
  velX: number
  velY: number
  size: number
  opacity: number
  maxOpacity: number
  phase: number
}

const particles: Particle[] = []

function getSpawnX(): number {
  const margin = (canvas!.width - CONTENT_WIDTH) / 2
  if (margin <= 40) return Math.random() * canvas!.width

  if (Math.random() < 0.5)
    return Math.random() * margin
  else
    return canvas!.width - margin + Math.random() * margin
}

function createParticle(): Particle {
  return {
    x: getSpawnX(),
    y: canvas!.height + Math.random() * 20,
    velX: (Math.random() - 0.5) * 0.15,
    velY: -(0.15 + Math.random() * 0.25),
    size: 1 + Math.random() * 1.5,
    opacity: 0,
    maxOpacity: 0.04 + Math.random() * 0.08,
    phase: Math.random() * Math.PI * 2,
  }
}

function update() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]

    p.x += p.velX + Math.sin(p.phase) * 0.03
    p.y += p.velY
    p.phase += 0.008

    const progress = 1 - (p.y / canvas!.height)
    if (progress < 0.1)
      p.opacity = Math.min(p.maxOpacity, p.opacity + 0.002)
    else if (progress > 0.85)
      p.opacity = Math.max(0, p.opacity - 0.002)
    else
      p.opacity += (p.maxOpacity - p.opacity) * 0.02

    if (p.y < -10 || p.opacity <= 0 && progress > 0.9) {
      particles.splice(i, 1)
    }
  }

  const targetCount = canvas!.width > 1920 ? 50 : canvas!.width > 1200 ? 35 : 20
  if (particles.length < targetCount && Math.random() < 0.06) {
    particles.push(createParticle())
  }
}

function render() {
  ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

  particles.forEach((p) => {
    const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
    gradient.addColorStop(0, `rgba(200, 190, 220, ${p.opacity})`)
    gradient.addColorStop(0.5, `rgba(200, 190, 220, ${p.opacity * 0.4})`)
    gradient.addColorStop(1, 'rgba(200, 190, 220, 0)')

    ctx!.beginPath()
    ctx!.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
    ctx!.fillStyle = gradient
    ctx!.fill()

    ctx!.beginPath()
    ctx!.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
    ctx!.fillStyle = `rgba(220, 215, 235, ${p.opacity * 1.2})`
    ctx!.fill()
  })
}

const fps = 30
const fpsInterval = 1000 / fps
let then = 0

function loop() {
  rafId = requestAnimationFrame(loop)

  const now = performance.now()
  if (now - then < fpsInterval) return
  then = now - ((now - then) % fpsInterval)

  update()
  render()
}

function handleResize() {
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

onMounted(() => {
  if (import.meta.client) {
    canvas = document.getElementById('bgCanvas') as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx = canvas.getContext('2d')!

    then = performance.now()
    rafId = requestAnimationFrame(loop)
    window.addEventListener('resize', handleResize)
  }
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <canvas id="bgCanvas" class="fixed top-0 left-0 inset-0 pointer-events-none" style="z-index: -1" />
</template>
