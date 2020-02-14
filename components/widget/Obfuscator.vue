<template lang="pug">
  span(v-html="obfuText").obfu
</template>

<script>
export default {
  props: {
    rev: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    obfuText() {
      const distract = '<span aria-hidden="true" class="invisible">'
      const txt = this.rev ? this.text.split('').reverse().join('') : this.text
      return txt ? txt.split('').join(distract + this.randomString() + '</span>') : ''
    }
  },
  methods: {
    randomString() {
      return Math.random().toString(36).slice(2)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.obfu {
  span.invisible {
    display: inline-block;
    height: 0!important;
    width: 0!important;
  }
}
</style>
