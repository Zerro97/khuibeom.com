<script setup lang="ts">
let canvas: HTMLCanvasElement | null = null
let ctx: any = null

// width of side visible screen (excluding main screen area)
let spawnWidth = 0
const CONTENT_WIDTH = 1000

const initCanvas = () => {
  canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx = canvas.getContext('2d')
  spawnWidth = (window.innerWidth - CONTENT_WIDTH) / 2
}

interface CanvasObject {
  type: string
  x: number
  y: number
  velX: number
  velY: number
  width: number
  height: number
  opacity: number
  timer: number
}

const fireflies: CanvasObject[] = []

// HELPER
const sinLerp = (t: number) => {
  return Math.sin(t * Math.PI / 180)
}

const getVelocity = () => {
  if (Math.random() < 0.5)
    return (Math.random() + 0.5) * 0.5

  else
    return (Math.random() - 1.5) * 0.5
}

const getInScreenPos = () => {
  if (Math.random() < 0.5)
    return Math.random() * spawnWidth

  else
    return Math.random() * spawnWidth + (spawnWidth + CONTENT_WIDTH)
}

// UPDATE
const updateOpacity = (entity: CanvasObject) => {
  entity.timer++
  entity.opacity = sinLerp(entity.timer) - 0.2
}

const updatePos = (entity: CanvasObject) => {
  entity.x += entity.velX
  entity.y += entity.velY
}

const isOffScreen = (entity: CanvasObject) => {
  if (entity.x < 0 || entity.x > canvas.width
  || (entity.x > spawnWidth && entity.x < (CONTENT_WIDTH + spawnWidth))
  || entity.y < 0 || entity.y > canvas.height)
    return true

  return false
}

const updateWhenOffScreen = (entity: CanvasObject) => {
  if (isOffScreen(entity)) {
    entity.x = getInScreenPos()
    entity.y = Math.random() * canvas.height
    entity.velX = entity.type === 'firefly' ? getVelocity() : 0
    entity.velY = entity.type === 'firefly' ? getVelocity() : Math.random() - 1.5 * 0.5
    entity.timer = 0
  }
}

const update = () => {
  fireflies.forEach((firefly) => {
    updateWhenOffScreen(firefly)
    updateOpacity(firefly)
    updatePos(firefly)
  })
}

// RENDER
const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const drawFirefly = () => {
  fireflies.forEach((firefly) => {
    if (firefly.type === 'base') {
      ctx.fillStyle = `rgba(183, 255, 0, ${firefly.opacity})`
      ctx.fillRect(firefly.x, firefly.y, firefly.width, firefly.height)
    }
    else if (firefly.type === 'big') {
      ctx.fillStyle = `rgba(255, 162, 0, ${firefly.opacity})`
      ctx.fillRect(firefly.x, firefly.y, firefly.width + 0.5, firefly.height + 0.5)
    }
    else {
      ctx.fillStyle = `rgba(186, 186, 186, ${firefly.opacity})`
      ctx.fillRect(firefly.x, firefly.y, firefly.width - 0.5, firefly.height - 0.5)
    }
  })
}

const render = () => {
  clearCanvas()
  drawFirefly()
}

// MAIN LOOP
const fps = 30
const fpsInterval = 1000 / fps
let now = null
let then = Date.now()
let elapsed = null
let loopReq = null

const loop = () => {
  requestAnimationFrame(loop)

  now = Date.now()
  elapsed = now - then

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval)
    update()
    render()
  }
}

// INIT
const generateFirefly = () => {
  const size = Math.random() + 2.5
  const type = Math.random() < 0.75 ? 'base' : Math.random() < 0.3 ? 'big' : 'small'

  const newFirefly = {
    type,
    x: getInScreenPos(),
    y: Math.random() * canvas.height,
    velX: getVelocity(),
    velY: getVelocity(),
    width: size,
    height: size,
    opacity: 0,
    timer: Math.random() * 360,
  }
  fireflies.push(newFirefly)
}

onMounted(() => {
  if (process.client) {
    initCanvas()

    const fireflyCount = canvas.width > 1920
      ? 26
      : canvas.width > 1540 ? 20 : 12
    for (let i = 0; i < fireflyCount; i++)
      generateFirefly()

    loopReq = requestAnimationFrame(loop)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(loopReq)
})
</script>

<template>
  <canvas id="canvas" class="fixed z-0 hidden lg:block" />
</template>
