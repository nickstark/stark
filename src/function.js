define(function() {

    /*
    * Utility functions for generating helper functions
    */

    return {
        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        // TODO: find good name for this
        toProp: require('./function/toProp'),

        // return first argument, useful for filtering out falsy values
        identity: require('./function/identity'),

        // debounce function calls to reduce impact of event spamming
        debounce: require('./function/debounce')
    };

});
