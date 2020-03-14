<template lang="pug">
  #languages(v-click-outside="closeDropdown").inline-flex.justify-center.pr-4.relative
    button(
      aria-controls="language-dropdown"
      @click="showDropdown = !showDropdown"
      )#lang-dropdown-control.pl-2.pr-2
      span(:class="flagClasses(currentLocale)")
    ul(v-if="showDropdown")#language-dropdown.absolute.bg-light.animate-bounce-in
      li(
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :title="locale.name"
        @click="showDropdown = !showDropdown"
        ).hover_bg-white.focus_bg-white
        nuxt-link(
          :active="currentLocale && currentLocale == locale.code"
          :to="switchLocalePath(locale.code)"
          ).flex.no-wrap
          .inline-block(:class="flagClasses(locale.code)")
          .inline-block.pl-3 {{ locale.name }}
          .inline-block.pl-3(v-if="currentLocale == locale.code")
            i.material-icons.font-bold done
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  },
  methods: {
    closeDropdown() {
      this.showDropdown = false
    },
    flagClasses(code) {
      if (code === 'en') code = 'gb'
      return `flag-icon flag-icon-squared flag-icon-${code}`
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

#languages {
  #language-dropdown {
    box-shadow: 1px 2px 2px $color-base-gray-light;
    /* display: none; */
    top: 60px;
    right: 0;

    li {
      a {
        padding: 1em 1.5em 1em 1.5em;
        text-decoration: none!important;
      }
    }
  }
}
</style>
