
module.exports = {
  id: 'fn::join',
  resolve: ({ values, delimeter }) => values.join(delimeter),
}
