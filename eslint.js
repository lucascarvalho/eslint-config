/**
 * Entry point for the main configuration.
 */
module.exports = {
  extends: [
    './rules/eslint',
    './rules/filenames',
    './rules/import',
    './rules/prettier',
    './rules/promise',
    './rules/sort-keys-fix',
    '.rules/jest',
    '.rules/react',
  ].map(require.resolve),
};
