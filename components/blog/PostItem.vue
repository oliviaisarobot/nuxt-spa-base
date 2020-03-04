<template lang="pug">
  div.post-item.relative
    div.post-info.text-white.absolute.w-full.bottom-0.pt-3.pb-3.pl-5.pr-5
      div
        div.text-xs.text-right {{ data.date | moment('YYYY/MM/D') }}
        h3.flex.items-center.text-m.sm_text-3xl
          nuxt-link(:to="localePath('/posts/' + data.slug)").text-contrast.hover_underline.focus_underline {{ data.title }}
        div
          ul(v-if="tags && tags.length > 0")
            li(v-for="tag in tags", :key="tag").tag.inline-block.p-2
              a.hover_text-primary {{ tag }}
      hr.hidden.sm_block
      p.hidden.sm_block.summary.pt-2 {{ data.summary }}
    img(:src="data.cover" role="button" @click="viewPost").cover.w-full.h-full.object-cover.cursor-pointer.opacity-25
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    tags() {
      return this.data.get_tags ? this.data.get_tags.split(', ') : []
    }
  },
  methods: {
    viewPost() {
      if (this.data.slug) {
        this.$router.push(this.localePath('/posts/' + this.data.slug))
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.post-item {
  height: 400px;
  overflow: hidden;

  .post-info {
    min-height: 33%;
    z-index: 1;
    
    &:before {
      background-color: $color-base-dark;
      opacity: .9;
      z-index: -1;
      @include bg-before;
    }

    .summary {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
