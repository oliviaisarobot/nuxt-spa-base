<template lang="pug">
  div
    app-page-heading.index-heading
      template(slot="heading")
        h1.text-white {{ $t('placeholders.header') }}
        div.text-white {{ $t('placeholders.paragraph') }}
    block-tiles(:tiles="tilesOne").mt-8.mb-8.pt-8.pb-8
    hr.container
    block-content.mt-8.mb-8.pt-8.pb-8
      template(slot="first")
        p {{ $t('placeholders.paragraph') }}
      template(slot="second")
        p {{ $t('placeholders.paragraph') }}
    block-parallax.second-banner
    block-tiles(:tiles="tilesTwo", :fade-images="true").mt-8.mb-8.pt-8.pb-8
      template(slot="tile-header")
        h2 {{ $t('placeholders.header') }}
</template>

<script>
import AppPageHeading from '~/components/app/PageHeading'
import BlockContent from '~/components/block/Content'
import BlockParallax from '~/components/block/Parallax'
import BlockSlider from '~/components/block/Slider'
import BlockTiles from '~/components/block/Tiles'

export default {
  components: {
    AppPageHeading,
    BlockContent,
    BlockParallax,
    BlockSlider,
    BlockTiles
  },
  computed: {
    tilesOne() {
      return [
        { title: this.$t('placeholders.header'), text: this.$t('placeholders.paragraph-short'), img: require('~/assets/images/blank-image.svg') },
        { title: this.$t('placeholders.header'), text: this.$t('placeholders.paragraph-short'), img: require('~/assets/images/blank-image.svg') },
        { title: this.$t('placeholders.header'), text: this.$t('placeholders.paragraph-short'), img: require('~/assets/images/blank-image.svg') }
      ]
    },
    tilesTwo() {
      return [
        { title: '', text: '', img: require('~/assets/images/blank-image.svg') },
        { title: '', text: '', img: require('~/assets/images/blank-image.svg') },
        { title: '', text: '', img: require('~/assets/images/blank-image.svg') },
        { title: '', text: '', img: require('~/assets/images/blank-image.svg') },
        { title: '', text: '', img: require('~/assets/images/blank-image.svg') }
      ]
    },
    slides() {
      return [
        { title: this.$t('placeholders.header') + ' 1', text: this.$t('placeholders.paragraph-short'), img: '' },
        { title: this.$t('placeholders.header') + ' 2', text: this.$t('placeholders.paragraph-short'), img: '' },
        { title: this.$t('placeholders.header') + ' 3', text: this.$t('placeholders.paragraph-short'), img: '' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.index-heading::before {
  background-image: url('~assets/photos/home-office-1867761_1920_Pixabay_by_Pexels.jpg');
}

.second-banner::before {
  background-image: url('~assets/photos/pen-4163403_1920_Pixabay_by_Samuel_F_Johanns.jpg');
}
</style>
