const path = require('path');
const chunk = require('lodash.chunk');
const { cutDate } = require('../utils');

module.exports = (option, context) => {
  return {
    name: 'articles-paginator',
    additionalPages() {
      const { pageSize } = option;
      const { pages: _pages } = context.getSiteData
        ? context.getSiteData()
        : context;

      const pages = _pages
        .filter(({ path }) => /^\/\d{4}\/\d{1,2}\//.test(path))
        .sort(
          ({ relativePath: a }, { relativePath: b }) => cutDate(b) - cutDate(a),
        );

      return chunk(pages, pageSize).map((articles, i, arr) => {
        const pagination = arr.length; // 分页总数
        const index = i + 1; // 当前分页，从 1 开始

        let link = `/articles/p${index}.html`;
        let permalink = `/articles/p${index}.html`;

        let prevLink = `/articles/p${index - 1}.html`;
        let nextLink = `/articles/p${index + 1}.html`;

        if (index === 1) {
          link = '/';
          permalink = '/';

          prevLink = false;
        }

        if (index === 2) {
          prevLink = '/';
        }

        if (index === pagination) {
          nextLink = false;
        }

        return {
          path: link,
          filePath: path.resolve(__dirname, './articles-paginator.md'),
          permalink,
          title: 'WenJun',
          frontmatter: {
            description:
              'WenJun 发布博客技术文章，学习前端开发和编程知识，' +
              '分享前端（Html/JavaScript/CSS）知识点, 我的个人博客网站 WenJun.me',
            articles,
            prevLink,
            nextLink,
            index,
            pagination,
          },
        };
      });
    },
  };
};
