var Nuclear = require('nuclear-js');
var toImmutable = Nuclear.toImmutable;
var actionTypes = require('./actionTypes');
var flux = require('../flux');
var getters = require('./getters');

module.exports = new Nuclear.Store({
  getInitialState: function() {
    return toImmutable({
      values: {
        incrementer: 0
      }
    });
  },

  initialize: function() {
    this.on(actionTypes.INCREMENT, incrementValue);
  }
});

function incrementValue(state) {
  var incVal = flux.evaluate(getters.incrementerValue) + 1;
  return state.setIn(['values', 'incrementer'], incVal);
}
