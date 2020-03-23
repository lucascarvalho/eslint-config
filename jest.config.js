module.exports = {
  globals: {
    NODE_ENV: "test"
  },
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  verbose: true
};
