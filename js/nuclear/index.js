var flux = require('../flux');

flux.registerStores({
  numStore: require('./incrementer_store')
});

module.exports = {
  getters: require('./getters'),
  actions: require('./actions'),
};
