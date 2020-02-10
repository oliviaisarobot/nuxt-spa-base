<template lang="pug">
  #languages
    b-dropdown(right)
      template(v-slot:button-content)
        span(:class="flagClasses(currentLocale)")
        span.code {{ currentLocale }}
      b-dropdown-item(
        v-for="locale in $i18n.locales"
        :active="currentLocale && currentLocale == locale.code"
        :key="locale.code"
        :title="locale.name"
        :href="switchLocalePath(locale.code)"
        v-b-tooltip.hover
        )
        span(:class="flagClasses(locale.code)")
        span.code {{ locale.code }}
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n.locale
    }
  },
  methods: {
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
  .language-select-item {
    font-size: $font-size-s;
  }

  .code {
    padding-left: .5em;
    text-transform: uppercase;
  }
}
</style>
