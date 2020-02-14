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
        ).tile.mb-4.text-center
        b-img(
          v-if="tile.img && !useIcons"
          :alt="tile.imgAlt || tile.title + '-' + index"
          :class="{ 'fade': fadeImages, 'small-img': smallImages }"
          :src="tile.img"
          :title="tile.imgAlt || tile.title"
          v-b-tooltip.hover
          ).tile-image.mb-2
        i(v-if="useIcons" :class="'mdi-' + tile.icon").mdi
        h3(v-if="tile.title") {{ tile.title }}
        p(v-if="tile.text") {{ tile.text }}
    slot(name="tile-footer")
</template>

<script>
export default {
  props: {
    useIcons: {
      type: Boolean,
      default: false
    },
    fadeImages: {
      type: Boolean,
      default: false
    },
    smallImages: {
      type: Boolean,
      default: false
    },
    tiles: {
      type: Array,
      default: () => { return [] } // expected: [{ title: '', page: '', img: '', text: '', icon: '' }]
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
    .mdi {
      font-size:                $font-size * 4;
    }

    .tile-image {
      max-height:               200px;
      max-width:                90%;

      &.small-img {
        max-height: 50px!important;

        @include size-below(sm) {
          max-height:           40px;
          max-width:            60%;
        }
      }

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
