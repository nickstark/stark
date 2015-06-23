define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (obj, props) {
        var newObj = {};
        props.forEach(function (prop) {
            newObj[prop] = obj[prop];
        });
        return newObj;
    };

    ;
});