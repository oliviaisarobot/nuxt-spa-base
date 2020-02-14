<template lang="pug">
  div.layout
    app-header
    nuxt#content
    app-footer
</template>

<script>
import AppFooter from '~/components/app/Footer.vue'
import AppHeader from '~/components/app/Header.vue'

export default {
  components: {
    AppFooter,
    AppHeader
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

a {
  color:                            $color-link;
  text-decoration:                  none;
  @include transition;

  &:active, &.nuxt-link-active {
    color:                          $color-link-active;
  }

  &:hover {
    color:                          $color-link-hover;
    text-decoration:                underline;
  }
}

h1 {
  font-family:                      $base-font-family!important;
  font-size:                        38px!important;
  margin:                           20px 0 25px 0!important;

  @include size-below(sm) {
    font-size:                      34px!important;
  }
}

h2 {
  font-family:                      $base-font-family!important;
  font-size:                        34px!important;
  margin:                           45px 0 35px 0!important;

  @include size-below(sm) {
    font-size:                      30px!important;
  }
}

h3 {
  font-family:                      $base-font-family!important;
  font-size:                        32px!important;
  margin:                           45px 0 35px 0!important;

  @include size-below(sm) {
    font-size:                      28px!important;
  }
}

h4 {
  font-family:                      $base-font-family!important;
  font-size:                        26px!important;
  margin:                           35px 0 25px 0!important;

  @include size-below(sm) {
    font-size:                      22px!important;
  }
}

hr {
  border-top:                       1px solid $color-primary!important;
  opacity:                          .5;
}

.container {
  @include transition;
  width:                            $content-width;

  @include size-between(sm, md) {
    width:                          90%;
  }
  @include size-below(sm) {
    width:                          95%;
  }
}

.cursor-pointer {
  cursor:                           pointer;
}
</style>
