<template lang="pug">
  div
    app-page-heading.index-heading
      template(slot="heading")
        h1 {{ $t('placeholders.he ader') }}
        div {{ $t('placeholders.paragraph') }}
    block-tiles(:tiles="tilesOne")
    hr.container
    block-content
      template(slot="first")
        p {{ $t('placeholders.paragraph') }}
      template(slot="second")
        p {{ $t('placeholders.paragraph') }}
    block-slider(:slides="slides")
    block-tiles(:tiles="tilesTwo", :fade-images="true")
      template(slot="tile-text")
        h2 {{ $t('placeholders.header') }}
    block-content(:double="false").image-content-block.second-banner.image-filter-grayscale-100.text-light
      template(slot="first")
        h1.text-right {{ $t('placeholders.header') }}
        p.text-right {{ $t('placeholders.paragraph') }}
    block-slider(:slides="slides")
    block-content
      template(slot="first")
        p {{ $t('placeholders.paragraph') }}
        form-button(text="Some text" page="even-more" variant="outline-primary").mt-4
      template(slot="second")
        b-img(src="~/assets/images/blank-image.svg").image-150
</template>

<script>
import AppPageHeading from '~/components/app/PageHeading'
import BlockContent from '~/components/block/Content'
import BlockSlider from '~/components/block/Slider'
import BlockTiles from '~/components/block/Tiles'

export default {
  components: {
    AppPageHeading,
    BlockContent,
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
  },
  mounted() {
    // this.$store.commit('browser/setAnchors', [])
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.image-content-block {
  height: 500px;

  h1 {
    padding-top: 2em;
  }
}

.index-heading::before {
  background-image: url('../assets/photos/home-office-1867761_1920_Pixabay_by_Pexels.jpg');
}

.image-150 {
  max-height: 150px;
}

.second-banner {
  background: url('../assets/photos/pen-4163403_1920_Pixabay_by_Samuel_F_Johanns.jpg');
}
</style>
