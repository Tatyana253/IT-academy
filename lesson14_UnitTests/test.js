const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("verify add function", () => {
    test("adds two numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds multiple numbers", () => {
      expect(calculator.add(2, 3, 4)).toBe(9);
    });

    test("returns 0 for no arguments", () => {
      expect(calculator.add()).toBe(0);
    });
    test.each([
      [10, 5, 15],
      [20, 30, 50],
      [50, 77, 127],
    ])("adds numbers param", async (numberOne, numberTwo, result) => {
      expect(calculator.add(numberOne, numberTwo)).toBe(result);
    });
    test("throws an error if non-number arguments are passed", () => {
      expect(() => calculator.add("2", "3")).toThrow();
    });
  });

  describe("verify multiply function", () => {
    test("multiplies two numbers", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
    test.each([
      [10, 5, 50],
      [7, 8, 56],
      [7, 7, 49],
    ])("multiplies numbers param", async (numberOne, numberTwo, result) => {
      expect(calculator.multiply(numberOne, numberTwo)).toBe(result);
    });

    test("multiplies multiple numbers", () => {
      expect(calculator.multiply(2, 3, 4)).toBe(24);
    });

    test("throws an error if non-number arguments are passed", () => {
      expect(() => calculator.multiply(2, "3")).toThrow();
    });
  });

  describe("verify subtraction function", () => {
    test("subtracts two numbers", () => {
      expect(calculator.subtraction(5, 3)).toBe(2);
    });
    test("throws an error if non-number arguments are passed", () => {
      expect(() => calculator.subtraction(5, "3")).toThrow();
    });
    test.each([
      [10, 5, 5],
      [7, 3, 4],
      [70, 77, -7],
    ])("subtraction numbers param", async (numberOne, numberTwo, result) => {
      expect(calculator.subtraction(numberOne, numberTwo)).toBe(result);
    });
  });

  describe("verify divide function", () => {
    test("divides two numbers", () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });
    test.each([
      [10, 5, 2],
      [21, 3, 7],
      [70, 10, 7],
    ])("divides numbers param", async (numberOne, numberTwo, result) => {
      expect(calculator.divide(numberOne, numberTwo)).toBe(result);
    });
    test("throws an error if non-number arguments are passed", () => {
      expect(() => calculator.divide(6, "3")).toThrow();
    });

    test("throws an error if the divider is 0", () => {
      expect(() => calculator.divide(6, 0)).toThrow();
    });
  });

  describe("verify exponentiation function", () => {
    test("calculates the exponentiation of a number", () => {
      expect(calculator.exponentiation(2)).toBe(4);
    });
    test("throws an error if a non-number argument is passed", () => {
      expect(() => calculator.exponentiation("2")).toThrow();
    });
  });
});
