<template lang="pug">
  div#languages
    nuxt-link(
      v-for="locale in $i18n.locales"
      :class="linkDisplayClasses"
      :key="locale.code"
      :title="locale.name"
      :to="switchLocalePath(locale.code)"
      v-b-tooltip.hover
    ).language-select-item.p-2
      span(v-if="useFlags" :class="flagClasses(locale.code)")
      span(v-else) {{ locale.code }}
</template>

<script>
// TODO: implement form select when there are too many languages to display

export default {
  props: {
    useFlags: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    linkDisplayClasses() {
      if (this.tooManyLocalesFor('lg')) return 'd-none'
      else if (this.tooManyLocalesFor('md')) return 'd-none d-md-none d-lg-inline-block'
      else if (this.tooManyLocalesFor('sm')) return 'd-none d-md-inline-block'
      else return ''
    }
  },
  methods: {
    flagClasses(code) {
      if (code === 'en') code = 'gb'
      return this.useFlags ? `flag-icon flag-icon-squared flag-icon-${code}` : ''
    },
    tooManyLocalesFor(size) {
      let limit = 0
      switch (size) {
        case 'sm':
          limit = 2
          break
        case 'md':
          limit = 4
          break
        case 'lg':
          limit = 8
          break
        default:
          break
      }
      return this.$i18n.locales.length > limit
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
