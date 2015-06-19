// Browser Support: IE9+, dependancy on Element.children

export default function(htmlStr) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = htmlStr;
    return Array.prototype.slice.call(wrapper.children);
};
