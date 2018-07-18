'use strict';

const {
  getJsOutput,
  isJsModule,
  wrapModule,
} = require('metro/src/DeltaBundler/Serializers/helpers/js');
const {fromRawMappings} = require('metro-source-map');
const getBootstrapModule = require('./getBootstrapModule');
const createModuleIdFactory = require('metro/src/lib/createModuleIdFactory');
const getPreludeCode = require('metro/src/lib/getPreludeCode');

const createModuleId = createModuleIdFactory();

/**
 * Serializes a Segment into JS code, by concatenating and wrapping the included
 * modules.
 */
async function serializeSegment(segment, graph, {dev}) {
  const bootstrapModule = await getBootstrapModule({dev});
  const preludeCode = getPreludeCode({isDev: dev});

  const modules = [...segment]
    .map(modulePath => graph.dependencies.get(modulePath))
    .filter(isJsModule);

  modules.unshift(bootstrapModule);

  const code =
    preludeCode + modules.map(module => {
      createModuleId(module.path);

      return wrapModule(module, {
        createModuleId,
        dev,
      });
    })
    .join('\n') + '\nrequire(' + createModuleId(graph.entryPoints[0]) + ');';

  const map = fromRawMappings(
    modules.map(module => ({
      ...getJsOutput(module).data,
      path: module.path,
      source: module.getSource(),
    })),
  );

  return {code, map};
}

module.exports = serializeSegment;
