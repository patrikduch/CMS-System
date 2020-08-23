import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import * as statsAPI from "../../../api/end-points/Stats-API";

/**
 * @function fetchDashboardStatistics => Action creator to initialize dashboard statistics properties.
 */
export const fetchDashboardStatistics = () => async (dispatch: Dispatch) => {
  const response = await statsAPI.fetchDashBoardStats();

  dispatch({
    type: actionTypes.FETCH_DASHBOARD_SUMMARY_STATS,
    payload: response,
  });
};
