import isContentInValid from "./is-Content-Invalid";

test("isContentValid => processed input 'Patrik Duch, duchpatrik@icloud.com'(success)", () => {
  const actual = isContentInValid("Patrik Duch, duchpatrik@icloud.com");
  const expected = false;

  expect(actual).toBe(expected);
});

test("isContentValid => processed input ''(success)", () => {
  const actual = isContentInValid("");
  const expected = true;

  expect(actual).toBe(expected);
});
