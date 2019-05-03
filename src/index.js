const { iterReplace } = require('iter-object');
const utils = require('./utilities');

const BUILD_HOOKS = [
  'before:package:createDeploymentArtifacts',
  'before:deploy:function:packageFunction',
  'before:invoke:local:invoke',
  'before:run:run',
];

class PluginUtils {
  constructor(sls) {
    this.sls = sls;
    this.provider = this.sls.getProvider('aws');

    const delegate = this.delegate.bind(this);
    this.hooks = BUILD_HOOKS.reduce((a, b) => (a[b] = delegate, a), {});
  }

  delegate() {
    const delegate = (ignore, value) => {
      let val = value;
      for (const { id, resolve } of utils) {
        if (val === Object(val) && val.hasOwnProperty(id)) {
          // recurse check to resolve child utils
          val = iterReplace(val, delegate);

          // then perform resolution
          val = resolve(val[id]);
        }
      }

      return val;
    }

    if (this.sls.service.custom) {
      this.sls.service.custom = iterReplace(this.sls.service.custom, delegate);
    }
    if (this.sls.service.functions) {
      this.sls.service.functions = iterReplace(this.sls.service.functions, delegate);
    }
    if (this.sls.service.resources) {
      this.sls.service.resources = iterReplace(this.sls.service.resources, delegate);
    }
    if (this.sls.service.provider) {
      this.sls.service.provider = iterReplace(this.sls.service.provider, delegate);
    }
  }

}

module.exports = PluginUtils;