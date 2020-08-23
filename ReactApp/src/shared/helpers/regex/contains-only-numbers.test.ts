import { containsOnlyNumbers } from "./contains-only-numbers";

test("containsOnlyNumbers => process method test (success)", () => {
  const expected = 123;
  const actual = containsOnlyNumbers("123");

  expect(actual).toEqual(expected);
});

test("containsOnlyNumbers => process with input:'123a' (fail)", () => {
  const expected = null;
  const actual = containsOnlyNumbers("123a");

  expect(actual).toEqual(expected);
});

test("containsOnlyNumbers => process with input:'a123' (fail)", () => {
  const expected = null;
  const actual = containsOnlyNumbers("a123");

  expect(actual).toEqual(expected);
});

test("containsOnlyNumbers => process with input:'aa' (fail)", () => {
  const expected = null;
  const actual = containsOnlyNumbers("aa");

  expect(actual).toEqual(expected);
});
