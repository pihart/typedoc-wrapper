const util = require("util");
const { join } = require("path");
const exec = util.promisify(require("child_process").exec);

const DEFAULTS_DIR = join(__dirname, "..", "typedoc");
const DEFAULTS = {
  CUSTOM_TAGS_JSON_FILE: join(DEFAULTS_DIR, "typedoc-tags-config.json"),
  THEME_DIR: join(DEFAULTS_DIR, "theme"),
};

/**
 * @param {string} mainFile Relative or absolute path to the file or dir to execute on
 * @param {string} [customTagsJSONFile] Relative or absolute path to JSON file defining custom tags
 * @param {string} [themeDir] Relative or absolute path to theme directory
 * @param {boolean} [hideGenerator] Whether to hide the message indicating generation by typedoc
 * @param {string | string[]} postArgs Arguments passed directly through to typedoc
 * @return {Promise}
 */
const run = (
  mainFile,
  {
    customTagsJSONFile = DEFAULTS.CUSTOM_TAGS_JSON_FILE,
    themeDir = DEFAULTS.THEME_DIR,
    hideGenerator = true,
    postArgs = "",
  } = {}
) =>
  exec(
    `npx typedoc ${mainFile} ${
      hideGenerator ? "--hideGenerator" : ""
    } --custom-tags-config ${customTagsJSONFile} --theme ${themeDir} ${
      typeof postArgs === "string" ? postArgs : postArgs.join(" ")
    }`
  );

module.exports = run;
