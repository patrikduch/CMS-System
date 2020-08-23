/**
 * @function removeCommentsAndSpacing => Trim all spacing and removal of all commments.
 * @param str => String that will be modified into minified version.
 */
export const removeCommentsAndSpacing = (str = "") =>
  str.replace(/\/\*.*\*\//g, " ").replace(/\s+/g, " ");
