module.exports = ({ params }) => {
  const items = params.slice(0, -1);
  const delimiter = params[params.length - 1];

  return {
    value: items.join(delimiter),
  };
};
