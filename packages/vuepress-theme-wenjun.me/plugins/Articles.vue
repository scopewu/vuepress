<template>
  <div>
    <post-item v-for="page in pages" :key="page.key" :page="page" />
    <div class="articles-page-nav" v-if="pagination > 1">
      <router-link v-if="prevLink" :to="prevLink" rel="prev"
        >上一页</router-link
      >
      <span v-if="prevLink && nextLink" class="sep">|</span>
      <router-link v-if="nextLink" :to="nextLink" rel="next"
        >下一页</router-link
      >
      <span class="pagination">第 {{ index }} 页，共 {{ pagination }} 页</span>
    </div>
  </div>
</template>

<script>
import PostItem from './post-item/PostItem';

export default {
  name: 'Articles',
  components: { PostItem },
  computed: {
    pages() {
      return this.$frontmatter.articles;
    },
    prevLink() {
      return this.$frontmatter.prevLink;
    },
    nextLink() {
      return this.$frontmatter.nextLink;
    },
    index() {
      return this.$frontmatter.index;
    },
    pagination() {
      return this.$frontmatter.pagination;
    },
  },
};
</script>

<style>
.articles-page-nav {
  padding-top: 1.5rem;
}
.articles-page-nav .sep {
  margin: 0 5px;
  font-size: smaller;
}
.articles-page-nav .pagination {
  margin-left: 1rem;
}
</style>
