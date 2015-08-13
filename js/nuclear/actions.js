var flux = require('../flux');
var actionTypes = require('./actionTypes');
var getters = require('./getters');

exports.incrementValue = function() {
  flux.dispatch(actionTypes.INCREMENT);
};
