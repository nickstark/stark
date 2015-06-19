import createSVGElement from './ui/createSVGElement';
import delegateEvent from './ui/delegateEvent';
import domify from './ui/domify';
import find from './ui/find';
import listenOnce from './ui/listenOnce';
import matches from './ui/matches';
import triggerReflow from './ui/triggerReflow';
import uniqueId from './ui/uniqueId';

/*
* Utility functions for working with the dom
*/

export default {
    // creates SVG element in namespace http://www.w3.org/2000/svg
    //   var path = createSVGElement('path');
    createSVGElement,

    // delegate event to common root. NOTE: blur/focus and other events may not bubble
    //   var delegate = delegateEvent(document.body, 'click', 'a.print', printPage);
    //   delegate.remove(); // deregister function is returned by method
    delegateEvent,

    // parses html text into elements
    //   var parsedElements = domify('<div><b></b></div><span></span>');
    //   // returns [DIVElement, SPANElement]
    domify,

    // alias for querySelectorAll, casts NodeList into Array
    //   var links = find('a');
    //   links.forEach(doSomething);
    find,

    // add event listener that removes itself after one call
    //   listenOnce(btnElement, 'click', firstClickHandler, false);
    listenOnce,

    // fallback for vendor prefixed or non-existant Element.prototype.matches
    //   var isElementActive = matches(element, '.clasName_isActive');
    matches,

    // calls offsetWidth to trigger reflow
    // fade-in example:
    //   element.style.display = 'block';
    //   triggerReflow();
    //   element.classList.add('element_isVisible');
    triggerReflow,

    // returns a unique id with optional prefix (always a string)
    //   newInput.id = uniqueId('input'); // 'input7'
    uniqueId
};
