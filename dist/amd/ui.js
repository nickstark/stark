define(['exports', 'module', './ui/createSVGElement', './ui/delegateEvent', './ui/domify', './ui/find', './ui/listenOnce', './ui/matches', './ui/triggerReflow', './ui/uniqueId'], function (exports, module, _uiCreateSVGElement, _uiDelegateEvent, _uiDomify, _uiFind, _uiListenOnce, _uiMatches, _uiTriggerReflow, _uiUniqueId) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _createSVGElement = _interopRequireDefault(_uiCreateSVGElement);

    var _delegateEvent = _interopRequireDefault(_uiDelegateEvent);

    var _domify = _interopRequireDefault(_uiDomify);

    var _find = _interopRequireDefault(_uiFind);

    var _listenOnce = _interopRequireDefault(_uiListenOnce);

    var _matches = _interopRequireDefault(_uiMatches);

    var _triggerReflow = _interopRequireDefault(_uiTriggerReflow);

    var _uniqueId = _interopRequireDefault(_uiUniqueId);

    /*
    * Utility functions for working with the dom
    */

    module.exports = {
        // creates SVG element in namespace http://www.w3.org/2000/svg
        //   var path = createSVGElement('path');
        createSVGElement: _createSVGElement['default'],

        // delegate event to common root. NOTE: blur/focus and other events may not bubble
        //   var delegate = delegateEvent(document.body, 'click', 'a.print', printPage);
        //   delegate.remove(); // deregister function is returned by method
        delegateEvent: _delegateEvent['default'],

        // parses html text into elements
        //   var parsedElements = domify('<div><b></b></div><span></span>');
        //   // returns [DIVElement, SPANElement]
        domify: _domify['default'],

        // alias for querySelectorAll, casts NodeList into Array
        //   var links = find('a');
        //   links.forEach(doSomething);
        find: _find['default'],

        // add event listener that removes itself after one call
        //   listenOnce(btnElement, 'click', firstClickHandler, false);
        listenOnce: _listenOnce['default'],

        // fallback for vendor prefixed or non-existant Element.prototype.matches
        //   var isElementActive = matches(element, '.clasName_isActive');
        matches: _matches['default'],

        // calls offsetWidth to trigger reflow
        // fade-in example:
        //   element.style.display = 'block';
        //   triggerReflow();
        //   element.classList.add('element_isVisible');
        triggerReflow: _triggerReflow['default'],

        // returns a unique id with optional prefix (always a string)
        //   newInput.id = uniqueId('input'); // 'input7'
        uniqueId: _uniqueId['default']
    };
});