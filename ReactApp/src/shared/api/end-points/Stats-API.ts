import * as requestUtils from "../Request-Utils";

/**
 * @function fetchDashBoardStats => Get statistics for admin dashboard..
 */
export const fetchDashBoardStats = () => {
  return requestUtils.sendGet("/stats/info", false);
};
