define(['exports', 'module'], function (exports, module) {
    'use strict';

    module.exports = function (str) {
        return str
        // uppercase all words
        .replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        })
        // remove spaces
        .replace(/\s/g, '')
        // lowercase first letter
        .replace(/^(.)/, function ($1) {
            return $1.toLowerCase();
        });
    };

    ;
});