/**
 * Configuration for the typescript.
 */
module.exports = {
  extends: ["plugin:@typescript-eslint/all"],
  overrides: [
    /* Disable import rules that are commonly used in configuration files. */
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  rules: {
    /* Disable for common numbers. */
    "@typescript-eslint/no-magic-numbers": ["error", { ignore: [-1, 0, 1] }],

    /* Many dependencies use `any` as type. */
    "@typescript-eslint/no-unsafe-call": "off",

    /* Many dependencies use `any` as type. */
    "@typescript-eslint/no-unsafe-member-access": "off",
  },
};
