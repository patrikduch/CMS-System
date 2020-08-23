import StringConverter from "./String-Converter";

test("StringConverter => toNumber method test", () => {
  expect(StringConverter.toNumber("1")).toBe(1);
});

test("StringConverter => convertion from String into Date (fail test)", () => {
  const input = "aa2019-12-28aa";
  const actual = StringConverter.toDateTime(input);
  const expected = null;

  expect(actual).toBe(expected);
});

test("StringConverter => convertion from String into Date (success test)", () => {
  const input = "2019-12-28";
  const actual = StringConverter.toDateTime(input);
  expect(actual).not.toBe(null);
});
