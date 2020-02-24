<template lang="pug">
  header(:class="{ 'dark-bg': scrollPosition > 90 }").flex.justify-center
    #header-content.container.flex.justify-between.p-0
      #logo.h-full
        nuxt-link(:to="localePath('index')", :title="$t('meta.description')").flex.items-center.justify-center.h-full.no-underline
          img(:src="logo").h-full.w-auto.inline-block
          .inline-block.uppercase.text-white.text-xl.whitespace-no-wrap.pl-3 {{ businessName }}
      nav#nav-holder.flex.items-center.justify-end
        ul#main-menu.md_flex.items-center.justify-center.h-full.m-0.flex-no-wrap.sm_hidden
          li(
            v-for="(anchor, index) in navShort"
            v-if="!isMobile"
            :key="index"
            ).flex.items-center.justify-center.p-2
              nuxt-link(
                :active="currentPath == anchor"
                :to="localePath(anchor)"
                ).text-primary.hover_text-contrast.focus_text-contrast.hover_underline.focus_underline.text-m {{ $t('navigation.' + anchor) }}
        button(
          aria-controls="menu-collapse"
          :aria-expanded="showMenu ? 'true' : 'false'"
          :class="showMenu ? null : 'collapsed'"
          @click="showMenu = !showMenu"
          ).menu-button.flex.items-center.justify-center.text-white.hover_text-contrast.focus_text-contrast.pl-4.pr-4
          i.material-icons.text-2xl menu
        app-lang-select(:use-flags="true")
    nav#menu-collapse(:class="{ 'show': showMenu }").bg-dark.border-r.border-primary.flex.justify-center.items-center
      button(@click="showMenu = !showMenu").absolute.top-0.right-0
        i.material-icons.text-primary.hover_text-contrast.focus_text-contrast.text-3xl.p-3 close
      ul.justify-center.w-full
        li(
          v-for="(anchor, index) in nav"
          :key="index"
          ).p-3.text-primary.hover_text-dark.hover_bg-contrast.focus_text-dark.focus_bg-contrast
          nuxt-link(
            :active="currentPath == anchor"
            :to="localePath(anchor)"
            ).text-xl {{ $t('navigation.' + anchor) }}
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
      return require('~/assets/images/blank-image-white.svg')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

header {
  background-color: transparent;
  min-height: $header-height;
  position: fixed;
  z-index: 1000;
  width: 100%;
  -webkit-transition: background-color 1s linear;
  -ms-transition: background-color 1s linear;
  transition: background-color 1s linear;

  &.dark-bg {
    background-color: $color-base-dark!important;
    -webkit-transition: background-color 1s linear;
    -ms-transition: background-color 1s linear;
    transition: background-color 1s linear;
  }

  #header-content {
    /* background-color: inherit; */
    color: inherit;
    height: $header-height;
    padding: .5em 0 .5em 0;
    position: absolute;
    z-index: inherit;
  }

  #menu-collapse {
    border-radius: 0;
    bottom: 0;
    box-sizing: content-box;
    color: white;
    font-size: .85em;
    height: 100vh;
    left: -101%;
    margin: 0;
    max-width: 450px;
    min-height: 560px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 65%;
    z-index: 1100;
    -webkit-transition: all .5s ease-in-out;
    -ms-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;

    @include size-below(md) {
      max-width: 50%;
    }

    @include size-below(sm) {
      max-width: 100%;
      width: 100%;
    }

    &.show {
      left: 0;
      -webkit-transition: all .5s ease-in-out;
      -ms-transition: all .5s ease-in-out;
      transition: all .5s ease-in-out;
    }

    .nav {
      height: 100%;
      padding: 1em 0 1em 0;
    }
  }
}
</style>
