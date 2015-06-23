// Browser Support: IE9+, dependancy on Element.children

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (htmlStr) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = htmlStr;
    return Array.prototype.slice.call(wrapper.children);
};

;
module.exports = exports['default'];