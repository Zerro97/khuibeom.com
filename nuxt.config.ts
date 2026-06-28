// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  site: {
    url: 'https://khuibeom.com',
    name: 'Hui Beom',
    description: 'Hi, I\'m Hui Beom. I\'m software developer from South Korea.',
    defaultLocale: 'en',
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/seo'
  ],
  components: [
    { path: '~/components/shared' },
    { path: '~/components/shared/content', pathPrefix: false },
    { path: '~/components/pages' },
  ],
  image: {
    dir: 'assets/images'
  },
  app: {
    head: {
      titleTemplate: '%s | khuibeom.com',
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
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  fonts: {
    defaults: {
      weights: [100,200,300,400,500,600,700,800,900,950],
      styles: ['normal']
    },
    families: [
      { name: 'SUIT', provider: 'local', global: true }
    ]
  },
})
