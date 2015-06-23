define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (prop, dataArr) {
        var lookup = {};

        dataArr.forEach(function (item) {
            lookup[item[prop]] = item;
        });

        return lookup;
    };

    ;
});