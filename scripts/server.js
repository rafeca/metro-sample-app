'use strict';

const path = require('path');
const metro = require('metro');

const ROOT = path.resolve(path.join(__dirname, '..'));

metro.runServer({
  port: '8082',
  projectRoots: [path.join(ROOT, 'src')],
  config: {
    getTransformModulePath() {
      return path.join(ROOT, 'node_modules', 'metro', 'src', 'defaultTransform.js');
    },
  },
}).then(() => {
  console.log('Metro server listening!');
}).catch(err => {
  console.log(err);
});
