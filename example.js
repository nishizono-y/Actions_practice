// example.js

const helloWorld = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

const defaultUserName = "Alice";
helloWorld(defaultUserName);

module.exports = { helloWorld };
