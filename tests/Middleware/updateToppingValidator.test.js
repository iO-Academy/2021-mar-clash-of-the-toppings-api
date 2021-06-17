const checkInt = require("../../Middleware/updateToppingValidator").checkInt;

test("input as a string", () => {
  expect(checkInt("342")).toBe(false);
});

test("input with decimal", () => {
  expect(checkInt(34.24)).toBe(false);
});

test("input with integer", () => {
  expect(checkInt(46)).toBe(true);
});
