export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
})
