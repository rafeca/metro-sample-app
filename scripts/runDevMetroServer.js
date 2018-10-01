'use strict';

const path = require('path');

require('metro-babel-register')([
  path.resolve(require.resolve('metro'), '../../../'),
]);

const Metro = require('Metro');

(async () => {
  const config = await Metro.loadConfig({
    config: require.resolve('../metro.dev.config.js'),
  });

  await Metro.runServer(config, {hmrEnabled: true});
})();
