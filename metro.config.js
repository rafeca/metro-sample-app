'use strict';

module.exports = {
  getTransformModulePath: () => require.resolve('metro/src/defaultTransform'),
  getProjectRoots: () => [__dirname],
};
