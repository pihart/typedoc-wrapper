# typedoc

[![npm version](https://img.shields.io/npm/v/typedoc-wrapper.svg)][npm]
[![test status](https://github.com/pihart/ts/workflows/Node.js%20CI/badge.svg)][github]

Wrapper for typedoc and typedoc-plugin-custom-tags

## Installation

```shell
npm i --save-dev typedoc-wrapper
```

## Usage

### Library

```js
const typedoc = require("typedoc-wrapper");

typedoc("./src/index.ts");
```

Signature:

```ts
(
  mainFile: string, // filepath, relative or absolute
  {
    customTagsJSONFile = DEFAULTS.CUSTOM_TAGS_JSON_FILE,
    themeDir = DEFAULTS.THEME_DIR,
    hideGenerator = true,
  }: {
    customTagsJSONFile: string // path to JSON file defining custom tags,
    themeDir: string // path to theme directory,
    hideGenerator: boolean // whether to hide the message indicating generation by typedoc
  } = {}
) => Promise<unknown>;
```

### CLI

```shell
tpx path-to-file
```

Does not yet support options like the library command does;
see <https://github.com/pihart/typedoc/pull/4>;

[npm]: https://www.npmjs.com/package/typescript-wrapper
[github]: https://github.com/pihart/typescript-wrapper
