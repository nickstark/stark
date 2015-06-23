'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uiCreateSVGElement = require('./ui/createSVGElement');

var _uiCreateSVGElement2 = _interopRequireDefault(_uiCreateSVGElement);

var _uiDelegateEvent = require('./ui/delegateEvent');

var _uiDelegateEvent2 = _interopRequireDefault(_uiDelegateEvent);

var _uiDomify = require('./ui/domify');

var _uiDomify2 = _interopRequireDefault(_uiDomify);

var _uiFind = require('./ui/find');

var _uiFind2 = _interopRequireDefault(_uiFind);

var _uiListenOnce = require('./ui/listenOnce');

var _uiListenOnce2 = _interopRequireDefault(_uiListenOnce);

var _uiMatches = require('./ui/matches');

var _uiMatches2 = _interopRequireDefault(_uiMatches);

var _uiTriggerReflow = require('./ui/triggerReflow');

var _uiTriggerReflow2 = _interopRequireDefault(_uiTriggerReflow);

var _uiUniqueId = require('./ui/uniqueId');

var _uiUniqueId2 = _interopRequireDefault(_uiUniqueId);

/*
* Utility functions for working with the dom
*/

exports['default'] = {
    // creates SVG element in namespace http://www.w3.org/2000/svg
    //   var path = createSVGElement('path');
    createSVGElement: _uiCreateSVGElement2['default'],

    // delegate event to common root. NOTE: blur/focus and other events may not bubble
    //   var delegate = delegateEvent(document.body, 'click', 'a.print', printPage);
    //   delegate.remove(); // deregister function is returned by method
    delegateEvent: _uiDelegateEvent2['default'],

    // parses html text into elements
    //   var parsedElements = domify('<div><b></b></div><span></span>');
    //   // returns [DIVElement, SPANElement]
    domify: _uiDomify2['default'],

    // alias for querySelectorAll, casts NodeList into Array
    //   var links = find('a');
    //   links.forEach(doSomething);
    find: _uiFind2['default'],

    // add event listener that removes itself after one call
    //   listenOnce(btnElement, 'click', firstClickHandler, false);
    listenOnce: _uiListenOnce2['default'],

    // fallback for vendor prefixed or non-existant Element.prototype.matches
    //   var isElementActive = matches(element, '.clasName_isActive');
    matches: _uiMatches2['default'],

    // calls offsetWidth to trigger reflow
    // fade-in example:
    //   element.style.display = 'block';
    //   triggerReflow();
    //   element.classList.add('element_isVisible');
    triggerReflow: _uiTriggerReflow2['default'],

    // returns a unique id with optional prefix (always a string)
    //   newInput.id = uniqueId('input'); // 'input7'
    uniqueId: _uiUniqueId2['default']
};
module.exports = exports['default'];