'use strict';

const HmrClient = require('metro/src/lib/bundle-modules/HmrClient.js');

const hmrInstance = new HmrClient(
  // TODO: make the URL/Entrypoint configurable
  `ws://localhost:8082/hot?bundleEntry=index.js`,
);
hmrInstance.enable();
