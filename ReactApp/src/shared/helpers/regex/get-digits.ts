import { toNumber } from "lodash";

/**
 *ˇ@function getDigits => Get digits from string input.
 * @param input => String that will be processed.
 */
export const getDigits = (input: string): number | null => {
  const regex = new RegExp("^[1-9][0-9]+$");
  const result = regex.exec(input);

  return result != null ? toNumber(result) : null;
};
