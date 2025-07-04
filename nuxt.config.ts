import transformerDirective from '@unocss/transformer-directives'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@unocss/nuxt',
    'nuxt-headlessui',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
  ],
  experimental: {
    componentIslands: true,
    payloadExtraction: true,
  },
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-seo-kit#1-define-config
    public: {
      siteUrl: 'https://khuibeom.com',
      siteName: 'Hui Beom',
      siteDescription: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea.',
      language: 'en',
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'copyright', content: 'Hui Beom Kim' },
        { 'http-equiv': 'accept-ch', 'content': 'DPR' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      ],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/font.css',
    '~/assets/css/main.css',
  ],
  ogImage: {
    experimentalRuntimeBrowser: true,
  },
  nitro: {
    preset: 'cloudflare_pages',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  ssr: true,
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
    transformers: [transformerDirective()],
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
    build: {
      markdown: {
        highlight: {
          theme: 'aurora-x',
          langs: [
            'java',
            'js',
          ],
        },
      },
    },
  },
})
