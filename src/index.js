const util = require("util");
const { join } = require("path");
const exec = util.promisify(require("child_process").exec);

const DEFAULTS_DIR = join(__dirname, "..", "typedoc");
const DEFAULTS = {
  CUSTOM_TAGS_JSON_FILE: join(DEFAULTS_DIR, "typedoc-tags-config.json"),
  THEME_DIR: join(DEFAULTS_DIR, "theme"),
};

/**
 * @param mainFile File or dir to execute on
 * @param customTagsJSONFile
 * @param themeDir
 * @param hideGenerator
 * @param {string | string[]} postArgs
 * @return {Promise<string>}
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
