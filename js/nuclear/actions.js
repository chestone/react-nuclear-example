var flux = require('../flux');
var actionTypes = require('./actionTypes');
var getters = require('./getters');

exports.incrementValue = function(value) {
  if (typeof value === 'number') {
    flux.dispatch(actionTypes.INCREMENT, value);
  }
};
