/**
 * Configuration for the eslint-plugin-react.
 */
module.exports = {
  extends: ["plugin:react/all"],
  plugins: ["react"],
  rules: {
    /* Allow .tsx externsion */
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
