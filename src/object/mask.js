export default function(obj, props) {
    var newObj = {};
    props.forEach(function(prop) {
        newObj[prop] = obj[prop];
    });
    return newObj;
};
