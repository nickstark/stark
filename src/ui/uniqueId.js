define(function() {
    var currentId = 0;
    return function(prefix) {
        prefix = typeof prefix === 'undefined' ? '' : prefix + '';
        currentId += 1;
        return prefix + currentId;
    };
});
