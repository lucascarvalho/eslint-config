/**
 * Configuration for the eslint-plugin-filenames.
 */
module.exports = {
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.huskyrc.js',
        '.lintstagedrc.js',
        '.prettierrc.js',
      ],
      rules: {
        'filenames/match-regex': ['off'],
      },
    },
  ],
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': 'error',
    'filenames/match-regex': ['error', '^[a-z-]+$', true],
    'filenames/no-index': 'error',
  },
};
