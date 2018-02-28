'use strict';

var ErrorOverlay = require('react-error-overlay');
var HmrClient = require('metro/src/lib/bundle-modules/HMRClient.js');

var lastError = null;
var setupDone = false;

function clearOutdatedErrors() {
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    console.clear();
  }
}

function setup() {
  var client = new HmrClient(
    // TODO: make the URL/Entrypoint configurable
    `ws://localhost:8082/hot?bundleEntry=src/index.js`,
  );
  client.enable();

  client.on('update', function() {
    if (lastError) {
      clearOutdatedErrors();
      ErrorOverlay.dismissBuildError();
    }
    lastError = null;
  });
  client.on('error', function(error) {
    lastError = error;
    clearOutdatedErrors();
    ErrorOverlay.reportBuildError(error.message);

    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(error.message);
    }
  });
}

try {
  // If this module itself is hot-reloaded, this call will throw.
  ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {},
    filename: '/js-bundle.js',
  });
} catch (e) {}

if (!setupDone) {
  setup();
  setupDone = true;
}
