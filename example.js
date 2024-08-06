// example.js

const helloWorld = (name) => {
  console.log(`Hello, ${name || "World"}!`);
};

// ユーザーからの入力を受け取る
const getUserInput = () => {
  const prompt = require("prompt-sync")(); // prompt-syncモジュールを使用
  const name = prompt("What is your name? "); // ユーザーに名前を尋ねる
  return name;
};

// ユーザーの名前を取得
const userName = getUserInput();
helloWorld(userName);

module.exports = { helloWorld };
