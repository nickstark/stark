import alphabetical from './sort/alphabetical';
import byProperty from './sort/byProperty';
import numeric from './sort/numeric';

/*
* Sorting comparators
*
* Tip: to not mutate the array, you can map to identity.
*     var newArray = myArray.map(identity).sort();
*/

export default {
    // sort alphabetically (like default comparator)
    // names.sort(alphabetical);
    alphabetical,

    // sort by a property instead of the object itself
    // users.sort(byProperty('name'));
    // users.sort(byProperty('id', numeric));
    byProperty,

    // sort numerically
    // numberss.sort(numeric);
    numeric
};
