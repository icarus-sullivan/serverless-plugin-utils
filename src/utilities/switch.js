
module.exports = {
  id: 'fn::switch',
  resolve: ({ key, cases }) => cases[key] || cases['*'],
}

