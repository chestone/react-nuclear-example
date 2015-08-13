var flux = require('./flux');
var Incrementer = require('./modules/incrementer');
var React = require('react');
window.React = React;

React.render(
  <Incrementer />,
  document.getElementById('react')
);
