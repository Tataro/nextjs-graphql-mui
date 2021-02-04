const fs = require("fs")
const path = require("path")
const prettierOptions = JSON.parse(fs.readFileSync(path.join(__dirname, "./.prettierrc"), "utf8"))

module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false,
    },
    sourceType: "module",
  },
  globals: {
    window: true,
    document: true,
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": [2, prettierOptions],
    "comma-dangle": ["error", "only-multiline"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    //indent: ['error', 2, { SwitchCase: 1 }],
    indent: 0,
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    quotes: ["error", "double"],
    semi: [0, "never"],
    "no-constant-condition": "off",
    "no-useless-escape": "off",
    "no-empty": "off",
  },
  plugins: ["prettier"],
}
