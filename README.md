# eslint-config

This repository provides Eslint configuration adding as many rules are available in each plugin, so you can see what changes are being made on the most recent versions and how they impact your codebase, also it's a great way to learn more about good practices when developing in JavaScript and/or TypeScript.

# Setup

You can install this package using the commands below:

Yarn:

    ```
    yarn add -D https://github.com/lucascarvalho/eslint-config.git
    ```

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
