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
    /* Disable to better organize the code. */
    "one-var": "never",

    /* Disable for common numbers */
    "no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],
  },
};
