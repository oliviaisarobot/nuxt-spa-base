<template lang="pug">
  div.google-map-container
    GmapMap(:center="center" :map-type-id="mapTypeId" :zoom="5")
      GmapMarker(
        v-for="(item, index) in markers"
        :clickable="true"
        :draggable="true"
        :key="index"
        :position="item.position"
        @click="center=item.position")
</template>

<script>
export default {
  props: {
    markers: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'terrain'
    }
  }
}
</script>

<style lang="scss" scoped>
  .google-map-container {
    height: 450px;
    max-width: 992px;
    width: 100%;
  }
</style>
