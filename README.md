# typedoc-wrapper

[![npm version](https://img.shields.io/npm/v/typedoc-wrapper.svg)][npm]
[![test status](https://github.com/pihart/typedoc-wrapper/workflows/Node.js%20CI/badge.svg)][github]
[![documentation status](https://github.com/pihart/typedoc-wrapper/workflows/Documentation/badge.svg)][documentation]


Wrapper for typedoc and typedoc-plugin-custom-tags

## Installation

```shell
npm i --save-dev typedoc-wrapper
```

## Usage

### Library

```js
const typedoc = require("typedoc-wrapper");

// Call against your main file or directory
typedoc("./src/index.ts");
```

[Documentation]

### CLI

```shell
tdx <path-to-file> [...typedoc-options]
```

[github]: https://github.com/pihart/typedoc-wrapper
[npm]: https://www.npmjs.com/package/typedoc-wrapper
[documentation]: https://pihart.github.io/typedoc-wrapper
