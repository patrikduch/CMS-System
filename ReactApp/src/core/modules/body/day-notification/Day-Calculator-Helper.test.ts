import DayCalculatorHelper from "./Day-Calculator-Helper";

test("today is monday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(1)).toBe("Pondělí");
});

test("today is tuesday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(2)).toBe("Úterý");
});

test("today is wednesday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(3)).toBe("Středa");
});

test("today is thursday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(4)).toBe("Čtvrtek");
});

test("today is friday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(5)).toBe("Pátek");
});

test("today is saturday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(6)).toBe("Sobota");
});

test("today is sunday", () => {
  const dayCalculatorHelper = new DayCalculatorHelper();
  expect(dayCalculatorHelper.getCurrentDay(0)).toBe("Neděle");
});
