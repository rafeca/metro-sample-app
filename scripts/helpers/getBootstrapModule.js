'use strict';

const Metro = require('metro');
const bootstrapFile = require.resolve('metro/src/lib/polyfills/require');

async function getBootstrapModule({dev}) {
  const graph = await Metro.buildGraph({
    config: {},
    dev,
    entries: [bootstrapFile],
    minify: !dev,
    type: 'script',
  });

  return graph.dependencies.get(bootstrapFile);
}

module.exports = getBootstrapModule;
