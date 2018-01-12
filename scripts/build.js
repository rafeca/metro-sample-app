'use strict';

const path = require('path');
const metro = require('metro');

const ROOT = path.resolve(path.join(__dirname, '..'));

metro.runBuild({
  dev: false,
  entry: path.join(ROOT, 'src', 'index.js'),
  optimize: true,
  out: path.join(ROOT, 'build', 'bundle.js'),
  projectRoots: [path.join(ROOT, 'src')],
  config: {
    getTransformModulePath: () => require.resolve('metro/src/defaultTransform'),
  }
}).then(() => {
  console.log('Production bundle created!');
}).catch(err => {
  console.log(err);
});
