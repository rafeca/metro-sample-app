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
    getTransformModulePath() {
      return path.join(ROOT, 'node_modules', 'metro', 'src', 'defaultTransform.js');
    },
  }
}).then(() => {
  console.log('Production bundle created!');
}).catch(err => {
  console.log(err);
});
