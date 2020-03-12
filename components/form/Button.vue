<template lang="pug">
  button(
    :class="classes"
    @click="goTo()"
    )
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
</style>
