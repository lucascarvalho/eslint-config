# eslint-config

This repository provides Eslint configuration adding as many rules are available in each plugin, so you can see what changes are being made on the most recent versions and how they impact your codebase, also it's a great way to learn more about good practices when developing in JavaScript and/or TypeScript.

# Setup

You can install this package using the commands below:

Yarn:

    yarn add -D https://github.com/lucascarvalho/eslint-config.git
    
# Plugins

All the supported plugins:

| Name                              | Version |
|-----------------------------------|---------|
| eslint                            | 7.3.0   |
| eslint-config-prettier            | 6.11.0  |
| eslint-import-resolver-typescript | 2.0.0   |
| eslint-plugin-filenames           | 1.3.2   |
| eslint-plugin-import              | 2.21.2  |
| eslint-plugin-jest                | 23.15.0 |
| eslint-plugin-prettier            | 3.1.4   |
| eslint-plugin-promise             | 4.2.1   |
| eslint-plugin-react               | 7.20.0  |
| eslint-plugin-react-hooks         | 4.0.4   |
| eslint-plugin-react-native        | 3.8.1   |
| eslint-plugin-sort-keys-fix       | 1.1.1   |

# Extending

Every configuration available is extendable, see the example below on how to extend the eslint config and overwrite rules:

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
