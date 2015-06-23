"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (fn, threshhold) {
    var last;
    var deferTimer;

    return function () {
        var context = this;
        var now = Date.now();
        var args = arguments;

        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};

;
module.exports = exports["default"];