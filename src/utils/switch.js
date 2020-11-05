module.exports = {
  ['fn::switch']: ({ key, cases }) => cases[key] || cases['*'],
};
