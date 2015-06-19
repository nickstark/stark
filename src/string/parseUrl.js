import mask from '../object/mask';

export default function(url) {
    // create anchor element, have browser handle parsing
    var anchor = document.createElement('a');
    anchor.href = url;

    // mask out properties we don't need
    return mask(anchor, [
        'hash',
        'href',
        'host',
        'hostname',
        'pathname',
        'port',
        'protocol',
        'search'
    ]);
};
