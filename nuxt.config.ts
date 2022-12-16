import transformerDirective from '@unocss/transformer-directives'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    'nuxt-icon',
    'nuxt-headlessui',
    '@unocss/nuxt',
  ],
  app: {
    head: {
      title: 'Hui Beom',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Hui Beom' },
        { name: 'description', content: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea. I\'m using this site to document my learnings and share with the world what I have learnt.' },
        { name: 'copyright', content: 'Hui Beom Kim' },
        { name: 'keywords', content: 'blog, frontend, backend, tech, documentation, dev, web' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.khuibeom.com' },
        { property: 'og:title', content: 'Hui Beom' },
        { property: 'og:description', content: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea. I\'m using this site to document my learnings and share with the world what I have learnt.' },
        { property: 'og:image', content: 'http://res.cloudinary.com/dpu5ywrox/image/upload/v1670490475/hzqlkk6dex5udvbs0f1j.png' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://www.khuibeom.com' },
        { property: 'twitter:title', content: 'Hui Beom' },
        { property: 'twitter:description', content: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea. I\'m using this site to document my learnings and share with the world what I have learnt.' },
        { property: 'twitter:image', content: 'http://res.cloudinary.com/dpu5ywrox/image/upload/v1670490475/hzqlkk6dex5udvbs0f1j.png' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/font.css',
    '~/assets/css/main.css',
  ],
  nitro: {
    serveStatic: true,
  },
  // @ts-expect-error defineNuxtConfig does not have unocss type
  unocss: {
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [
      [/^m-(\d+)$/, ([, d]: any) => ({ margin: `${d / 4}rem` })],
      [/^p-(\d+)$/, (match: number[]) => ({ padding: `${match[1] / 4}rem` })],
    ],
    theme: {
      breakpoints: {
        sm: '540px',
        md: '740px',
      },
    },
    transformers: [transformerDirective({ enforce: 'pre' })],
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dpdm96hjl/image/upload/v1670587534/khuibeom.com',
    },
  },
  headlessui: {
    prefix: 'Headless',
  },
  content: {
    navigation: {
      fields: ['icon'],
    },
    highlight: {
      preload: [
        'c',
        'cpp',
        'java',
      ],
      // Theme used in all color schemes.
      theme: 'github-dark',
    },
    documentDriven: true,
    markdown: {
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
})
