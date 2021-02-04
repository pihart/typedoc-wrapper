#!/usr/bin/env node
const run = require("../src");
const { argv, stdout } = process;
const [, , filePath, ...rest] = argv;

if (filePath === undefined) {
  stdout.write("Usage: tdx path-to-file [...typedoc options]");
  process.exitCode = 2;
} else {
  run(filePath, { postArgs: rest });
  process.exitCode = 0;
}
