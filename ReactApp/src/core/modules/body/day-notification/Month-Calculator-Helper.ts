
/**
 * @class MonthCalculatorHelper => Helper class to determinate current month (January, February ... etc).
 */
export default class MonthCalculatorHelper {
  private _months: Array<string>;
  private _today: Date;

  private _monthIndex: number;

  constructor() {
    this._months = [
      "Ledna",
      "Února",
      "Března",
      "Dubna",
      "Května",
      "Června",
      "Července",
      "Srpna",
      "Září",
      "Října",
      "Listopadu",
      "Prosince"
    ];

    this._today = new Date();

    this._monthIndex = this._today.getMonth();
  }

  /**
   * @function getCurrentMonth => Get moth from current instance.
   */
  getCurrentMonth() {
    return this._months[this._monthIndex];
  }
}
