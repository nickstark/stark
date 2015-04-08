define(function(require) {

    /*
    * Utility functions for working with the dom
    */

    return {
        // creates SVG element in namespace http://www.w3.org/2000/svg
        //   var path = createSVGElement('path');
        createSVGElement: require('./ui/createSVGElement'),

        // delegate event to common root. NOTE: blur/focus and other events may not bubble
        //   var delegate = delegateEvent(document.body, 'click', 'a.print', printPage);
        //   delegate.remove(); // deregister function is returned by method
        delegateEvent: require('./ui/delegateEvent'),

        // parses html text into elements
        //   var parsedElements = domify('<div><b></b></div><span></span>');
        //   // returns [DIVElement, SPANElement]
        domify: require('./ui/domify'),

        // alias for querySelectorAll, casts NodeList into Array
        //   var links = find('a');
        //   links.forEach(doSomething);
        find: require('./ui/find'),

        // add event listener that removes itself after one call
        //   listenOnce(btnElement, 'click', firstClickHandler, false);
        listenOnce: require('./ui/listenOnce'),

        // fallback for vendor prefixed or non-existant Element.prototype.matches
        //   var isElementActive = matches(element, '.clasName_isActive');
        matches: require('./ui/matches'),

        // calls offsetWidth to trigger reflow
        // fade-in example:
        //   element.style.display = 'block';
        //   triggerReflow();
        //   element.classList.add('element_isVisible');
        triggerReflow: require('./ui/triggerReflow'),

        // returns a unique id with optional prefix (always a string)
        //   newInput.id = uniqueId('input'); // 'input7'
        uniqueId: require('./ui/uniqueId')
    };

});
