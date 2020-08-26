import { expect } from "chai";
import PaginationHelper from "./Pagination-Helper";

describe("Pagination-Helper.ts", () => {
  context("getPageCount", () => {
    it("returns two pages from 9.items", () => {
      const actual = PaginationHelper.getPageCount(9, 5);
      const expected = 2;
      expect(actual).to.equal(expected);
    });

    it("returns single page from 5.items", () => {
      const actual = PaginationHelper.getPageCount(5, 5);
      const expected = 1;
      expect(actual).to.equal(expected);
    });

    it("returns zero pages from 0.items", () => {
      const actual = PaginationHelper.getPageCount(0, 5);
      const expected = 0;
      expect(actual).to.equal(expected);
    });

    it("returns single page from 1.items", () => {
      const actual = PaginationHelper.getPageCount(1, 5);
      const expected = 1;
      expect(actual).to.equal(expected);
    });

    it("returns single page from 2.items", () => {
      const actual = PaginationHelper.getPageCount(2, 5);
      const expected = 1;
      expect(actual).to.equal(expected);
    });

    it("returns single page from 3.items", () => {
      const actual = PaginationHelper.getPageCount(3, 5);
      const expected = 1;
      expect(actual).to.equal(expected);
    });

    it("returns five pages from 25.items", () => {
      const actual = PaginationHelper.getPageCount(25, 5);
      const expected = 5;
      expect(actual).to.equal(expected);
    });
  });
});
