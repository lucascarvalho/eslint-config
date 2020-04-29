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

    /* Increase the JSX indentation */
    "react/jsx-max-depth": ["error", { max: 4 }],

    /* Avoid conflict with other rule to format strings in JSX.  */
    "react/jsx-no-literals": [
      "off",
      { allowedStrings: ["allowed"], ignoreProps: false, noStrings: true },
    ],

    /* Disable prop-types since we are using TypeScript */
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
