export default function(fn) {
    return function(result) {
        fn.call(this, result);
        return result;
    };
};
