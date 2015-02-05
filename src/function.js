define(function(require) {

    /*
    * Utility functions for generating helper functions
    */

    return {
        // debounce function calls to reduce impact of event spamming
        debounce: require('./function/debounce'),

        // return first argument, useful for filtering out falsy values
        // identity(myObject) === myObject
        identity: require('./function/identity'),

        // converts a functions to one that returns its opposite
        // isAuthenticated(userId); // false
        // var isUnauthenticated = negate(isAuthenticated);
        // isUnauthenticated(userId); // true
        negate: require('./function/negate'),

        // do nothing, useful for function placeholders or functional programming
        // (callback || noop)(callbackArgs);
        noop: require('./function/noop'),

        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        toProp: require('./function/toProp'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMax());
        // returns 3
        toMax: require('./function/toMax'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMin());
        // returns 0
        toMin: require('./function/toMin'),

        // useful for adding up properties of an array
        // var total = [0, 1, 2, 3].reduce(toSum());
        // returns 6
        toSum: require('./function/toSum'),

        // useful for filtering out duplicates
        // var activeUsers = recentLoginIds.filter(toUnique());
        toUnique: require('./function/toUnique')
    };

});
