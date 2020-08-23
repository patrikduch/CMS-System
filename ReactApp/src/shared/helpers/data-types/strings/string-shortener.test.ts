import stringShortener from "./string-shortener";

test("string shortener helper method => Correct string mutation", () => {
  const actual = stringShortener("Hello world!", 5);
  const expected = "Hello...";

  expect(actual).toEqual(expected);
});
