import { getIdFromQuery } from "./getIdFromQuery";

test("getIdFromQuery => valid number result", () => {
  const id = getIdFromQuery("?pageId=2");
  expect(id).toBe(2);
});

test("getIdFromQuery => valid page identifier (2000)", () => {
  const id = getIdFromQuery("?pageId=2000");
  expect(id).toBe(2000);
});

test("getIdFromQuery => valid page identifier (2 000 000)", () => {
  const id = getIdFromQuery("?pageId=2000000");
  expect(id).toBe(2000000);
});

test("getIdFromQuery => valid page identifier (2 000 000 000)", () => {
  const id = getIdFromQuery("?pageId=2000000000");
  expect(id).toBe(2000000000);
});

test("getIdFromQuery => valid page identifier (2 000 000 000 000)", () => {
  const id = getIdFromQuery("?pageId=2000000000000");
  expect(id).toBe(2000000000000);
});

test("getIdFromQuery => invalid page identifier (x)", () => {
  const id = getIdFromQuery("?pageId=X");
  expect(id).toBe(null);
});

test("getIdFromQuery => invalid page identifier (x1)", () => {
  const id = getIdFromQuery("?pageId=X1");
  expect(id).toBe(null);
});

test("getIdFromQuery => invalid page identifier (2x)", () => {
  const id = getIdFromQuery("?pageId=X1");
  expect(id).toBe(null);
});

test("getIdFromQuery => invalid page identifier (002)", () => {
  const id = getIdFromQuery("?pageId=002");
  expect(id).toBe(null);
});

test("getIdFromQuery => invalid page identifier (2000 000 000 000 000 000 0)", () => {
  const id = getIdFromQuery("?pageId=20000000000000000000");
  expect(id).toBe(null);
});
