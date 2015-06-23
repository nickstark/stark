define(['exports', 'module'], function (exports, module) {
    'use strict';

    module.exports = function (tagName) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
    };

    ;
});