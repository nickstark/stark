define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function () {
        return function (max, input) {
            return Math.max(max, input);
        };
    };

    ;
});