<template lang="pug">
  div
    app-page-heading.post-slug-heading
      template(slot="heading")
        h1.text-white {{ post.title }}
    div.container
      div(v-if="post.format == 1" v-html='$md.render(post.content)')
      div(v-else v-html="post.content")
</template>

<script>
import AppPageHeading from '~/components/app/PageHeading'

export default {
  components: {
    AppPageHeading
  },
  head() {
    return {
      title: this.post.title + ' | ' + process.env.businessName,
      meta: [
        { hid: 'description', name: 'description', content: this.post.summary }
      ]
    }
  },
  data() {
    return {
      post: {
        title: '',
        slug: '',
        author: '',
        summary: '',
        tags: '',
        cover: '',
        cover_src: '',
        date: '',
        status: '',
        format: '',
        content: ''
      }
    }
  },
  async asyncData({ $axios, params }) {
    try {
      const post = await $axios.$get(`/posts/${params.slug}`)
      return { post }
    } catch (e) {
      return { post: {} }
    }
  },
  mounted() {
    console.log(this.$md)
  }
}
</script>
