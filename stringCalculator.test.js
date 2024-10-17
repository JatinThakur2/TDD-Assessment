const stringCalculator = require("./stringCalculator");

test("returns 0 for an empty string", () => {
  expect(stringCalculator.add("")).toBe(0);
});

test('returns 1 for the string "1"', () => {
  expect(stringCalculator.add("1")).toBe(1);
});

test('returns 6 for the string "1,5"', () => {
  expect(stringCalculator.add("1,5")).toBe(6);
});

test('returns 10 for the string "1,2,3,4"', () => {
  expect(stringCalculator.add("1,2,3,4")).toBe(10);
});

test('returns 6 for the string "1\n2,3"', () => {
  expect(stringCalculator.add("1\n2,3")).toBe(6);
});

test('returns 3 for the string "//;\n1;2"', () => {
  expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
  expect(() => stringCalculator.add("1,-2,3")).toThrow(
    "negative numbers not allowed: -2"
  );
});

test("throws error for multiple negative numbers", () => {
  expect(() => stringCalculator.add("1,-2,-5")).toThrow(
    "negative numbers not allowed: -2,-5"
  );
});
