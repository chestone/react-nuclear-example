var flux = require('./flux');
var Incrementer = require('./components/incrementer');
var React = require('react');
window.React = React;
window.flux = flux;

React.render(
  <Incrementer />,
  document.getElementById('react')
);
