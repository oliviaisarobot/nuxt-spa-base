<template lang="pug">
  div.page-parallax
    div.container
      slot(name="content")
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

.page-parallax {
  min-height: 300px;
  position: relative;

  &:before {
    @include parallax-bg;
    @include bg-before;
    @include image-filter-brightness(80);
  }

  .container {
    position: relative;
    z-index: inherit!important;
  }
}
</style>
