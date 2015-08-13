var flux = require('../flux');
var actionTypes = require('./actionTypes');
var getters = require('./getters');

exports.incrementValue = function() {
  // your business logic goes here!
  
  flux.dispatch(actionTypes.INCREMENT);
};
