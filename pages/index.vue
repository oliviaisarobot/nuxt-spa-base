<template lang="pug">
  div(ref="page")
    block-content(:double="false").image-content-block.main-banner
      template(slot="first")
        h1 {{ $t('placeholders.header') }}
        p {{ $t('placeholders.paragraph') }}
    block-tiles(:tiles="tilesOne")
    hr.container
    block-content(name="about")
      template(slot="first")
        p {{ $t('placeholders.paragraph') }}
      template(slot="second")
        p {{ $t('placeholders.paragraph') }}
    block-tiles(:tiles="tilesTwo", :fade-images="true")
      template(slot="tile-text")
        h2 {{ $t('placeholders.header') }}
    block-content(:double="false").image-content-block.second-banner.image-filter-grayscale-100.text-light
      template(slot="first")
        h1.text-right Lorem ipsum dolor sit amet
        p.text-right {{ $t('placeholders.paragraph') }}
    block-content(name="even-more")
      template(slot="first")
        p {{ $t('placeholders.paragraph') }}
        form-button(text="Some text" page="even-more" variant="outline-primary").mt-4
      template(slot="second")
        b-img(src="~/assets/images/blank-image.svg").image-150
</template>

<script>
import BlockContent from '~/components/block/Content'
import BlockTiles from '~/components/block/Tiles'

export default {
  components: {
    BlockContent,
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
    }
  },
  mounted() {
    console.log('CONTENT BLOCKS', this.$refs.page.children)
    // this.$store.commit('browser/setBlocks', this.$refs.contentBlock)
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

.main-banner {
  background: url('../assets/images/budapest-2058395.jpg');
}

.image-150 {
  max-height: 150px;
}

.second-banner {
  background: url('../assets/images/sunset-4212128.jpg');
}
</style>
