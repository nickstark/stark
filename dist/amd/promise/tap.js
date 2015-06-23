define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (fn) {
        return function (result) {
            fn.call(this, result);
            return result;
        };
    };

    ;
});