define(function(require) {

    /*
    * Sorting comparators
    *
    * Tip: to not mutate the array, you can map to identity.
    *     var newArray = myArray.map(identity).sort();
    */

    return {
        // sort alphabetically (like default comparator)
        // names.sort(alphabetical);
        alphabetical: require('./sort/alphabetical'),

        // sort by a property instead of the object itself
        // users.sort(byProperty('name'));
        // users.sort(byProperty('id', numeric));
        byProperty: require('./sort/byProperty'),

        // sort numerically
        // numberss.sort(numeric);
        numeric: require('./sort/numeric')
    };

});
