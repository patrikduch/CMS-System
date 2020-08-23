import * as actionTypes from "../../action-types";
import { Dispatch } from "redux";
import { DispatchObj } from "../../../../../typescript/types/shared/redux/StoreType";

/* Type checking. */
import WriteToUsFieldType from "../../../../../typescript/enums/shared/redux/Write-To-Us-Field-Type";

/**
 * @function toggleWriteModalState => Toggle current write to us modal state.
 */
export const toggleRecommendUsModalState = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  dispatch({
    type: actionTypes.RECOMMEND_US_TOGGLE_MODAL,
  });
};

/**
 * @function resetRecommendUsModalState => Reset all credentials of recommendsUs modal state.
 */
export const resetRecommendUsModalState = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  dispatch({
    type: actionTypes.RECOMMEND_US_RESET_ALL_FIELDS,
  });
};

/**
 * @function changeRecommendUsField => Change recommend us field by specified type.
 * @param changeType => Type of field property to change.
 * @param changeValue => New value for specified type of recommend us property field.
 */
export const changeRecommendUsField = (
  changeType: WriteToUsFieldType,
  changeValue: string
) => async (dispatch: Dispatch, getState: DispatchObj) => {
  dispatch({
    type: actionTypes.RECOMMEND_US_CHANGE_FIELD,
    payload: {
      data: { changeType: changeType, changeValue: changeValue },
    },
  });
};
