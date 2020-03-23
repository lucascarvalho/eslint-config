/**
 * Configuration for the eslint-plugin-filenames.
 */
module.exports = {
  overrides: [
    {
      files: [
        ".*rc.js",
        "*.config.{ts,js}",
        "*.spec.{ts,js}",
        "*.test.{ts,js}"
      ],
      rules: {
        "filenames/match-regex": ["off"]
      }
    }
  ],
  plugins: ["filenames"],
  rules: {
    "filenames/match-exported": ["error", ["kebab", "pascal"]],
    "filenames/match-regex": ["error", "^[a-zA-Z-]+$", true],
    "filenames/no-index": "error"
  }
};
