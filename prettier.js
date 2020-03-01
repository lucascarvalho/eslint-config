/**
 * Configuration for prettier.
 */
module.exports = {
  overrides: [
    {
      files: "package.json",
      options: { parser: "json" },
    },
  ],
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
};
