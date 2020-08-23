import _ from "lodash";

/**
 * @function areArraysEqual => Deep comparision of two object arrays.
 * @param firstArray  => First object array.
 * @param secondArray => Second object array.
 */
const areArraysEqual = (firstArray: [], secondArray: []) => {
  for (let i = 0; i < firstArray.length; i++) {
    const areModulePropsEqual = _.isEqual(firstArray[i], secondArray[i]);

    if (!areModulePropsEqual) {
      return false;
    }
  }
  return true;
};

export default areArraysEqual;
