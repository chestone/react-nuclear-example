var React = require('react');
var NuclearIncrementor = require('../nuclear');
var flux = require('../flux');

var Incrementer = React.createClass({
  mixins: [flux.ReactMixin],
  getDataBindings: function() {
    return {
      counter: NuclearIncrementor.getters.incrementerValue
    };
  },
  increment: function() {
    NuclearIncrementor.actions.incrementValue();
  },
  render: function() {
    return <div>
      <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>;
  }
});

module.exports = Incrementer;
