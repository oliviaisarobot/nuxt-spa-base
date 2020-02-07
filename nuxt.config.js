/* eslint-disable no-path-concat */
const pkg = require('./package')

module.exports = {
  env: {
    businessName: 'Business Name',
    googleApiKey: '',
    gtagKey: ''
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
    ],
    script: [
      { src: 'https://platform.twitter.com/widgets.js', async: true },
      { src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0', async: true, defer: true }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/styles/style.scss',
    '@/node_modules/flag-icon-css/css/flag-icon.min.css',
    { src: '~/node_modules/highlight.js/styles/monokai.css', lang: 'css' }
  ],
  plugins: [
    '~/plugins/gtag.js',
    { src: '~/plugins/google-maps', ssr: false },
    '~/plugins/form-elements.js',
    '~/plugins/vue-touch-events.js'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
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
        /* { code: 'pl', iso: 'pl-PL', name: 'Polski' },
        { code: 'ru', iso: 'ru-RU', name: 'Russian' },
        { code: 'fi', iso: 'fi-FI', name: 'Russian' } */
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
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-highlightjs'
    ]
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
