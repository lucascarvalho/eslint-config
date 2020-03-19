/**
 * Entry point for the main configuration.
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
    "./rules/prettier"
  ].map(require.resolve)
};
