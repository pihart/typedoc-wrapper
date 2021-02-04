#!/usr/bin/env node
const { run } = require("..");
const [, , filePath, ...rest] = process.argv;

if (filePath === undefined) {
  process.stdout.write("Usage: tdx <path-to-file> [...typedoc-options]");
  process.exitCode = 2;
} else {
  run(filePath, { postArgs: rest })
    .then(({ stdout, stderr }) => {
      process.stdout.write(stdout);
      process.stderr.write(stderr);
      process.exitCode = 0;
    })
    .catch((error) => {
      process.stderr.write(error.message);
      process.exitCode = 1;
    });
}
