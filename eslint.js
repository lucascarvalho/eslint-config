/**
 * Entry point for the main configuration.
 */
module.exports = {
  extends: [
    './rules/eslint',
    './rules/filenames',
    './rules/import',
    './rules/jest',
    './rules/prettier',
    './rules/promise',
    './rules/react',
    './rules/sort-keys-fix',
    '.rules/typescript',
  ].map(require.resolve),
};
