'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _collection = require('./collection');

var _collection2 = _interopRequireDefault(_collection);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _function = require('./function');

var _function2 = _interopRequireDefault(_function);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

var _microPubSub = require('./micro/PubSub');

var _microPubSub2 = _interopRequireDefault(_microPubSub);

var _microDOMRegion = require('./micro/DOMRegion');

var _microDOMRegion2 = _interopRequireDefault(_microDOMRegion);

var _microBreakpoint = require('./micro/Breakpoint');

var _microBreakpoint2 = _interopRequireDefault(_microBreakpoint);

var _microStateManager = require('./micro/StateManager');

var _microStateManager2 = _interopRequireDefault(_microStateManager);

exports['default'] = {
    // categories indexes
    collection: _collection2['default'],
    errors: _errors2['default'],
    'function': _function2['default'],
    object: _object2['default'],
    promise: _promise2['default'],
    sort: _sort2['default'],
    string: _string2['default'],
    ui: _ui2['default'],

    // micro library classes
    DOMRegion: _microDOMRegion2['default'],
    PubSub: _microPubSub2['default'],
    Breakpoint: _microBreakpoint2['default'],
    StateManager: _microStateManager2['default']
};

//TODO: times method (run something n times) times(3, doSomething)
//TODO: every method (throttle something to every n times) every(3, checkSomething)
//TODO: validation handler that ties in to required, etc. Adds novalidate. In conjunction with StateBinder?
//                - http://www.punkchip.com/aria-enhance-form-validation/

//TODO: State binder? For common toggles. Or maybe validation.
//  EX. new StateBinder(myButtonElement, 'disabled').listen(inputElement, 'change', verifyFunction);
//  EX. new StateBinder(myButtonElement, 'disabled').listen(checkboxElement, 'change'); // default to truthy check
//  EX. new StateBinder(myErrorElement, 'hidden', { default: false }).listen(socket, 'message', myServerCallback);
//  EX. var manualState = new StateBinder(myMenu, {class:'menu_isActive'});
//      manualState.setValidity(true);
module.exports = exports['default'];