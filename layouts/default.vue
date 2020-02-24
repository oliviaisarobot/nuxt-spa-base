<template lang="pug">
  div.layout
    app-header
    app-to-the-top
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
body,
.layout {
  background-color:                 $color-background;
  box-sizing:                       border-box;
  color:                            $font-color-dark;
  font-family:                      $base-font-family;
  font-size:                        $font-size * 0.8;
  margin:                           0;
  overflow-x:                       hidden;
  padding:                          0;
  position:                         relative;
  word-spacing:                     1px;
  -ms-text-size-adjust:             100%;
  -webkit-text-size-adjust:         100%;
  -moz-osx-font-smoothing:          grayscale;
  -webkit-font-smoothing:           antialiased;
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
  padding: 0 2em 0 2em;
}

.cursor-pointer {
  cursor:                           pointer;
}
</style>
