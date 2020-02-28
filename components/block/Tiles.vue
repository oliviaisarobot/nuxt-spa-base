<template lang="pug">
  div.content-block.container
    slot(name="tile-header")
    div.grid.gap-8.grid-cols-1.sm_grid-cols-2.lg_grid-cols-12.tileset
      div(
        v-for="(tile, index) in tiles"
        :class="tileClass(tile, index)"
        :key="index"
        @click="goTo(tile.href)"
        ).tile.col-span-1.flex.flex-col.items-center
        img(
          v-if="tile.img && !useIcons"
          :alt="tile.imgAlt || tile.title + '-' + index"
          :class="{ 'fade': fadeImages, 'small-img': smallImages }"
          :src="tile.img"
          :title="tile.imgAlt || tile.title"
          v-b-tooltip.hover
          ).tile-image.mb-2
        i(v-if="useIcons").material-icons tile.icon
        h3(v-if="tile.title").text-secondary.p-0.text-center {{ tile.title }}
        p(v-if="tile.text").mt-6 {{ tile.text }}
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
    },
    tileClass(tile, i) {
      const classes = []
      const remain = this.tiles.length % 4
      if (tile.href) classes.push('cursor-pointer')
      if (this.tiles.length >= 4) {
        if (i >= this.tiles.length - remain) {
          classes.push('lg_col-span-' + 12 / remain)
        } else {
          classes.push('lg_col-span-3')
        }
      } else {
        classes.push('lg_col-span-4')
      }
      if (i < this.tiles.length - 1) {
        classes.push('sm_col-span-1')
      } else {
        classes.push('sm_col-span-2')
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.tileset {
  .tile {
    .tile-image {
      max-height:               200px;
      max-width:                200px;

      &.small-img {
        max-height: 50px!important;

        @include size-below(sm) {
          max-height:           40px;
          max-width:            40px;
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
      height:                   calc(#{$font-size-m} * 2.5);
      margin:                   0 0 .6em 0!important;
    }
  }
}
</style>
