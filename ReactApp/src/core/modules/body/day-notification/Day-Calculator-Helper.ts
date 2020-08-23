/**
 * @class DayCalculatorHelper => Helper class to determinate current day (Monday, Tuesday... etc).
 */
export default class DayCalculatorHelper {
  private _days: Array<string>;

  constructor() {
    this._days = [
      "Neděle",
      "Pondělí",
      "Úterý",
      "Středa",
      "Čtvrtek",
      "Pátek",
      "Sobota"
    ];
  }
  
  /**
   * @function getCurrentDay => Get current day name by day index identifier.
   * @param dayIndex 
   */
  getCurrentDay(dayIndex: number) {
    //dayIndex = 6;
    return this._days[dayIndex];
  }
}
