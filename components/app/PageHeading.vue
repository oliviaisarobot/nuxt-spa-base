<template lang="pug">
  div.page-heading-parallax
    div.container
      slot(name="heading")
</template>

<script>
import BlockContent from '~/components/block/Content'

export default {
  components: {
    BlockContent
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.page-heading-parallax {
  min-height: 600px;
  margin-top: calc(1 - #{$header-height});
  position: relative;

  &:before {
    @include parallax-bg;
    @include bg-before;
    @include image-filter-multiply-secondary;
    @include image-filter-brightness(80);
  }

  .container {
    padding-top: 250px;
    position: relative;
    z-index: inherit!important;
  }
}
</style>
