import { expect } from "chai";
import NumberConverterHelper from "./Number-Converter-Helper";

describe("Number-Converter-Helper.ts", () => {
  context("stringToNumber", () => {
    before(() => {
      console.log("=====before");
      console.log("ENV", process.env.NODE_ENV);
    });

    after(() => {
      console.log("====after");
    });

    it("Parsing valid string into number", () => {
      const actual = NumberConverterHelper.stringToNumber("2");
      const expected = 2;

      expect(expected).to.equal(actual);
    });
  });
});
