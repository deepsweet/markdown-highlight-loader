'use strict';

var loaderUtils = require('loader-utils');
var marked = require('marked');
var highlight = require('highlight.js');

module.exports = function(source) {
    var query = loaderUtils.parseQuery(this.query);
    var options = {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        langPrefix: 'hljs ',
        highlight: function(code) {
            return highlight.highlightAuto(code).value;
        }
    };

    if (this.cacheable) {
        this.cacheable();
    }

    Object.keys(query).forEach(function(key) {
        options[key] = query[key];
    });

    return marked(source, options);
};
