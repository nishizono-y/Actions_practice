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
    files: ["**/*.js"], // 対象ファイルを指定
    rules: {
      // ここにカスタムルールを追加
    },
  },
];

module.exports = config;
