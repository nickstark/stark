require(['dist/index'], function(utils) {
    window.utils = utils;

    // put all functions on window
    var addMethods = function(parent) {
        for (var prop in parent) {
            if (parent.hasOwnProperty(prop)) {
                window[prop] = parent[prop];
                if (typeof parent[prop] === 'object') {
                    addMethods(parent[prop]);
                }
            }
        }
    };

    addMethods(window.utils);
});
