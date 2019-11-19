<template>
  <div class="theme-container" :class="pageClasses">
    <Navbar />

    <div class="page-container">
      <Content class="theme-default-content" />

      <PageEdit />

      <div class="disqus-comments-container" v-show="shouldShowDisqus">
        <div id="disqus_thread" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';
import PageEdit from '@theme/components/PageEdit.vue';
import Footer from '@theme/components/Footer.vue';

export default {
  components: { Navbar, PageEdit, Footer },

  computed: {
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [userPageClass];
    },

    shouldShowDisqus() {
      const path = this.$route.path;
      return /^\/\d{4}\/\d{1,2}\//.test(path);
    },
  },
};
</script>

<style lang="stylus">
@require '~@vuepress/theme-default/styles/wrapper.styl';

.disqus-comments-container {
  @extend $wrapper;
  padding-top: 0;
}
</style>
