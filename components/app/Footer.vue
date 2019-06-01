<template lang="pug">
  footer.d-flex.flex-column.align-items-center
    b-row.footer-top.container
      b-col(sm="12" md="4") contact
      b-col(sm="12" md="4") links
      b-col(sm="12" md="4") static map
    b-row.footer-bottom.text-center
      b-col © {{ year }}. {{ business }}
</template>

<script>
export default {
  computed: {
    business() {
      return process.env.businessName
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
