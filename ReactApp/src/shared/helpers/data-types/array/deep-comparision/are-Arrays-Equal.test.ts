import areArraysEqual from "./are-Arrays-Equal";

test("Deep comparision of object array: areArrayEqual => Arrays are equal", () => {
  const firstArray = [{ testProp: 1, secondProp: "patrik" }];
  const secondArray = [{ testProp: 1, secondProp: "patrik" }];

  const actual = areArraysEqual(firstArray as [], secondArray as []);
  const expected = true;

  expect(actual).toEqual(expected);
});

test("Deep comparision of object array: areArrayEqual => Arrays are equal", () => {
  const firstArray = [{ testProp: 1, secondProp: "patrik" }];
  const secondArray = [{ testProp: 1, secondProp: "patrikduch" }];

  const actual = areArraysEqual(firstArray as [], secondArray as []);
  const expected = false;

  expect(actual).toEqual(expected);
});
