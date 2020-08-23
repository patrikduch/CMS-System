import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import * as moduleFeatureAPI from "../../../api/end-points/Module-Feature-API";

/* =======  FEATURE INITIALIZATION  =============================  */

/**
 * @function fetchEnabledFeatures => Fetch only enabled features.
 */
export const fetchEnabledFeatures = () => async (dispatch: Dispatch) => {
  const res = await moduleFeatureAPI.getEnabledFeatures();

  dispatch({
    type: actionTypes.FETCH_ENABLED_FEATURES,
    payload: res,
  });
};

/**
 * @function fetchAllFeatures => Fetch all features without restrictions.
 */
export const fetchAllFeatures = () => async (dispatch: Dispatch) => {
  const res = await moduleFeatureAPI.getEnabledFeatures();

  dispatch({
    type: actionTypes.FETCH_ALL_FEATURES,
    payload: res,
  });
};

/* === CHANGE MODULE OR FEATURE ===================================  */

/**
 * @function toggleModuleFeatureState => Toggle isEnabled state of specific module target by indentifier.
 * @param featureId
 */
export const toggleModuleFeatureState = (featureId: number) => async (
  dispatch: Dispatch
) => {
  const res = await moduleFeatureAPI.toggleModuleState(featureId);
  // Check if is feature or module
  if (res.data.feature.isFeature) {
    dispatch({
      type: actionTypes.TOGGLE_FEATURE_STATE,
      payload: res,
    });
  } else {
    dispatch({
      type: actionTypes.TOGGLE_MODULE_STATE,
      payload: res,
    });
  }
};
