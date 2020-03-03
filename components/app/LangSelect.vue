<template lang="pug">
  #languages(v-click-outside="closeDropdown").inline-flex.justify-center.pr-4
    button(
      aria-controls="language-dropdown"
      @click="showDropdown = !showDropdown"
      )#lang-dropdown-control.pl-2.pr-2
      span(:class="flagClasses(currentLocale)")
    ul(:class="{ 'show': showDropdown }")#language-dropdown.absolute.bg-light.p-2.animate.bounceIn
      li(
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :title="locale.name"
        @click="showDropdown = !showDropdown"
        ).text-primary.hover_text-dark.hover_bg-primary.hover_underline.focus_text-dark.focus_bg-primary.focus_underline.active_text-contrast.p-2
        nuxt-link(
          :active="currentLocale && currentLocale == locale.code"
          :to="switchLocalePath(locale.code)"
          )
          .inline-block(:class="flagClasses(locale.code)")
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
    display: none;
    top: 60px;

    &.show {
      display: block;
    }
  }
}
</style>
