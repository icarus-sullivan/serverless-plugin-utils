// eslint-disable-next-line camelcase
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

    this.configurationVariablesSources = utils;
  }

  log(...args) {
    this.serverless.cli.consoleLog(
      [`${IDENTIFIER_COLOR}${IDENTIFIER}${COLOR_RESET}`, ...args].join(' '),
    );
  }
}

module.exports = PluginUtils;
