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
    '~/plugins/click-outside.js',
    '~/plugins/vue-touch-events.js',
      { src: '~/plugins/youtube-embed.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales: [
        { code: 'en', iso: 'en-GB', name: 'English' },
        { code: 'hu', iso: 'hu-HU', name: 'Magyar' }
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'en'
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          hu: require('./locales/hu.json'),
          en: require('./locales/en.json')
        }
      }
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
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false
  },
  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#content"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
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
