import StringConverter from "../../converters/data-types/String-Converter";

/**
 * @function stringToDate => Convert string into date. (Result example: 25.5,2020)
 */
const stringToDate = (inputString: string) => {
  if (inputString == null) return null;

  const processedDate = StringConverter.toDateTime(inputString);

  return `${processedDate?.getDate()}.${
    processedDate != null ? processedDate.getMonth() + 1 : null
  }.${processedDate?.getFullYear()}`;
};

export default stringToDate;
