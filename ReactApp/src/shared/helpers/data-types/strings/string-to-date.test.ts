import stringToDate from "./string-to-date";

test("stringToDate helper method => Correct input", () => {
  const actual = stringToDate("2020-04-23T00:29:40.000Z");
  const expected = "23.4.2020";

  expect(actual).toEqual(expected);
});
