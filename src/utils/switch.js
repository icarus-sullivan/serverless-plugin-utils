module.exports = ({ params }) => {
  const [key, cases] = params;

  return {
    value: cases[key] || cases['*'],
  };
};
