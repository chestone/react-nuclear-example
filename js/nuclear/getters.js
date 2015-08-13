exports.values = ['values'];
// exports.incrementerValue = ['values', 'incrementer'];

exports.incrementerValue = [
  exports.values,
  function(values) {
    return values.get('incrementer') || 0;
  }
];
