<template lang="pug">
  div(ref="contentBlock").content-block
    b-carousel(
      v-model="slide"
      :controls="controls"
      :indicators="indicators"
      :interval="interval"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    ).slider.w-100
      b-carousel-slide(
        v-for="(slide, index) in slides"
        :caption="slide.caption"
        :class="{ 'text-only': !slide.hasOwnProperty('img') || textOnly }"
        :img-blank="!slide.hasOwnProperty('img')"
        :key="index"
        :text="slide.text"
      )
        b-img(
          v-if="slide.img"
          :alt="textOnly ? '' : slide.caption"
          :src="textOnly ? '' : resolveImgPath(slide.img)"
          slot="img"
        )
</template>

<script>
export default {
  props: {
    controls: {
      type: Boolean,
      default: true
    },
    indicators: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    slides: {
      type: Array,
      default: () => { return [] },
      required: true
    },
    textOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    resolveImgPath(path) {
      if (!path) return
      return require(path)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.slider {
  background-color: $color-primary;
  color: $color-base-light;
  max-height: 350px;

  .carousel-item {
    img {
      display: block;
      max-height: 350px;
      object-fit: cover;
      width: 100%;
    }

    &.text-only {
      height: 200px;

      img {
        max-height: 250px;
      }
    }
  }

  .carousel-indicators {
    bottom: 10px!important;
    position: absolute;
    z-index: 99;

    li {
      border: 1px solid #fff;
      cursor: pointer;
      display: block;
      height: 12px;
      overflow: hidden;
      text-indent: 25px;
      width: 12px;
      float: left;
      margin: 0 3px;

      &:not(.active) {
        background-color: $color-primary!important;
      }

      &.active {
        background-color: #fff;
      }
    }
  }

}
</style>
