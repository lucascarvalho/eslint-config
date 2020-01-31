/**
 * Configuration for the eslint.
 */
module.exports = {
  extends: ['eslint:all'],
  globals: {
    console: 'readonly',
    fetch: 'readonly',
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
  ignorePatterns: ['node_modules/'],
  parser: '@typescript-eslint/parser',
  rules: {},
};
