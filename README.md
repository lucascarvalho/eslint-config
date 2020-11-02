# eslint-config

The eslint-config provides all the available rules in each plugin. You can easily see how the latest changes will affect your codebase. It's also a great way to learn more about good practices when developing in JavaScript and TypeScript.

Some rules are disabled or modified in this repository to prevent conflicts between them.

# Setup

You can install this package using the commands below:

Yarn:

    yarn add -D https://github.com/lucascarvalho/eslint-config.git

# Plugins

All the supported plugins:

| Name                              | Version |
| --------------------------------- | ------- |
| eslint                            | 7.12.1  |
| eslint-config-prettier            | 6.15.0  |
| eslint-import-resolver-typescript | 2.3.0   |
| eslint-plugin-filenames           | 1.3.2   |
| eslint-plugin-import              | 2.22.1  |
| eslint-plugin-jest                | 24.1.0  |
| eslint-plugin-prettier            | 3.1.4   |
| eslint-plugin-promise             | 4.2.1   |
| eslint-plugin-react               | 7.21.5  |
| eslint-plugin-react-hooks         | 4.2.0   |
| eslint-plugin-react-native        | 3.10.0  |
| eslint-plugin-sort-keys-fix       | 1.1.1   |

# Extending

Every configuration available is extendable, see the example below on how to extend the eslint config and overwrite rules:

```javascript
/**
 * Configuration for eslint.
 */
module.exports = {
  extends: ["@lucascarvalho/eslint-config/eslint"],
  parserOptions: {
    // Configure the path to your project `tsconfig.json` file.
    project: "./tsconfig.json",
  },
  rules: {
    // Customize the default rules...
  },
  overrides: [
    // Override the eslint rules here for specific files...
  ],
  settings: {
    // Add your custom settings here...
  },
};
```
