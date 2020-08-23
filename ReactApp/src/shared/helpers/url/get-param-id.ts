import { getDigits } from "../regex/get-digits";

/**
 * @function getParamId => Get numeric identifier from provided string
 * @param url
 */
export const getParamId = (url: string): number | null => {
  const result = getDigits(url);
  return result != null ? result : null;
};
