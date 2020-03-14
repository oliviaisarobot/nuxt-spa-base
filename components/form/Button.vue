<template lang="pug">
  button(
    :class="classes"
    @click="goTo()"
    ).font-bold.uppercase.tracking-wide
    slot(name="content")
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    },
    page: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo() {
      if (!this.page) return
      this.$router.push(this.localePath(this.page))
    }
  }
}
</script>

<style lang="scss">
button {
  font-size: .8em;
  padding: 1em 1.5em 1em 1.5em;
  transition: all .2s ease-in-out;
  
  &:hover, &:focus {
    /* box-shadow: 1px 1px 2px gray; */
    @include image-filter-brightness(110);
    /* transform: translate(-2px -2px); */
  }
}
</style>
