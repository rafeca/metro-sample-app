'use strict';

function getTransitiveDependencies(path, graph, filter = () => true) {
  return getDependencies(path, graph, filter, new Set());
}

function getDependencies(path, graph, filter, dependencies) {
  if (dependencies.has(path)) {
    return dependencies;
  }

  const module = graph.dependencies.get(path);

  if (!module) {
    return dependencies;
  }

  dependencies.add(path);

  for (const dependency of module.dependencies.values()) {
    if (filter(module, dependency)) {
      getDependencies(dependency.absolutePath, graph, filter, dependencies);
    }
  }

  return dependencies;
}

module.exports = getTransitiveDependencies;
