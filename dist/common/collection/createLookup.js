"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (prop, dataArr) {
    var lookup = {};

    dataArr.forEach(function (item) {
        lookup[item[prop]] = item;
    });

    return lookup;
};

;
module.exports = exports["default"];