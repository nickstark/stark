define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    ;
});