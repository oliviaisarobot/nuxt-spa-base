/* eslint-disable no-path-concat */
const pkg = require('./package')

module.exports = {
  env: {
    businessName: 'Business Name',
    googleApiKey: ''
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/styles/style.scss',
    '@/node_modules/flag-icon-css/css/flag-icon.min.css'
  ],
  plugins: [
    { src: '~/plugins/analytics.js', ssr: false },
    { src: '~/plugins/google-maps', ssr: false },
    '~/plugins/form-elements.js',
    '~/plugins/vue-touch-events.js'
  ],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          hu: require('./locales/hu.json'),
          en: require('./locales/en.json')
        }
      },
      locales: [
        { code: 'en', iso: 'en-GB', name: 'English' },
        { code: 'hu', iso: 'hu-HU', name: 'Magyar' }
      ],
      defaultLocale: 'en'
    }]
  ],
  rules: [
    {
      test: /\.md$/,
      loader: 'vue-loader!vue-md-loader'
    }
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // eslint-disable-next-line no-unused-expressions
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push({
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        })
      }
    }
  }
}
