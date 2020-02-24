<template lang="pug">
  div.page-heading-parallax
    div.container
      slot(name="heading")
</template>

<script>
import BlockContent from '~/components/block/Content'
import WidgetObfuscator from '~/components/widget/Obfuscator'

export default {
  components: {
    BlockContent,
    WidgetObfuscator
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
    background-color: $color-secondary;
    background-blend-mode: multiply;
    @include parallax-bg;
    @include bg-before;
    @include image-filter-brightness(80);
  }

  .container {
    padding-top: 250px;
    position: relative;
    z-index: inherit!important;
  }
}
</style>
