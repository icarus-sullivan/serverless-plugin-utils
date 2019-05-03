
module.exports = {
  id: 'fn::switch',
  resolve: ({ key, cases }) => {
    for (const match of Object.keys(cases)) {
      if (key === match) {
        return cases[match];
      }
    }
    return cases['*'];
  },
}

