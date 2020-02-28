<template lang="pug">
  div.flex.items-center.justify-stretch.h-screen
    h1.text-center.pb-10.pt-10.bg-white.w-full Under maintenance!
</template>

<script>

export default {}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

html, body {
  background: repeating-linear-gradient(
    -45deg,
    black,
    black 30px,
    yellow 30px,
    yellow 50px
  );
  height: 100vh;
  margin: 0;
  width: 100vw;
}
</style>
