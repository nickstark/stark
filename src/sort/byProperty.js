import defaultComparator from './alphabetical';
export default function(property, comparator) {
    comparator = comparator || defaultComparator;
    return function(a, b) {
        return comparator(a[property], b[property]);
    };
};
