<template lang="pug">
  header.d-flex.justify-content-center
    b-row.header-content.container
      b-col(cols="2")#logo
        nuxt-link(:to="localePath('/')")
          b-img(:src="logo")
      b-col#nav-holder.d-flex.align-items-center.justify-content-end
        a(
          v-for="(anchor, index) in links"
          :class="{ 'd-none d-md-inline-block': !tooManyMenuItems, 'd-none': tooManyMenuItems }"
          :href="'#' + anchor"
          :key="index"
          ).pl-4 {{ anchor }}
        a(
          :class="{ 'd-md-none': !tooManyMenuItems }"
          role="button"
          @click="showMenu = !showMenu"
          )#dropdown-menu.cursor-pointer
          div(v-for="i in 3" :key="i").menu-line
          div(:class="{ 'show': showMenu }").menu-container
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
import { mapState } from 'vuex'

export default {
  components: {
    AppLangSelect
  },
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapState({
      links: state => state.browser.anchors
    }),
    logo() {
      return require('~/assets/images/blank-image-white.svg')
    },
    tooManyMenuItems() {
      return this.links && this.links.length > 4
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
  position: fixed;
  z-index: 50;
  width: 100%;

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
          opacity: 0;
          overflow: hidden;
          padding: 2em;
          position: absolute;
          top: 90px;
          left: 0;
          right: 0;
          transition: .3s ease;

          &.show {
            opacity: 1;
          }

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
