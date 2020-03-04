<template lang="pug">
  div.layout.bg-light.text-dark.w-screen.relative.p-0.m-0.box-border
    app-header
    app-to-the-top
    transition(name='fade')
      nuxt#content
    app-footer
</template>

<script>
import AppFooter from '~/components/app/Footer.vue'
import AppHeader from '~/components/app/Header.vue'
import AppToTheTop from '~/components/app/ToTheTop.vue'

export default {
  components: {
    AppFooter,
    AppHeader,
    AppToTheTop
  },
  head() {
    return {
      title: process.env.businessName
    }
  },
  data() {
    return {
      blocks: []
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.$store.commit('browser/setBrowserSize')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

html,
body {
  box-sizing:                       border-box;
  font-family:                      $base-font-family;
  font-size:                        $font-size * 0.8;
  margin:                           0!important;
  padding:                          0!important;
  position:                         relative;
  width:                            100%!important;
  word-spacing:                     1px;
  -ms-text-size-adjust:             100%;
  -webkit-text-size-adjust:         100%;
  -moz-osx-font-smoothing:          grayscale;
  -webkit-font-smoothing:           antialiased;
  @include transition;
}

#content,
.layout {
  box-sizing:                       border-box;
  max-width:                        100%!important;
  overflow:                         hidden;
}

*,
*:before,
*:after {
  box-sizing:                       border-box;
  margin:                           0;
  padding:                          0;
}

a,
a:hover,
a:focus,
button,
button:hover,
button:focus,
li,
li:hover,
li:focus {
  @include transition;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

h2 {
  font-size: 1.7rem;
  font-weight: bold;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
}

h4 {
  font-size: 1.25rem;
  font-weight: bold;
}

h5 {
  font-size: 1.25rem;
  font-weight: normal;
}

hr {
  border-top:                       1px solid $color-primary!important;
  opacity:                          .5;
}

.container {
  overflow: hidden;
  padding: 0 2em 0 2em;
}

.cursor-pointer {
  cursor:                           pointer;
}

.tag {
  &:before {
    content: '#';
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
