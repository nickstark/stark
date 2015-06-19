import collection from './collection';
import errors from './errors';
import func from './function';
import object from './object';
import promise from './promise';
import sort from './sort';
import string from './string';
import ui from './ui';
import PubSub from './micro/PubSub';
import DOMRegion from './micro/DOMRegion';
import Breakpoint from './micro/Breakpoint';
import StateManager from './micro/StateManager';

export default {
    // categories indexes
    collection: collection,
    errors: errors,
    'function': func,
    object: object,
    promise: promise,
    sort: sort,
    string: string,
    ui: ui,

    // micro library classes
    DOMRegion: DOMRegion,
    PubSub: PubSub,
    Breakpoint: Breakpoint,
    StateManager: StateManager
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
