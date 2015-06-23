define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (prop, dataArr) {
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
});