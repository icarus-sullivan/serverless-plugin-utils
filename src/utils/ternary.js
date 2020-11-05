module.exports = {
  ['fn::ternary']: ([left, right, truthy, falsy]) => (left === right ? truthy : falsy),
};
