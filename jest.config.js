module.exports = {
  "verbose": true,
  "testRegex": ".*rtest.js",
  "moduleDirectories": [
    "node_modules",
    "src/modules",
  ],
  "transform": {
    "\\.js$": 'babel-jest',
  },
  "moduleFileExtensions": [
    "js",
  ],
};
