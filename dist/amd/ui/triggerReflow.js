define(["exports", "module"], function (exports, module) {
    /*jshint expr:true */
    "use strict";

    module.exports = function (root) {
        root = root || document.body;
        root.offsetWidth; // used purely for side effects
    };

    ;
});