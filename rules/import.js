/**
 * Configuration for the eslint-plugin-import.
 */
module.exports = {
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  plugins: ["import"],
  rules: {
    // Turn on errors for missing imports because it conflicts with TypeScript configuration
    "import/no-unresolved": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // Use <root>/tsconfig.json
      typescript: {
        // Always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
};
