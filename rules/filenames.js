/**
 * Configuration for the eslint-plugin-filenames.
 */
module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': 'error',
    'filenames/match-regex': ['error', '^[a-z-]+$', true],
    'filenames/no-index': 'error',
  },
};
