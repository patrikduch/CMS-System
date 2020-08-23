/* 
  Helper class for convertion string data into another types.
*/
export default class StringConverter {
  /* 
    Converts string into number (integer).
  */
  static toNumber(input: string) {
    return parseInt(input);
  }

  /*
    Converts string into date time.
  */
  static toDateTime(input: string) {
    // Parse the date input string => if is incorrect returned values is NaN
    const isValid = Date.parse(input);

    if (isNaN(isValid)) {
      return null;
    }

    return new Date(input);
  }
}
