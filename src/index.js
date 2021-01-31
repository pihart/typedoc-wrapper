const util = require("util");
const { join } = require("path");
const exec = util.promisify(require("child_process").exec);

const run = (
  mainFile,
  {
    customTagsJSONFile = join(
      __dirname,
      "/../typedoc/typedoc-tags-config.json"
    ),
    themeDir = join(__dirname, "/../typedoc/theme"),
    hideGenerator = true,
  } = {}
) =>
  exec(
    `npx typedoc ${mainFile} ${
      hideGenerator ? "--hideGenerator" : ""
    } --custom-tags-config ${customTagsJSONFile} --theme ${themeDir}`
  );

module.exports = run;
