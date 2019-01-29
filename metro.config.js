"use strict";

module.exports = {
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: false
      }
    })
  }
};
