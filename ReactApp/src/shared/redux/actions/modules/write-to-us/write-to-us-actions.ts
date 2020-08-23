import * as actionTypes from "../../action-types";
import { Dispatch } from "redux";
import { DispatchObj } from "../../../../../typescript/types/shared/redux/StoreType";

/* Type checking. */
import WriteToUsFieldType from "../../../../../typescript/enums/shared/redux/Write-To-Us-Field-Type";

/**
 * @function toggleWriteModalState => Toggle current write to us modal state.
 */
export const toggleWriteModalState = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  dispatch({
    type: actionTypes.WRITE_TO_US_TOGGLE_MODAL,
  });
};

/**
 * @function resetWriteUsModalState => Reset all credentials of writeToUs modal state.
 */
export const resetWriteToUsModalState = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  dispatch({
    type: actionTypes.WRITE_TO_US_RESET_ALL_FIELDS,
  });
};

/**
 * @function changeWriteToUsField => Change write to us field (message)
 * @param changeType => Type of field property to change.
 * @param changeValue => New value for specified type of write to us property field.
 */
export const changeWriteToUsField = (
  changeType: WriteToUsFieldType,
  changeValue: string
) => async (dispatch: Dispatch, getState: DispatchObj) => {
  dispatch({
    type: actionTypes.WRITE_TO_US_CHANGE_FIELD,
    payload: {
      data: { changeType: changeType, changeValue: changeValue },
    },
  });
};
