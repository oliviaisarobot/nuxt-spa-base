<template lang="pug">
  div#languages
    nuxt-link(
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :title="locale.name"
      :to="switchLocalePath(locale.code)"
      v-b-toggle.hover
    ).language-select-item.p-2
      span(v-if="useFlags" :class="flagClasses(locale.code)")
      span(v-else) {{ locale.code }}
</template>

<script>
export default {
  props: {
    useFlags: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    flagClasses(code) {
      if (code === 'en') code = 'gb'
      return this.useFlags ? `flag-icon flag-icon-squared flag-icon-${code}` : ''
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

#languages {
  .language-select-item {
    font-size: $font-size-s;
    text-transform: uppercase;
  }
}
</style>
