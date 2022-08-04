module.exports = ({ params }) => {
  if (!params.length) throw new Error('Missing param for function capitalize');

  return {
    value: params[0].charAt(0).toUpperCase() + params[0].slice(1),
  };
};
