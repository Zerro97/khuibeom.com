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
    attributify: true,
    theme: {
      breakpoints: {
        sm: '540px',
        md: '740px',
        lg: '1024px',
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
