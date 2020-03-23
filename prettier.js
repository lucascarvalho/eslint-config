/**
 * Configuration for prettier.
 */
module.exports = {
  overrides: [
    {
      files: "*.json",
      options: { parser: "json" },
    },
    {
      files: [".*rc.js"],
      options: {
        printWidth: 110,
      },
    },
  ],
};
