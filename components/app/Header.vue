<template lang="pug">
  header(:class="{ 'over-bg': scrollPosition > 90 }").flex.justify-center
    #header-content.container.flex.justify-between.justify-center.p-0
      #logo.h-full
        nuxt-link(:to="localePath('index')", :title="$t('meta.description')").flex.items-center.justify-center.h-full.no-underline
          img(:src="logo").h-full.w-auto.inline-block.pl-4
          .md_inline-block.hidden.uppercase.text-xl.whitespace-no-wrap.pl-3(:class="{ 'text-white': scrollPosition <= 90, 'text-dark': scrollPosition > 90 }") {{ businessName }}
      nav#nav-holder.flex.items-center.justify-end
        ul#main-menu.hidden.lg_flex.items-center.justify-center.h-full.m-0
          li(
            v-for="(anchor, index) in navShort"
            v-if="!isMobile"
            :key="index"
            ).flex.items-center.justify-center.p-2
              nuxt-link(
                :active="currentPath == anchor"
                :class="{ 'text-primary': scrollPosition <= 90, 'text-secondary': scrollPosition > 90 }"
                :to="localePath(anchor)"
                ).hover_text-contrast.focus_text-contrast.hover_underline.focus_underline.text-m {{ $t('navigation.' + anchor) }}
        button(
          aria-controls="menu-collapse"
          :aria-expanded="showMenu ? 'true' : 'false'"
          :class="{ 'text-white': scrollPosition <= 90, 'text-secondary': scrollPosition > 90, 'collapsed': showMenu }"
          @click="showMenu = !showMenu"
          ).menu-button.flex.items-center.justify-center.hover_text-contrast.focus_text-contrast.pl-4.pr-4
          i.material-icons.text-2xl menu
        app-lang-select(:use-flags="true")
    nav#menu-collapse(v-if="showMenu" v-click-outside="closeMenu").bg-light.flex.justify-center.items-center.animate-float-in
      button(@click="showMenu = !showMenu").absolute.top-0.right-0
        i.material-icons.text-primary.hover_text-contrast.focus_text-contrast.text-3xl.p-3 close
      ul.justify-center.w-full
        li(
          v-for="(anchor, index) in nav"
          :key="index"
          ).p-3.text-secondary.hover_bg-contrast.focus_bg-contrast
          nuxt-link(
            :active="currentPath == anchor"
            :to="localePath(anchor)"
            ).text-xl {{ $t('navigation.' + anchor) }}
    #header-bounceback(v-if="scrollPosition > 90").animate-swing-in
</template>

<script>
import AppLangSelect from '~/components/app/LangSelect'
import { mapGetters, mapState } from 'vuex'

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
    ...mapGetters({
      isMobile: 'browser/isMobile'
    }),
    ...mapState({
      nav: state => state.browser.nav,
      navShort: state => state.browser.nav_short,
      scrollPosition: state => state.browser.window.scrollY
    }),
    businessName() {
      return process.env.businessName
    },
    currentPath() {
      return this.$router.path
    },
    logo() {
      return this.scrollPosition < 90 ? require('~/assets/images/blank-image-white.svg') : require('~/assets/images/blank-image.svg')
    }
  },
  methods: {
    closeMenu(e) {
      if (e.y > 60 && (e.x > 450 || this.showMenu === true)) {
        this.showMenu = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

header {
  background-color: transparent;
  left: 0;
  min-height: $header-height;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  -webkit-transition: background-color 1s linear;
  -ms-transition: background-color 1s linear;
  transition: background-color 1s linear;

  &.over-bg {
    color: $color-base-dark!important;
    -webkit-transition: background-color 1s linear;
    -ms-transition: background-color 1s linear;
    transition: background-color 1s linear;
  }
  
  #header-bounceback {
    background-color: $color-base-light!important;
    box-shadow: -1px -2px 2px $color-base-gray-light;
    left: 0;
    min-height: $header-height;
    position: absolute;
    top: calc(0px - #{$header-height})!important;
    width: 100%;
    z-index: 999;
  }

  #header-content {
    color: inherit;
    height: $header-height;
    overflow: visible;
    padding: .5em 0 .5em 0;
    position: absolute;
    z-index: inherit;
  }

  #menu-collapse {
    border-radius: 0;
    bottom: 0;
    box-sizing: border-box;
    color: white;
    font-size: .85em;
    height: 100vh;
    left: 0;
    margin: 0;
    max-width: 450px;
    min-height: 560px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: $header-height;
    width: 65%;
    z-index: 1100;
    box-shadow: 1px 2px 2px $color-base-gray-light;

    @include size-below(md) {
      max-width: 50%;
    }

    @include size-below(sm) {
      max-width: 100%;
      width: 100vw;
    }

    &.nav {
      height: 100%;
      padding: 1em 0 1em 0;
    }
  }
}
</style>
