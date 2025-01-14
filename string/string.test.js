const { add, subtract, multiply, divide, sqrt, max } = require("./string");

describe("This should run the given math problem and return the correct numbers", () => {
  test("Should add two numbers and get a sum", () => {
    expect(add(1 + 1)).toBe(2);
  });
  test("Should subtract two numbers and get the difference", () => {
    expect(subtract(3 - 1)).toBe(2);
  });
  test("Should multiply two numbers and get the product", () => {
    expect(multiply(2 * 2)).toBe(4);
  });
  test("Should divide two numbers and get the quotient", () => {
    expect(divide(6 / 3)).toBe(2);
  });
  test("Should take the square root of two numbers and return the square root", () => {
    expect(sqrt(Math.sqrt(25))).toBe(5);
  });
  test("Should take two parameters and return the max", () => {
    expect(max(Math.max(5, 100))).toBe(100);
  });
});
