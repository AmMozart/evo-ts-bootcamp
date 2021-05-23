module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: ["eslint:recommended", "airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: './homeworks/07-mars-viewer/tsconfig.json',
    ecmaVersion: 2017,
    sourceType: "module",
  },
};