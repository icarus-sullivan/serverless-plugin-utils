module.exports = ({ params }) => {
  const [value] = params;

  return {
    value: `${value}`.toUpperCase(),
  };
};
