define(['exports', 'module'], function (exports, module) {
    // Browser Support: IE9+, dependancy on Element.children

    'use strict';

    module.exports = function (htmlStr) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = htmlStr;
        return Array.prototype.slice.call(wrapper.children);
    };

    ;
});