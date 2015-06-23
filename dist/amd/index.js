define(['exports', 'module', './collection', './errors', './function', './object', './promise', './sort', './string', './ui', './micro/PubSub', './micro/DOMRegion', './micro/Breakpoint', './micro/StateManager'], function (exports, module, _collection, _errors, _function, _object, _promise, _sort, _string, _ui, _microPubSub, _microDOMRegion, _microBreakpoint, _microStateManager) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _collection2 = _interopRequireDefault(_collection);

    var _errors2 = _interopRequireDefault(_errors);

    var _func = _interopRequireDefault(_function);

    var _object2 = _interopRequireDefault(_object);

    var _promise2 = _interopRequireDefault(_promise);

    var _sort2 = _interopRequireDefault(_sort);

    var _string2 = _interopRequireDefault(_string);

    var _ui2 = _interopRequireDefault(_ui);

    var _PubSub = _interopRequireDefault(_microPubSub);

    var _DOMRegion = _interopRequireDefault(_microDOMRegion);

    var _Breakpoint = _interopRequireDefault(_microBreakpoint);

    var _StateManager = _interopRequireDefault(_microStateManager);

    module.exports = {
        // categories indexes
        collection: _collection2['default'],
        errors: _errors2['default'],
        'function': _func['default'],
        object: _object2['default'],
        promise: _promise2['default'],
        sort: _sort2['default'],
        string: _string2['default'],
        ui: _ui2['default'],

        // micro library classes
        DOMRegion: _DOMRegion['default'],
        PubSub: _PubSub['default'],
        Breakpoint: _Breakpoint['default'],
        StateManager: _StateManager['default']
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
});