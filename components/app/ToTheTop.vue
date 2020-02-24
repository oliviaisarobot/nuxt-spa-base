<template lang="pug">
  div(:class="{ 'visible': scrollPosition > 450 }" @click="scrollToTop")#to-the-top
    a(:title="$t('navigation.scroll-to-the-top')").d-flex.align-items-center.justify-content-center
      i.material-icons arrow_upward
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      scrollPosition: state => state.browser.window.scrollY
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.$store.commit('browser/setScrollY')
    },
    scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop
      if (c > 0) {
        window.scrollTo({
          top: 0,
          left: c - c / 8,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

#to-the-top {
  bottom: 20px;
  opacity: 0;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  position: fixed;
  right: 20px;
  visibility: hidden;
  z-index: 1000;
  @include transition;

  a {
    background-color: $color-contrast;
    color: white;
    font-weight: bold;
    height: 40px;
    width: 40px;

    i {
      font-size: 24px;
      height: 24px;
    }
  }

  &:hover, &:focus-within {
    opacity: 1!important;
  }

  &.visible {
    opacity: 0.4;
    visibility: visible;
  }

  @include size-below(sm) {
    background-color: $color-base-light;

    &.visible {
      opacity: 1;
    }
  }

  @include size-above(lg) {
    right: 100px;
    bottom: 100px;
  }
}
</style>
