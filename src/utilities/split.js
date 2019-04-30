
module.exports = {
  id: 'fn::split',
  resolve: ({ value, delimeter, index }) => {
    if (typeof index === 'number') {
      return value.split(delimeter)[index];
    }
    return value.split(delimeter);
  }
}
