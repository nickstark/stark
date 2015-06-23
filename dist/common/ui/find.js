"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (selector, context) {
    // get NodeList, default to document if no context specified
    var results = (context || document).querySelectorAll(selector);

    // cast into Array
    return Array.prototype.slice.call(results);
};

;
module.exports = exports["default"];