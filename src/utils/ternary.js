module.exports = ({ params }) => {
  const [left, right, truthy, falsy] = params;

  return {
    value: left === right ? truthy : falsy,
  };
};
