define(function() {

    return {
        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        // TODO: find good name for this
        toProp: require('./functions/toProp')
    }

});
