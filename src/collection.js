import createLookup from './collection/createLookup';
import categorize from './collection/categorize';
import findByProperty from './collection/findByProperty';

/*
 * Utility functions for working with collections or arrays of data
 */

export default {
    // useful for multiple lookups by a unique identifier
    // var userLookup = createLookup('id', users)
    createLookup,

    // useful for filtering into categories
    // var userLookupByCity = categorize('city', users);
    categorize,

    // useful for finding an item by id or other unique property
    // var selectedUser = findByProperty('id', users, selectedId);
    findByProperty
};
