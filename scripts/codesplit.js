'use strict';

const Metro = require('metro');

const fs = require('fs');
const path = require('path');

const getTransitiveDependencies = require('./helpers/getTransitiveDependencies');
const serializeSegment = require('./helpers/serializeSegment');

const isSync = (module, dependency) => !dependency.data.isAsync;

async function build({dev}) {
  const entryPoint = path.join(__dirname, '..', 'src', 'index.js');

  const graph = await Metro.buildGraph({
    config: {
      getAsyncRequireModulePath: () => 'asyncRequireImpl',
    },
    dev,
    entries: [entryPoint],
    minify: !dev,
  });

  // Compute all synchronous dependencies until we get an async import.
  const syncDependencies = getTransitiveDependencies(
    entryPoint,
    graph,
    isSync,
  );

  const {code, map} = await serializeSegment(syncDependencies, graph, {dev});

  fs.writeFileSync(path.join(__dirname, '..', 'build', 'bundle.js'), code, 'utf-8');
  fs.writeFileSync(path.join(__dirname, '..', 'build', 'bundle.map'), map, 'utf-8');
}

build({dev: false}).then(() => console.log('Done!'));
