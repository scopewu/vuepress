<template>
  <div>
    <h1>归档标签：{{ tag }}</h1>
    <div>
      <div>
        过滤归档标签
        <select class="tag-select" @change="selectTag">
          <option>选择标签</option>
          <option :value="tag" v-for="tag in tags">{{ tag }}</option>
        </select>
      </div>
    </div>
    <articles />
    <slot />
  </div>
</template>

<script>
import Articles from './Articles';

export default {
  name: 'TagArticles',
  components: { Articles },
  computed: {
    tag() {
      return this.$frontmatter.tagName;
    },
    tags() {
      return this.$frontmatter.pagesTags;
    },
  },
  methods: {
    selectTag($event) {
      const tag = $event.target.value;

      if (this.tags.includes(tag)) {
        this.$router.replace(`/tags/${tag}/`);
      }
    },
  },
};
</script>

<style>
.tag-select {
  margin-left: 0.5rem;
  margin-top: -3px;
  padding: 5px;
  vertical-align: middle;
  border-radius: 4px;
}
</style>
