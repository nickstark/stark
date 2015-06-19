var currentId = 0;

export default function(prefix) {
    prefix = typeof prefix === 'undefined' ? '' : prefix + '';
    currentId += 1;
    return prefix + currentId;
};
