import * as util from "util";
import { join } from "path";
import { exec } from "child_process";
const execPromise = util.promisify(exec);

const DEFAULTS_DIR = join(__dirname, "..", "typedoc");
const DEFAULTS = {
  CUSTOM_TAGS_JSON_FILE: join(DEFAULTS_DIR, "typedoc-tags-config.json"),
  THEME_DIR: join(DEFAULTS_DIR, "theme"),
};

/**
 * @param mainFile Relative or absolute path to the file or dir to execute on
 * @param customTagsJSONFile Relative or absolute path to JSON file defining custom tags
 * @param themeDir Relative or absolute path to theme directory
 * @param hideGenerator Whether to hide the message indicating generation by typedoc
 * @param postArgs Arguments passed directly through to typedoc
 */
export const run = (
  mainFile: string,
  {
    customTagsJSONFile = DEFAULTS.CUSTOM_TAGS_JSON_FILE,
    themeDir = DEFAULTS.THEME_DIR,
    hideGenerator = true,
    postArgs = "",
  }: Partial<{
    customTagsJSONFile: string;
    themeDir: string;
    hideGenerator: boolean;
    postArgs: string | string[];
  }> = {}
) =>
  execPromise(
    `npx typedoc ${mainFile} ${
      hideGenerator ? "--hideGenerator" : ""
    } --custom-tags-config ${customTagsJSONFile} --theme ${themeDir} ${
      typeof postArgs === "string" ? postArgs : postArgs.join(" ")
    }`
  );
