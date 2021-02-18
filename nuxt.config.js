import { resolve } from 'path'

export default {  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'typer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,300;1,400;1,600&display=swap'}
    ]
  },

  // Path resolvers  
  alias: {
    '~~': resolve(__dirname, '.'),
    '~': resolve(__dirname, './src'),
    '~css': resolve(__dirname, './assets/css'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],

  sentry: {
    dsn: 'https://50f0d1210f0c4e2ca122564dc4990b13@o523202.ingest.sentry.io/5635289', 
    config: {

    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Dev server
  server: {
    host: '0.0.0.0'
  }
}
