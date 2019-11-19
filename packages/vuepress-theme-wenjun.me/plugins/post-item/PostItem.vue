<template>
  <div class="post-item">
    <div class="post-title">
      <router-link :to="page">{{ page.title }}</router-link>
    </div>
    <p class="post-description">{{ page.frontmatter.description }}</p>
    <div>
      <div class="post-date">
        <img class="post-item-emoji" src="./emoji_calendar.svg" alt="📆" />
        <time class="post-date" :datetime="lastUpdated">{{ lastUpdated }}</time>
      </div>
      <div class="post-item-tags" v-show="page.tags.length">
        <img class="post-item-emoji" src="./emoji_label.svg" alt="🏷" />
        <router-link
          class="post-item-tag-link"
          v-for="tag in page.tags"
          :to="{ path: `/tags/${tag}/` }"
          rel="tag"
          >{{ tag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: ['page'],
  computed: {
    lastUpdated() {
      const _lastUpdated = new Date(this.page.lastUpdated);
      if (isNaN(_lastUpdated.getFullYear())) return '-';

      const year = _lastUpdated.getFullYear();
      const month = _lastUpdated.getMonth() + 1;
      const day = _lastUpdated.getDate();

      return `${year}/${month}/${day}`;
    },
  },
};
</script>

<style>
.post-item {
  padding: 1.5rem 0 1rem;
  border-bottom: 1px dotted #efefef;
}
.post-title {
  font-size: 20px;
}
.post-description {
  margin: 0.8rem 0 0.5rem;
}
.post-date {
  display: inline;
  font-size: 14px;
}
.post-item-emoji {
  width: 16px;
  margin-top: -3px;
  margin-right: 0.2rem;
  vertical-align: middle;
  filter: hue-rotate(100deg) opacity(80%);
}
.post-item-tags .post-item-emoji {
  transform: rotate(45deg);
}
.post-item-tags {
  display: inline;
  margin-left: 1rem;
  font-size: 14px;
}
.post-item-tag-link:not(:last-of-type) {
  margin-right: 0.3rem;
}
.post-item-tag-link:not(:last-of-type):after {
  content: ',';
}
</style>
