# typedoc

Wrapper for typedoc and typedoc-plugin-custom-tags

## Installation

```shell
npm i --save-dev github:pihart/typedoc
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
