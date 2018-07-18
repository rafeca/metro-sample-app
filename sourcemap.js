'use strict';

const sourceMap = require('source-map');
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  const smc = new sourceMap.SourceMapConsumer(data);

  console.log(smc.originalPositionFor({
    line: Number(process.argv[3]),
    column: Number(process.argv[4]),
  }));
});
