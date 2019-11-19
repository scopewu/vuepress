export default function({ router, siteData }) {
  // disqus.com comments
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    const disqusEmbed = 'https://wenjun.disqus.com/embed.js';
    const disqusEmbedPreloadLink = document.createElement('link');
    disqusEmbedPreloadLink.rel = 'preload';
    disqusEmbedPreloadLink.href = disqusEmbed;
    disqusEmbedPreloadLink.as = 'script';
    document.head && document.head.appendChild(disqusEmbedPreloadLink);

    setTimeout(function() {
      window.disqus_config = function() {
        this.page.url = location.href;
        this.page.identifier = location.pathname;
      };

      const d = document,
        s = d.createElement('script');
      s.src = disqusEmbed;
      s.setAttribute('data-timestamp', +new Date());
      s.async = 1;
      (d.head || d.body).appendChild(s);
    }, 4000);

    router.afterEach(function(to) {
      const { pages } = siteData;
      const origin =
        location.origin || location.protocol + '//' + location.host;

      if (/^\/\d{4}\/\d{1,2}\//.test(to.path) && window.DISQUS) {
        DISQUS.reset({
          reload: true,
          config: function() {
            this.page.url = origin + to.fullPath;
            this.page.identifier = to.fullPath;
            this.page.title = (
              pages.find(({ path }) => path === to.path) || {}
            ).title;
          },
        });
      }
    });
  }
}
