/**
 * State manager base object
 *
 * @class StateManager
 * @param {Object} config Configuration parameters
 * @param {Number} config.maxStates The maximum number of states to store
 * @param {Function} config.onStateChange Callback function for state change
 * @constructor
 */
var StateManager = function(config) {
    // set config options
    this._config = config || {};
    this._max = parseInt(config.maxStates, 10) || Infinity;

    // initialize data structure
    this._states = [];
    this._currentState = -1;
};

// alias prototype
var proto = StateManager.prototype;

/**
 * push new state object onto stack
 *
 * @method pushState
 * @param  {Object} state State object to make current
 */
proto.pushState = function(state) {
    var states = this._states;
    this._currentState += 1;
    states.splice(this._currentState, states.length, state); // remove all after current idx and add
    while (states.length > this._max) {
        this._currentState -= 1;
        states.shift();
    }

    this._registerChange(
        states[this._currentState], // current state
        states.length > 1 ? states[this._currentState - 1] : null // previous state
    );
};

/**
 * replace top of stack with new state
 *
 * @method replaceState
 * @param  {Object} state State object to make current
 * @return The state that has been replaced
 */
proto.replaceState = function(state) {
    var states = this._states;
    if (states.length === 0) {
        throw new Error('Cannot replaceState on a state manager with no states.');
    }
    var removed = states.splice(this._currentState, states.length, state); // remove current state and beyond

    this._registerChange(
        states[this._currentState], // current state
        removed[0] // previous state
    );

    return removed[0];
};

/**
 * Get current state object
 *
 * @method getState
 * @return {Object}
 */
proto.getState = function() {
    if (this._currentState === -1) {
        return null;
    }
    return this._states[this._currentState];
};

/**
 * roll back state and return new current
 *
 * @method back
 * @return {Object|null} return null if no previous state exists
 */
proto.back = function() {
    if (this._currentState < 1) {
        return null;
    }
    this._currentState -= 1;

    this._registerChange(
        this._states[this._currentState], // current state
        this._states[this._currentState + 1] // previous state
    );

    return this._states[this._currentState];
};

/**
 * check if previous state exists
 *
 * @method hasPrevious
 * @return {Boolean}
 */
proto.hasPrevious = function() {
    return this._currentState > 0;
};

/**
 * roll forward state and return new current
 *
 * @method forward
 * @return {Object|null} return null if no next state exists
 */
proto.forward = function() {
    if (this._currentState === this._states.length - 1) {
        return null;
    }
    this._currentState += 1;

    this._registerChange(
        this._states[this._currentState], // current state
        this._states[this._currentState - 1] // previous state
    );

    return this._states[this._currentState];
};

/**
 * check if previous state exists
 *
 * @method hasNext
 * @return {Boolean}
 */
proto.hasNext = function() {
    var numStates = this._states.length;
    return numStates > 1 && this._currentState < numStates - 1;
};

/**
 * clear all saved states
 *
 * @method clear
 */
proto.clear = function() {
    this._states.length = 0;
    this._currentState = -1;
};

proto._registerChange = function(current, previous) {
    if (this._config.onStateChange) {
        this._config.onStateChange(current, previous);
    }
};

// check for "-ies" because IE8 has limited implementation of singular
if (typeof Object.defineProperties === 'function') {
    Object.defineProperty(proto, 'state', {
        writeable: false,
        get: function() {
            return this.getState();
        },
        set: function(state) {
            return this.replaceState(state);
        }
    });
}

export default StateManager;
