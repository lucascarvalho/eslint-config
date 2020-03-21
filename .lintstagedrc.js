/**
 * Configuration for lint-staged.
 */
module.exports = {
  "*.js,tsx": [
    "import-sort --write",
    "eslint --fix --max-warnings 0",
    "prettier --write",
    `jest --coverage=false --passWithNoTests --bail --onlyChanged`
  ]
};
