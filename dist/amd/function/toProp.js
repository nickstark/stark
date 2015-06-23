define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (prop) {
        return function (input) {
            return input[prop];
        };
    };

    ;
});