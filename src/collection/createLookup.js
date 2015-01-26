define(function() {
    var createLookup = function(prop, dataArr) {
        var lookup = {};

        dataArr.forEach(function(item) {
            lookup[item[prop]] = item;
        });

        return lookup;
    };

    return createLookup;
});
