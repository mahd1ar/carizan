export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'carizan',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://cdnjs.cloudflare.com/ajax/libs/imagehover.css/2.0.0/css/imagehover.min.css',
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/apollo-client.js',
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/eventbus.ts' },
    { src: '~/plugins/snip.js' },
    { src: '~/plugins/general.client.js' , mode : 'client' },
  ],

  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/backend.ts' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@vueuse/nuxt',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
    'nuxt-izitoast',
    // '@vueuse/motion/nuxt'
  ],
  izitoast: {
    position: 'bottomRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  },
  i18n: {
    locales: [
      { code: 'fa', iso: 'fa-IR', dir: 'rtl' , file : 'fa.js' },
      { code: 'en', iso: 'en-US', dir: 'ltr' , file : 'en.js'},
    ],
    detectBrowserLanguage: false,
    defaultLocale: 'fa',
    // lazy: true,
    langDir: 'lang/',
    vueI18n: {
    
      fallbackLocale: 'fa',
      messages: {
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://api.carizanin.com/wp-json',
  },

  apollo: {
    clientConfigs: {
      default: '~/graphql',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@vue/apollo-composable'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
