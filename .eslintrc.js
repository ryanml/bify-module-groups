module.exports = {
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "extends": "plugin:ava/recommended",
  "plugins": [
    "eslint-plugin-ava",
    "eslint-plugin-standard"
  ],
  "rules": {
    "ava/no-import-test-files": "off"
  },
  "env": {
    "es6": true
  }
}