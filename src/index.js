const { iter_repl } = require('iter-object');
const { pick } = require('@teleology/fp');
const utils = require('./utils');

const { 
  PLUGIN,
  IDENTIFIER_COLOR,
  IDENTIFIER,
  COLOR_RESET,
 } = require('./config');

class PluginUtils {
  constructor(sls) {
    this.serverless = sls;
    this.provider = this.serverless.getProvider('aws');

    this.hooks = {
      [`${PLUGIN}:compute:compute`]: this.printCompute.bind(this),
    };

    this.commands = {
      [PLUGIN]: {
        usage: 'A collection of serverless framework utilities',
        lifecycleEvents: [PLUGIN],
        commands: {
          compute: {
            usage: 'Display compute configuration',
            lifecycleEvents: ['compute'],
          },
        },
      },
    };

    setTimeout(this.compute.bind(this), 100);
  }

  log(...args) {
    this.serverless.cli.consoleLog(
      [`${IDENTIFIER_COLOR}${IDENTIFIER}${COLOR_RESET}`, ...args].join(' '),
    );
  }

  printCompute() {
    const subset = {
      plugins: pick('service.plugins')(this.serverless, []),
      custom: pick('service.custom')(this.serverless, {}),
      provider: pick('service.provider')(this.serverless, {}),
      functions: pick('service.functions')(this.serverless, {}),
      resources: pick('service.resources')(this.serverless, {}),
    };

    this.log(JSON.stringify(subset, null, 2));
  }

  compute() {
    let last = undefined;
    const delegate = (k, v) => {
      const fn = utils[k];

      if (last) {
        v = v[last];
        last = undefined;
      }

      if (fn) {
        last = k;
        return fn(v);
      }
      
      return v;
    };

    if (this.serverless.service.custom) {
      this.serverless.service.custom = iter_repl(this.serverless.service.custom, delegate);
    }
    if (this.serverless.service.functions) {
      this.serverless.service.functions = iter_repl(
        this.serverless.service.functions,
        delegate,
      );
    }
    if (this.serverless.service.resources) {
      this.serverless.service.resources = iter_repl(
        this.serverless.service.resources,
        delegate,
      );
    }
    if (this.serverless.service.provider) {
      this.serverless.service.provider = iter_repl(
        this.serverless.service.provider,
        delegate,
      );
    }
  }
  
}

module.exports = PluginUtils;
