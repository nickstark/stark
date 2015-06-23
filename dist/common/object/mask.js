"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (obj, props) {
    var newObj = {};
    props.forEach(function (prop) {
        newObj[prop] = obj[prop];
    });
    return newObj;
};

;
module.exports = exports["default"];