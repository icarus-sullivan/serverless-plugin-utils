
module.exports = {
  id: 'fn::ternary',
  resolve: ([left, right, truthy, falsy]) => 
    left === right ? truthy : falsy,
}

