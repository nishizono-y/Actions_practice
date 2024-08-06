/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        $: "readonly",
        jQuery: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    files: ["**/*.js"],
    rules: {},
  },
];

module.exports = config;
