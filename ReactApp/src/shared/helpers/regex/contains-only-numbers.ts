import { toNumber } from "lodash";

/**
 * @function contaisOnlyNumber => Match if string contains only numbers
 * @param input => String representation that is transformed into numeric one.
 * @returns => Numeric value of not value at all (null).
 */
export const containsOnlyNumbers = (input: string): number | null => {
  const regex = new RegExp("^[0-9]+$");
  const result = regex.exec(input);

  if (result == null) {
    return null;
  }

  return toNumber(result);
};
