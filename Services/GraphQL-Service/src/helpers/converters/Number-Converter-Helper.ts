/**
 * @class NumberConverterHelper => Helper class for every conversion for numeric values.
 */
class NumberConverterHelper {
  /**
   * @function stringToNumber => String conversion into numeric type.
   */
  static stringToNumber = (input: string): number => {
    return parseInt(input);
  };
}

export default NumberConverterHelper;
