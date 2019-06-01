<template lang="pug">
  b-btn(
    :class="{ 'cursor-pointer': page }"
    :variant="variant"
    @click="goTo()"
  ) {{ text }}
</template>

<script>
export default {
  props: {
    page: String,
    text: String,
    variant: {
      type: String,
      default: 'primary'
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
