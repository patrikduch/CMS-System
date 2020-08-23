import { getDigits } from "./get-digits";

test("getDigits => process method test (success)", () => {
  const expected = 123;
  const actual = getDigits("123");
  expect(actual).toEqual(expected);
});

test("getDigits => process input 'a123' test (fail)", () => {
  const expected = null;
  const actual = getDigits("a123");
  expect(actual).toEqual(expected);
});

test("getDigits => process input '123a' test (fail)", () => {
  const expected = null;
  const actual = getDigits("123a");
  expect(actual).toEqual(expected);
});

test("getDigits => process input '01' test (fail)", () => {
  const expected = null;
  const actual = getDigits("01");
  expect(actual).toEqual(expected);
});

test("getDigits => process input '0000001' test (fail)", () => {
  const expected = null;
  const actual = getDigits("0000001");
  expect(actual).toEqual(expected);
});
