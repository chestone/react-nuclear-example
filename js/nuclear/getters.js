exports.values = ['numStore', 'values'];

exports.incrementerValue = [
  exports.values,
  function(values) {
    return values.get('incrementer') || 0;
  }
];
