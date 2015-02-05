/*jshint expr:true */
define(function(require) {
    'use strict';

    return function(root) {
        root = root || document.body;
        root.offsetWidth; // used purely for side effects
    };

});
