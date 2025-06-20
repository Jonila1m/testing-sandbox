import { expect, test } from "vitest";
import { fizzBuzz } from "./fizzBuzz";

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

test("case 1", () => {
  const expected = [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ];
  expect(fizzBuzz(15)).toStrictEqual(expected);
});
test("case 2", () => {
  const expected = [1, 2, "Fizz"];
  expect(fizzBuzz(3)).toStrictEqual(expected);
});
