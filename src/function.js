define(function() {

    /*
    * Utility functions for generating helper functions
    */

    return {
        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        toProp: require('./function/toProp'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMin());
        // returns 0
        toMin: require('./function/toMin'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMax());
        // returns 3
        toMax: require('./function/toMax'),

        // useful for adding up properties of an array
        // var total = [0, 1, 2, 3].reduce(toSum());
        // returns 6
        toSum: require('./function/toSum'),

        // useful for filtering out duplicates
        // var activeUsers = loginIds.filter(toUnique());
        toUnique: require('./function/toUnique'),

        // return first argument, useful for filtering out falsy values
        identity: require('./function/identity'),

        // debounce function calls to reduce impact of event spamming
        debounce: require('./function/debounce')
    };

});
