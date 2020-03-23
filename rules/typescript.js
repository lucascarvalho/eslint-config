/**
 * Configuration for the typescript.
 */
module.exports = {
  extends: ["plugin:@typescript-eslint/all"],
  rules: {
    /* Disable for common numbers */
    "@typescript-eslint/no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],
  },
};
