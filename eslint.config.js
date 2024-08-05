/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      globals: {
        // 使用するグローバル変数をここに追加
        // 例えば、jQueryを使う場合:
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
