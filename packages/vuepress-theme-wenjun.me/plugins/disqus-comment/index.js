const path = require('path');

module.exports = (options = {}, context) => ({
  name: 'disqus-comment',
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
});
