<template lang="pug">
  div(:class="{ 'visible': scrollPosition > 450 }" @click="scrollToTop")#to-the-top.animate.slideIn
    a(:title="$t('navigation.scroll-to-the-top')").flex.items-center.justify-center.bg-secondary.text-white
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

#to-the-top {
  bottom: 50px;
  display: none;
  opacity: 0;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  padding: 0;
  position: fixed;
  right: 50px;
  touch-action: none;
  visibility: hidden;
  z-index: 1000;
  @include transition;

  a {
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
    bottom: 40px;
    display: block;
    opacity: 0.4;
    right: 0;
    visibility: visible;
    
    @include size-below(sm) {
      opacity: 1;
      /* padding-bottom: 100px; */
      /* padding-right: 65px; */
    }
    
    @include size-above(lg) {
      bottom: 100px;
      right: 100px;
    }
  }
  
  @include size-below(sm) {
    visibility: visible;
  }

}
</style>
