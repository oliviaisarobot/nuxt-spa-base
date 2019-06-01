<template lang="pug">
  div(ref="contentBlock").content-block.container
    slot(name="tile-text")
    b-row.tiles.d-flex.justify-content-center.mb-4
      b-col(
        v-for="(tile, index) in tiles"
        :md="tiles.length > 4 ? '3' : '4'"
        sm="6"
        :class="{ 'cursor-pointer': tile.href }"
        :key="index"
        @click="goTo(tile.href)"
        ).tile.mb-2.text-center
        b-img(v-if="tile.img" :alt="tile.title + '-' + index" :src="tile.img" :class="{ 'fade': fadeImages }").tile-image
        h3(v-if="tile.title") {{ tile.title }}
        p(v-if="tile.text") {{ tile.text }}
</template>

<script>
export default {
  props: {
    fadeImages: {
      type: Boolean,
      default: false
    },
    tiles: {
      type: Array,
      default: () => { return [] } // expected: [{ title: '', page: '', img: '', text: '' }]
    }
  },
  methods: {
    goTo(url) {
      if (!url) return
      const external = url.startsWith('http')
      external ? window.open(url) : this.$router.push(this.localePath(url))
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.tiles {
  .tile {
    .tile-image {
      max-height:               200px;
      max-width:                100%;

      &.fade {
        filter:                 grayscale(100%);
        opacity:                .5;
        transition:             .4s ease;
        -webkit-filter:         grayscale(100%);

        &:hover {
          filter:               none;
          opacity:              1;
        }
      }
    }

    h3 {
      color:                    $color-primary;
      font-size:                $font-size-m!important;
      font-weight:              bold;
      height:                   calc(#{$font-size-m} * 2.5);
      margin:                   0 0 .6em 0!important;
      padding:                  0!important;
      text-align:               center;
    }
  }
}
</style>
