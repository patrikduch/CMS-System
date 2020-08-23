import { getParamId } from "./get-param-id";

test("getparamid => processed input '563' (success)", () => {
  const actual = getParamId("563");
  const expected = 563;

  expect(actual).toEqual(expected);
});

test("getparamid => processed input '563s' (fail)", () => {
  const actual = getParamId("563a");
  const expected = null;

  expect(actual).toEqual(expected);
});

test("getparamid => processed input 'Duch563s' (fail)", () => {
  const actual = getParamId("Duch563a");
  const expected = null;

  expect(actual).toEqual(expected);
});

test("getparamid => processed input 'a647' (fail)", () => {
  const actual = getParamId("a647");
  const expected = null;

  expect(actual).toEqual(expected);
});
