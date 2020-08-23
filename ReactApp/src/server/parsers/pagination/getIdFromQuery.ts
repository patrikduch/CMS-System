import StringConverter from "../../../shared/helpers/converters/data-types/String-Converter";
import { containsNumber } from "../../../shared/helpers/regex/contain-number";

/**
 * @function getIdFromQuery => Get param numeric identifier from provided string sequence.
 * @param input  => String sequence that will be processed.
 */
export const getIdFromQuery = (input: string): null | number => {
  const regex = RegExp("^\\?pageId=[1-9]([0-9]){0,18}$");
  const isStringValid = regex.test(input);

  return isStringValid ? StringConverter.toNumber(containsNumber(input)) : null;
};
