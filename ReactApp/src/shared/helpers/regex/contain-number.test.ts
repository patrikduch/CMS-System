import { containsNumber } from "./contain-number";

test("containsNumber => process method test (success)", () => {
  const actual = containsNumber("aa2");
  const expected = "2";

  expect(actual[0]).toBe(expected);
});

test("containsNumber => process method test (fail)", () => {
  const actual = containsNumber("aa");
  const expected = "";

  expect(actual).toEqual(expected);
});
