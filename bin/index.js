#!/usr/bin/env node
const run = require("../src");
const { argv, stdout } = process;
const [, , filePath] = argv;

if (filePath === undefined) {
  stdout.write("Usage: tdx path-to-file");
  process.exitCode = 2;
} else {
  run(filePath);
  process.exitCode = 0;
}
