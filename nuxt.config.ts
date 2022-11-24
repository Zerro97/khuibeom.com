import transformerDirective from '@unocss/transformer-directives'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    'nuxt-headlessui',
    '@unocss/nuxt',
  ],
  app: {
    head: {
      title: 'Hui Beom',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/font.css',
    '~/assets/css/main.css',
  ],
  // @ts-expect-error unocss does not exist in NuxtConfig type
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [],
    transformers: [transformerDirective({ enforce: 'pre' })],
  },
  headlessui: {
    prefix: 'Headless',
  },
})
