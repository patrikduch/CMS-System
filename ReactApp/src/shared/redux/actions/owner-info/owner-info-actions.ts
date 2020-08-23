import * as actionTypes from "../action-types";
import { Dispatch } from "redux";

/* Type checking */
import OwnerInfoFieldType from "../../../../typescript/enums/shared/redux/Owner-Info-Field-Type";
import * as ownerInfoAPI from "../../../api/end-points/Owner-Info-API";
import OwnerInfoTypeModel from "../../../../typescript/types/app/models/Owner-Info-Type-Model";

/**
 * @function fetchOwnerInfoDetails - REST API call for fetching details about owner of this project.
 * @returns {object} - Action object with type "FETCH_OWNER_INFO_DETAIL"
 */
export const fetchOwnerInfoDetails = () => async (dispatch: Dispatch) => {
  const response = await ownerInfoAPI.getOwnerInfoDetails();

  dispatch({
    type: actionTypes.FETCH_OWNER_INFO_DETAIL,
    payload: response,
  });
};

/**
 * @function changeOwnerInfoField - Update owner info field -> No API fetching.
 * @returns {object} - Action object with type "CHANGE_OWNER_INFO_FIELD"
 */
export const changeOwnerInfoField = (
  type: OwnerInfoFieldType,
  data: string
) => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_OWNER_INFO_FIELD,
    payload: {
      type,
      data,
    },
  });
};

/**
 * @function updateOwnerInfoField - REST API call to save changes made on specific owner info fields.
 * @returns {object} - Action object with type "UPDATE_OWNER_INFO_FIELD"
 */
export const updateOwnerInfoField = (obj: OwnerInfoTypeModel) => async (
  dispatch: Dispatch
) => {
  const res = await ownerInfoAPI.updateOwnerInfo({
    companyName: obj.companyName,
    dic: obj.dic,
    ico: obj.ico,
    street: obj.street,
    zipCode: obj.zipCode,
    city: obj.city,
    email: obj.email,
  });

  dispatch({
    type: actionTypes.UPDATE_OWNER_INFO_FIELD,
    payload: res.data,
  });
};
