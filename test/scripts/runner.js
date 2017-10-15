const setup = require('../config/setup.js');
const jest = require('jest');
const path = require('path');

setup((args, outputPath, blenderPath) => {
  // Undocumented hack to make jest ignore cmomand line arguments and also run
  // setup script and log the output. What a concept!
  process.outputPath = outputPath;
  process.blenderPath = blenderPath;

  const cliOptions = {
    watch: args.watch,
    runInBand: args.runInBand,
  };
  jest.runCLI(cliOptions, [path.resolve(__dirname, '..')], () => {});
});
