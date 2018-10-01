'use strict';

const path = require('path');

require('metro-babel-register')([
  path.resolve(require.resolve('metro'), '../../../'),
]);

module.exports = require('metro/src/DeltaBundler/Worker');
