<template lang="pug">
  div.content-block
    div(:class="{ 'md_grid-cols-2 sm_grid-cols-1': double, 'grid-cols-1': !double }").container.grid.h-full.gap-8
      slot(name="first")
      slot(name="second" v-if="double")
</template>

<script>
export default {
  props: {
    double: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
</style>
