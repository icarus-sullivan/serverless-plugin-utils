
module.exports = {
  id: 'fn::split',
  resolve: ({ value, delimiter, index }) => {
    if (typeof index === 'number') {
      return value.split(delimiter)[index];
    }
    return value.split(delimiter);
  }
}
