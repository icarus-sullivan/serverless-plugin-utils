module.exports = ({ params }) => {
  const [value, delimiter, index] = params;

  return {
    value:
      typeof index === 'number'
        ? value.split(delimiter)[index]
        : value.split(delimiter),
  };
};
