// example.js

const helloWorld = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

// 定義した名前を使ってグリーティング
const defaultUserName = "Alice"; // ここで名前を指定
helloWorld(defaultUserName);

module.exports = { helloWorld };
