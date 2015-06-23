define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function () {
        return function (min, input) {
            return Math.min(min, input);
        };
    };

    ;
});