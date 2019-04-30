
module.exports = {
  id: 'fn::join',
  resolve: ({ values, delimiter }) => values.join(delimiter),
}
