"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (prop, dataArr) {
    var lookup = {};

    dataArr.forEach(function (item) {
        if (!(item[prop] in lookup)) {
            lookup[item[prop]] = [];
        }
        lookup[item[prop]].push(item);
    });

    return lookup;
};

;
module.exports = exports["default"];