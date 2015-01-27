define(function() {

    /*
    * Utility functions for generating helper functions
    */

    return {
        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        // TODO: find good name for this
        toProp: require('./function/toProp'),

        // useful for adding up properties of an array
        // var total = [0, 1, 2, 3].reduce(toSum(), 0);
        // var fields = farms.reduce(toSum('fields', 0));
        toSum: require('./function/toSum'),

        // return first argument, useful for filtering out falsy values
        identity: require('./function/identity'),

        // debounce function calls to reduce impact of event spamming
        debounce: require('./function/debounce')
    };

});
