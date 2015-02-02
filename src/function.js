define(function() {

    /*
    * Utility functions for generating helper functions
    */

    return {
        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        // TODO: find good name for this
        toProp: require('./function/toProp'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMin(), Infinity);
        // var minFields = farms.reduce(toMin('fields', Infinity));
        // TODO: remove dependancy on Infinity
        toMin: require('./function/toMin'),

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMax(), -Infinity);
        // var maxFields = farms.reduce(toMax('fields', -Infinity));
        // TODO: remove dependancy on -Infinity
        toMax: require('./function/toMax'),

        // useful for adding up properties of an array
        // var total = [0, 1, 2, 3].reduce(toSum(), 0);
        // var fields = farms.reduce(toSum('fields', 0));
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
