export default defineNuxtPlugin(() => {
  const shades = [
    { shade: 50, l: 96.9, c: 0.016 },
    { shade: 100, l: 94.3, c: 0.029 },
    { shade: 200, l: 89.4, c: 0.057 },
    { shade: 300, l: 81.1, c: 0.111 },
    { shade: 400, l: 70.2, c: 0.183 },
    { shade: 500, l: 60.6, c: 0.25 },
    { shade: 600, l: 54.1, c: 0.281 },
    { shade: 700, l: 49.1, c: 0.27 },
    { shade: 800, l: 43.2, c: 0.232 },
    { shade: 900, l: 38, c: 0.189 },
    { shade: 950, l: 28.3, c: 0.141 },
  ]

  const CYCLE_DURATION = 120_000
  const start = Date.now()

  function update() {
    const elapsed = Date.now() - start
    const hue = (elapsed / CYCLE_DURATION) * 360 % 360
    const root = document.documentElement.style

    for (const { shade, l, c } of shades) {
      root.setProperty(`--ui-color-primary-${shade}`, `oklch(${l}% ${c} ${hue.toFixed(1)})`)
    }
  }

  update()
  setInterval(update, 500)
})
