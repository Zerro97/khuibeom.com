<script setup lang="ts">
let canvas: HTMLCanvasElement | null = null
let ctx: any = null

const initCanvas = () => {
  canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx = canvas.getContext('2d')
}

interface Firefly {
  x: number
  y: number
  velX: number
  velY: number
  width: number
  height: number
  opacity: number
  opacityCount: number
}

const fireflies: Firefly[] = []

// HELPER
const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t
}

const sinLerp = (t: number) => {
  return Math.abs(Math.sin(t * Math.PI / 180))
}

// UPDATE
const getVelocity = () => {
  if (Math.random() < 0.5)
    return Math.random() + 0.5 * 0.5

  else
    return Math.random() - 1.5 * 0.5
}

const updateVelocity = (firefly: Firefly) => {
//   firefly.velX = Math.random() * 2
}

const updateOpacity = (firefly: Firefly) => {
  firefly.opacityCount += 0.5
  firefly.opacity = sinLerp(firefly.opacityCount)
}

const moveFirefly = (firefly: Firefly) => {
  firefly.x += firefly.velX
  firefly.y += firefly.velY
}

const isOffScreen = (firefly: Firefly) => {
  if (firefly.x < 0 || firefly.x > screen.width || firefly.y < 0 || firefly.y > screen.height)
    return true

  return false
}

const updatePosWhenOffScreen = (firefly: Firefly) => {
  if (isOffScreen(firefly)) {
    firefly.x = Math.random() * canvas.width
    firefly.y = Math.random() * canvas.height
    firefly.velX = getVelocity()
    firefly.velY = getVelocity()
  }
}

const update = () => {
  fireflies.forEach((firefly) => {
    updatePosWhenOffScreen(firefly)
    updateOpacity(firefly)
    updateVelocity(firefly)
    moveFirefly(firefly)
  })
}

// RENDER
const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const drawFirefly = () => {
  fireflies.forEach((firefly) => {
    ctx.fillStyle = `rgba(183, 255, 0, ${firefly.opacity})`
    ctx.fillRect(firefly.x, firefly.y, firefly.width, firefly.height)
  })
}

const render = () => {
  clearCanvas()
  drawFirefly()
}

// MAIN LOOP
const loop = () => {
  requestAnimationFrame(loop)

  update()
  render()
}

// INIT
const generateFirefly = () => {
  const newFirefly = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    velX: getVelocity(),
    velY: getVelocity(),
    width: 3,
    height: 3,
    opacity: 0,
    opacityCount: Math.random() * 360,
  }
  fireflies.push(newFirefly)
}

if (process.client) {
  initCanvas()
  for (let i = 0; i < 20; i++)
    generateFirefly()

  loop()
}
</script>

<template>
  <canvas id="canvas" class="fixed z-0" />
</template>
