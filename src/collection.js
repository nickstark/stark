define(function() {

    /*
     * Utility functions for working with collections or arrays of data
     */

    return {
        // useful for multiple lookups by a unique identifier
        // var userLookup = createLookup('id', users)
        createLookup: require('./collections/createLookup'),

        // useful for filtering into categories
        // var userLookupByCity = categorize('city', users);
        categorize: require('./collections/categorize'),

        // useful for finding an item by id or other unique property
        // var selectedUser = findByProperty('id', users, selectedId);
        findByProperty: require('./collections/findByProperty')
    }

});
