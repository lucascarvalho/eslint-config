/**
 * Configuration for the eslint.
 */
module.exports = {
  extends: ["eslint:all"],
  globals: {
    console: "readonly",
    fetch: "readonly",
    module: "readonly",
    process: "readonly",
    require: "readonly",
  },
  ignorePatterns: ["node_modules/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    /* Allow the usage of undefined */
    "no-undefined": "off",

    /* Allow TODO as warning comment. */
    "no-warning-comments": [
      "error",
      { location: "start", terms: ["fixme", "xxx"] },
    ],

    /* Disable to better organize the code. */
    "one-var": ["error", "never"],
  },
};
