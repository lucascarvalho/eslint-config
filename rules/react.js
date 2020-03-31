/**
 * Configuration for the eslint-plugin-react.
 */
module.exports = {
  extends: ["plugin:react/all"],
  plugins: ["react"],
  rules: {
    /* Default components to arrow function. */
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],

    /* Allow .tsx extension. */
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],

    /* Avoid conflict with other rule to format strings in JSX.  */
    "react/jsx-no-literals": [
      "off",
      { allowedStrings: ["allowed"], ignoreProps: false, noStrings: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
