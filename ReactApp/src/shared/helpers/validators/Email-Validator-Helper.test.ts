import { validateEmail } from "./Email-Validator-Helper";

test("EmailValidatorHelper => correct e-mail format test (success)", () => {
  const actual = validateEmail("patrikduch@gmail.com");
  const expected = true;

  expect(actual).toBe(expected);
});

test("EmailValidatorHelper => incorrect e-mail format test (success)", () => {
  const actual = validateEmail("patrikduch@");
  const expected = false;

  expect(actual).toBe(expected);
});

test("EmailValidatorHelper => incorrect e-mail format test (success)", () => {
  const actual = validateEmail("patrikduch@gmail.");
  const expected = false;

  expect(actual).toBe(expected);
});

test("EmailValidatorHelper => incorrect e-mail format test (success)", () => {
  const actual = validateEmail("@gmail.com");
  const expected = false;

  expect(actual).toBe(expected);
});
