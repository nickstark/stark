define(function(require) {
    var defaultComparator = require('./alphabetical');
    return function(property, comparator) {
        comparator = comparator || defaultComparator;
        return function(a, b) {
            return comparator(a[property], b[property]);
        };
    };
});
