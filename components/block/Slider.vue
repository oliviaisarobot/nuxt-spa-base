<template lang="pug">
  div.content-block
    div.slider-block
      div.indicators
        div(
          v-for="(value, index) in slides"
          :class="{ 'active': index === activeSlide }"
          :key="index"
          @click="selectSlide(index)"
          ).indicator
      div(
        v-for="(slide, index) in slides"
        v-touch:swipe="swipeHandler"
        :class="{ 'active': index === activeSlide }"
        :key="index"
        ).slide
        h3 {{ slide.title }}
        div.slide-text {{ slide.text }}
        b-img(v-if="slide.img && !textOnly" :src="resolveImgPath(slide.img)")
</template>

<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 6000
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
      activeSlide: 0,
      sliding: null,
      timer: null
    }
  },
  mounted() {
    document.documentElement.style.setProperty('--interval', this.interval + 'ms')
    this.animateSlides()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    animateSlides() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.nextSlide()
      }, this.interval + 500)
    },
    nextSlide() {
      if (this.activeSlide + 1 < this.slides.length) this.activeSlide += 1
      else this.activeSlide = 0
    },
    previousSlide() {
      if (this.activeSlide - 1 >= 0) this.activeSlide -= 1
      else this.activeSlide = this.slides.length - 1
    },
    resolveImgPath(path) {
      if (!path) return
      return require(path)
    },
    selectSlide(i) {
      if (i < this.slides.length && i >= 0) {
        this.activeSlide = i
        this.animateSlides()
      }
    },
    swipeHandler(direction) {
      if (direction === 'right') this.previousSlide()
      else if (direction === 'left') this.nextSlide()
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

:root {
  --interval: 2000ms;
}

.slider-block {
  background-color: $color-secondary;
  font-size: 14px;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  .slide {
    background-color: $color-secondary;
    display: none;
    padding: 1.5em;
    width: 100%;

    &.active {
      align-items: center;
      animation-name: slideIn, slideOut;
      animation-duration: .5s, .5s;
      animation-delay: 0s, var(--interval);
      display: flex!important;
      flex-direction: column;
    }

    h3 {
      font-size: 1.8em!important;
      margin: 1em 0 .75em 0!important;
      max-width: 90%;
    }

    .slide-text {
      margin-bottom: 4em;
      width: 50%;
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(30%);
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    85% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateX(-15%);
    }
  }

  .indicators {
    bottom: 2em;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 50;

    .indicator {
      background-color: rgba(0, 0, 0, .25);
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      height: 10px;
      transition: .3s ease-out;
      width: 10px;

      &:not(:first-child) {
        margin-left: 10px;
      }

      &.active {
        background-color: #fff;
        transition: .3s ease-in;
      }
    }
  }
}
</style>
