define(['exports', 'module'], function (exports, module) {
    'use strict';

    var currentId = 0;

    module.exports = function (prefix) {
        prefix = typeof prefix === 'undefined' ? '' : prefix + '';
        currentId += 1;
        return prefix + currentId;
    };

    ;
});