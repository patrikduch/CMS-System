/**
 * @function contaisNumber => Check if string contains any number.
 * @param input => String  input that will be processed.
 * @returns => String sequence that is valid or invalid numeric representation.
 * Empty sequence is returned if parsing failed.
 */
export const containsNumber = (input: string): string => {
  const regex = /\d+/g;
  const matches = input.match(regex); // creates array from matches

  if (matches != null && matches[0] != null) {
    return matches[0];
  }

  return "";
};
