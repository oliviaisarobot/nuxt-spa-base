<template lang="pug">
  footer.d-flex.flex-column.align-items-center
    nav.row.footer-top.container
      ul.flex.justify-center.w-full.items-center.flex-col.sm_flex-row
        li(
          v-for="(anchor, index) in nav"
          :key="index"
          ).p-3.text-primary.hover_underline.focus_underline
          nuxt-link(
            :active="currentPath == anchor"
            :to="localePath(anchor)"
            ) {{ $t('navigation.' + anchor) }}
    .row.footer-bottom.text-center
      .col © {{ year }}. {{ business }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      nav: state => state.browser.nav
    }),
    business() {
      return process.env.businessName
    },
    currentPath() {
      return this.$router.path
    },
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

footer {
  background-color: $color-base-gray-dark;
  color: $color-base-light;
  font-size: $font-size-xs;
  margin: 6em 0 0 0;

  .footer-top {
    padding: 3em 0 2em 0;
  }

  .footer-bottom {
    background-color: $color-base-dark;
    font-size: $font-size-xs;
    padding: 3em 0 3em 0;
    width: 100%;
  }
}
</style>
