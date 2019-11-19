module.exports = {
  // extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/active-header-links', false],
    '@vuepress/plugin-nprogress',
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': 'TIP',
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '警告'
      }
    }],
    [
      require('./plugins/tags.js'),
      {
        pageSize: 10,
      },
    ],
    [
      require('./plugins/articles-paginator'),
      {
        pageSize: 10,
      },
    ],
    [require('./plugins/disqus-comment/index')],
  ],
};
