<template lang="pug">
  header.d-flex.justify-content-center
    b-row.header-content.container
      b-col(cols="2")#logo
        nuxt-link(:to="localePath('/')")
          b-img(:src="logo")
      b-col#nav-holder.d-flex.align-items-center.justify-content-end
        a(
          v-for="(anchor, index) in links"
          :href="'#' + anchor"
          :key="index"
          ).pl-4.d-none.d-md-inline-block {{ anchor }}
        a(role="button" @click="showMenu = !showMenu")#dropdown-menu.d-md-none.cursor-pointer
          div(v-for="i in 3" :key="i").menu-line
          div(v-show="showMenu").menu-container
            a(
              v-for="(anchor, index) in links"
              :href="'#' + anchor"
              :key="index"
              ).d-block {{ anchor }}
      b-col(cols="2").text-right
        app-lang-select(:use-flags="true")
</template>

<script>
import AppLangSelect from '~/components/app/LangSelect'

export default {
  components: {
    AppLangSelect
  },
  data() {
    return {
      links: ['anchor-1', 'anchor-2'],
      showMenu: false
    }
  },
  computed: {
    logo() {
      return require('~/assets/images/blank-image-white.svg')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

header {
  background-color: $color-base-dark;
  border-bottom: 3px solid $color-primary;
  color: $color-base-light;
  font-size: $font-size;
  height: 90px;
  padding: .5em 0 .5em 0;

  .header-content {
    #logo {
      img {
        max-width: 80px;
      }
    }

    #nav-holder {
      font-size: $font-size-s;

      #dropdown-menu {
        z-index: 100;

        .menu-line {
          background-color: $color-base-light;
          height: 2px;
          width: 20px;

          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }

        .menu-container {
          background-color: $color-base-dark;
          padding: 2em;
          position: absolute;
          top: 90px;
          left: 0;
          right: 0;

          a {
            &:not(:last-child) {
              padding-bottom: 1em;
            }
          }
        }
      }
    }
  }
}
</style>
