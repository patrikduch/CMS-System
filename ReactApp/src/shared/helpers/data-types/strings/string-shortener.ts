/**
 * @function stringShortener => String shortening for longer strings.
 * @param input => string input that will be processed.
 * @param newLength => New string length.
 */
const stringShortener = (input: string, newLength: number) => {
  if (input.length > newLength) {
    input = input.slice(0, newLength);
    return `${input}...`;
  }

  return input;
};

export default stringShortener;
