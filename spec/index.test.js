const PluginUtil = require('../src');

const framework = (custom) => {
  const plugin = new PluginUtil({
    service: {
      custom,
      functions: {},
      provider: {},
      resources: {},
    },
    getProvider: jest.fn(),
  });
  plugin.delegate();
  return plugin.sls.service.custom;
}

const unit = (name, custom, is) => test(name, () => expect(framework(custom).foo).toEqual(is));

unit('join', {
  foo: {
    'fn::join': {
      delimiter: '-',
      values: [
        'one', 
        'two',
        'three',
      ]
    }
  }
}, 'one-two-three');

unit('split', {
  foo: {
    'fn::split': {
      delimiter: '-',
      value: 'foo-bar-example',
    }
  }
}, ['foo', 'bar', 'example']);

unit('split - index', {
  foo: {
    'fn::split': {
      delimiter: '-',
      value: 'foo-bar-exampe',
      index: 1,
    }
  }
}, 'bar');

unit('ternary - truthy', {
  foo: {
    'fn::ternary': [
      'prod',
      'prod',
      true,
      false,
    ]
  }
}, true);

unit('ternary - falsey', {
  foo: {
    'fn::ternary': [
      'prod',
      'beta',
      true,
      false,
    ]
  }
}, false);

unit('lower', {
  foo: {
    'fn::lower': 'DTesjf3'
  }
}, 'dtesjf3');

unit('upper', {
  foo: {
    'fn::upper': 'l38gt1'
  }
}, 'L38GT1');

unit('switch - matching case', {
  foo: {
    'fn::switch': {
      key: 'foo',
      cases: {
        foo: 'awesome', 
        '*': 'nope',
      }
    }
  }
}, 'awesome');

unit('switch - default case', {
  foo: {
    'fn::switch': {
      key: 'dev',
      cases: {
        foo: 'awesome', 
        '*': 'nope',
      }
    }
  }
}, 'nope');

unit('complex - domain resolve', {
  foo: {
    'fn::lower': {
      'fn::ternary': [
        'dev',
        'prod',
        'awesome.com',
        'beta-awesome.com',
      ]
    }
  }
}, 'beta-awesome.com');

unit('complex - domain resolve 2', {
  foo: {
    'fn::lower': {
      'fn::switch': {
        key: 'devChris',
        cases: {
          prod: 'awesome.com',
          beta: 'beta-awesome.com',
          '*': 'test1.awesome.com',
        }
      }
    }
  }
}, 'test1.awesome.com');