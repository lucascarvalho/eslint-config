/**
 * Configuration for the eslint-plugin-prettier.
 */
module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react",
    "prettier/standard",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
