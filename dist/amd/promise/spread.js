define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (fn) {
        return function (promiseResults) {
            fn.apply(this, promiseResults);
        };
    };

    ;
});