# vuepress-plugin-google-gtag

> google global site tag(gtag.js) plugin for vuepress

## install
```bash
yarn add -D vuepress-plugin-google-gtag
# OR npm install -D vuepress-plugin-google-gtag
```

## Usage
```js
module.exports = {
  plugins: [
    [ 
      'google-gtag', // OR vuepress-plugin-google-gtag
      {
        'ga': '' // UA-00000000-0
      }
    ]  
  ] 
}
```

## Options
### ga
- Type: `string`
- Default: `undefined`

Provide the Google Analytics ID to enable integration.