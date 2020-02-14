# nuxt-spa-base

Nuxt base for a server side rendered single page application, complete with:

* Multi-language support through i18n
* Multi-language date formatting through momentjs
* Sophisticated meta tag handling
* Text obfuscator which doesn't let web scrapers copy your email, phone and other sensitive information
* Parallax scrolling
* Google gtag support (analytics)
* Facebook share support
* Twitter share support

## Meta tags

Meta tags are handled by nuxt through the `head()` method which is based on vue-meta, no need to use additional plugins.
