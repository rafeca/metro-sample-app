'use strict';

const path = require('path');

module.exports = {
  server: {
    port: 8082
  },
  transformer: {
    workerPath: require.resolve('./scripts/devWorker'),
  },
  resetCache: true,
  watchFolders: [path.join(require.resolve('metro'), '../../../../')],
};
