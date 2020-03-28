/**
 * Entry point for the eslint configuration.
 */
module.exports = {
  extends: [
    "./rules/eslint",
    "./rules/filenames",
    "./rules/import",
    "./rules/jest",
    "./rules/promise",
    "./rules/react",
    "./rules/sort-keys-fix",
    "./rules/typescript",
    "./rules/prettier",
  ].map(require.resolve),
  parser: null,
  parserOptions: {
    ecmaFeatures: {
      modules: false,
    },
  },
};
