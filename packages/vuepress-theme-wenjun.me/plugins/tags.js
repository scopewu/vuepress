const path = require('path');
const chunk = require('lodash.chunk');
const { cutDate } = require('../utils');

module.exports = (option, context) => {
  return {
    name: 'tags-pages',
    additionalPages() {
      const { pageSize } = option;
      const { pages: _pages } = context.getSiteData
        ? context.getSiteData()
        : context;

      const pagesTags = [...new Set(_pages.flatMap(({ tags }) => tags))];
      const pages = _pages.sort(
        ({ relativePath: a }, { relativePath: b }) => cutDate(b) - cutDate(a),
      );

      const articleObj = pagesTags.reduce((prev, tag) => {
        prev[tag] = pages.reduce((previousValue, page) => {
          if (page.tags.includes(tag)) {
            previousValue.push(page);
          }
          return previousValue;
        }, []);

        return prev;
      }, {});

      return pagesTags.flatMap((tag, i, arr) => {
        return chunk(articleObj[tag], pageSize).map((articles, j, array) => {
          const pagination = array.length;
          const index = j + 1; // 当前分页，从 1 开始

          const prefix = `/tags/${tag}/`;

          let link = `${prefix}p${index}.html`;

          let prevLink = `${prefix}p${index - 1}.html`;
          let nextLink = `${prefix}p${index + 1}.html`;

          if (index === 1) {
            link = prefix;
            prevLink = false;
          }

          if (index === 2) {
            prevLink = prefix;
          }

          if (index === pagination) {
            nextLink = false;
          }

          return {
            path: link,
            filePath: path.resolve(__dirname, './tag.md'),
            permalink: link,
            title: `标签🏷️ ${tag} 归档分类文章`,
            frontmatter: {
              description:
                'WenJun 网站博客文章归档标签分类聚合🏷️，' +
                `归档标签 ${tag} 分类的文章介绍，` +
                `在 WenJun.me 学习更多关于 ${tag} 的知识。`,
              articles: articles,
              prevLink,
              nextLink,
              index,
              pagination,
              tagName: tag,
              pagesTags,
            },
          };
        });
      });
    },
    extendPageData($page) {
      const {
        frontmatter: { tags, tag }, // 页面的 frontmatter 对象
      } = $page;

      $page.tags = Array.isArray(tags) ? tags.slice(0) : [];
      if (tag) {
        $page.tags.push(tag);
      }
    },
  };
};
