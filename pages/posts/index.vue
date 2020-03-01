<template lang="pug">
  div
    app-page-heading.posts-heading
      template(slot="heading")
        h1.text-white {{ $t('posts.posts') }}
    div.container
      blog-post-item(v-for="post in posts", :key="post.id", :data="post").mb-10
</template>

<script>
import AppPageHeading from '~/components/app/PageHeading'
import BlogPostItem from '~/components/blog/PostItem'

export default {
  components: {
    AppPageHeading,
    BlogPostItem
  },
  head() {
    return {
      title: this.$t('posts.posts') + ' | ' + process.env.businessName
    }
  },
  data() {
    return {
      posts: []
    }
  },
  async asyncData({ $axios, params }) {
    try {
      const posts = await $axios.$get('/posts/')
      return { posts }
    } catch (e) {
      return { posts: [] }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style.scss';

.posts-heading::before {
  background-image: url('~assets/photos/pen-4163403_1920_Pixabay_by_Samuel_F_Johanns.jpg');
}
</style>
