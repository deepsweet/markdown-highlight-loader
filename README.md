## Markdown (marked + highlight.js) loader for [webpack](https://webpack.github.io/)

[![npm](http://img.shields.io/npm/v/markdown-highlight-loader.svg?style=flat-square)](https://www.npmjs.org/package/markdown-highlight-loader)
[![deps](http://img.shields.io/david/deepsweet/markdown-highlight-loader.svg?style=flat-square)](https://david-dm.org/deepsweet/markdown-highlight-loader)
[![gratipay](http://img.shields.io/gratipay/deepsweet.svg?style=flat-square)](https://gratipay.com/deepsweet/)

[marked](https://github.com/chjj/marked) + [highlight.js](https://github.com/isagalaev/highlight.js).

### Install

```sh
$ npm i -S markdown-highlight-loader
```

### Usage

```js
/*
include highlight.js theme styles, for example in "vendor" chunk:
entry: {
    vendor: [
        …
        'highlight.js/styles/railscasts.css'
    ],
    …
*/
module: {
    loaders: [ {
        test: /\.md$/,
        loader: 'html!markdown-highlight'
        // loader: 'html!markdown-highlight?+breaks&-smartLists'
    } ]
}
```

[Documentation: Using loaders](https://webpack.github.io/docs/using-loaders.html).

### License
[WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)
