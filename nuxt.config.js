const pkg = require('./package')

module.exports = {
  env: {
    businessName: 'Lorem Ipsum',
    googleApiKey: '',
    gtagKey: ''
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#464159' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],
    script: [
      // { src: 'https://platform.twitter.com/widgets.js', async: true },
      // { src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0', async: true, defer: true }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/node_modules/flag-icon-css/css/flag-icon.min.css',
    // { src: '~/node_modules/highlight.js/styles/monokai.css', lang: 'css' }
  ],
  plugins: [
    '~/plugins/click-outside.js',
    // '~/plugins/form-elements.js',
    // '~/plugins/vue-touch-events.js',
    // '~/plugins/vue-moment.js',
    // { src: '~/plugins/gtag.js', ssr: false },
    // { src: '~/plugins/google-maps', ssr: false },
    // { src: '~/plugins/youtube-embed.js', ssr: false }
  ],
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/markdownit',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    // '@nuxtjs/pwa',
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
  styleResources: {
    scss: [
      'assets/styles/style.scss'
    ]
  },
  rules: [
    {
      test: /\.md$/,
      loader: 'vue-loader!vue-md-loader'
    }
  ],
  axios: {
    baseURL: "http://localhost:8000/api"
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
  // markdownit: {
  //   html: true,
  //   injected: true,
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-highlightjs'
  //   ]
  // },
  build: {
    // transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        })
      }
    }
  }
}
