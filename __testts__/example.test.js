// __tests__/example.test.js

const { helloWorld } = require("../example");

test('prints "Hello, World!" to the console', () => {
  console.log = jest.fn(); // console.logをモックする
  helloWorld();
  expect(console.log).toHaveBeenCalledWith("Hello, World!");
});
