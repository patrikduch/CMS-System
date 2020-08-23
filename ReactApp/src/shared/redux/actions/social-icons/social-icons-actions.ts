import * as actionTypes from "../action-types";
import { Dispatch } from "redux";

import * as socialIconsApi from "../../../api/end-points/Social-Icons-Api";

/**
 * @function fetchSocialIcons - REST API call to fetch all social icons details.
 * @returns {object} - Action object with type "FETCH_ALL_SOCIAL_ICONS"
 */
export const fetchSocialIcons = () => async (dispatch: Dispatch) => {
  const res = await socialIconsApi.getAll();

  dispatch({
    type: actionTypes.FETCH_ALL_SOCIAL_ICONS,
    payload: res,
  });
};
