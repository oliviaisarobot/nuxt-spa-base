<template lang="pug">
  div(ref="contentBlock").content-block
    b-row.container.pt-3.pb-3.mt-4.mb-4
      b-col(sm="12" :md="double ? '6' : '12'")
        slot(name="first")
      b-col(v-if="double" sm="12" md="6")
        slot(name="second")
</template>

<script>
export default {
  props: {
    double: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.content-block {
  background-attachment: fixed!important;
  background-position: center!important;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  overflow: hidden;
  width: 100%;

  .container {
    margin: 0 auto;
    padding: 2em;

    img {
      width: 100%;
    }
  }
}
</style>
