<template>
  <div v-if="tags.length">
    <span class="article-tag-title">标签 🏷️</span>
    <router-link
      :to="{ path: `/tags/${tag}/` }"
      class="article-tag"
      v-for="tag in tags"
      rel="tag"
      >{{ tag }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'Tags',
  computed: {
    tags() {
      return this.$page.tags;
    },
  },
};
</script>

<style lang="stylus">
.article-tag-title {
  font-weight: 500;
  color: #4e6e8e;
}
.article-tag {
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding: 2px 10px 4px;
  color: $accentColor;
  background-color: #e7eef3;
  border-radius: 18px;
}
.article-tag:not(:last-of-type) {
  margin-right: 0.8rem;
}
.article-tag:hover {
  text-decoration: underline;
}
</style>
