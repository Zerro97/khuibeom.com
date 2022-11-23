export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    'nuxt-headlessui',
    '@unocss/nuxt',
  ],
  css: ['@unocss/reset/tailwind.css'],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [],
  },
  headlessui: {
    prefix: 'Headless',
  },
})
