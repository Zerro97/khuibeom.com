export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    'nuxt-headlessui',
    '@unocss/nuxt',
  ],
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
