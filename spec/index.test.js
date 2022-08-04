const join = require('../src/utils/join');
const split = require('../src/utils/split');
const ternary = require('../src/utils/ternary');
const lower = require('../src/utils/lower');
const upper = require('../src/utils/upper');
const capitalize = require('../src/utils/capitalize');
const switchFn = require('../src/utils/switch');

test('join', () => {
  const result = join({
    params: ['one', 'two', 'three', '-'],
  });
  expect(result).toMatchObject({
    value: 'one-two-three',
  });
});

test('split', () => {
  const result = split({
    params: ['foo-bar-example', '-'],
  });
  expect(result).toMatchObject({
    value: ['foo', 'bar', 'example'],
  });

  const result2 = split({
    params: ['foo-bar-example', '-', 0],
  });
  expect(result2).toMatchObject({
    value: 'foo',
  });
});

test('ternary', () => {
  const result = ternary({
    params: ['prod', 'prod', true, false],
  });
  expect(result).toMatchObject({
    value: true,
  });

  const result2 = ternary({
    params: ['prod', 'beta', true, false],
  });
  expect(result2).toMatchObject({
    value: false,
  });
});

test('lower', () => {
  const result = lower({
    params: ['DTesjf3'],
  });
  expect(result).toMatchObject({
    value: 'dtesjf3',
  });
});

test('upper', () => {
  const result = upper({
    params: ['l38gt1'],
  });
  expect(result).toMatchObject({
    value: 'L38GT1',
  });
});

test('capitalize', () => {
  const result = capitalize({
    params: ['l38gt1'],
  });
  expect(result).toMatchObject({
    value: 'L38gt1',
  });
});

test('switch', () => {
  const cases = {
    foo: 'awesome',
    '*': 'nope',
  };
  const result = switchFn({
    params: ['foo', cases],
  });
  expect(result).toMatchObject({
    value: 'awesome',
  });

  const result2 = switchFn({
    params: ['bar', cases],
  });
  expect(result2).toMatchObject({
    value: 'nope',
  });
});
