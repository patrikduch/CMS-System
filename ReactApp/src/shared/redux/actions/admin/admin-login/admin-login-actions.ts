import * as actionTypes from "../../action-types";
import { Dispatch } from "redux";
import { DispatchObj } from "../../../../../typescript/types/shared/redux/StoreType";

import {
  getCookie,
  toDictionary,
} from "../../../../helpers/html/Cookie-Helper";

// API handler
import * as userAPI from "../../../../api/end-points/User-Api";
import { AxiosInstance } from "axios";

export const isUserAuthenticated = () => async (
  dispatch: Dispatch,
  getState: DispatchObj,
  api: AxiosInstance
) => {
  let tokenString = new String();
  const cookieAuth = getCookie("auth");

  if (cookieAuth != null) {
    tokenString = cookieAuth;
  } else {
    // Get cookies from axios request
    const cookie = api.defaults.headers.cookie;
    const token = new String(cookie);

    // Set of all cookies (String cookie representation conversion to dictionary)
    const cookieSet = toDictionary(token);
    // Assign value from
    tokenString = cookieSet.Item("auth");
  }

  const res = await userAPI.isAdminAuthenticated(tokenString);

  let errorThrown = false;

  if (res.data.error) {
    errorThrown = true;
  }

  dispatch({
    type: actionTypes.IS_USER_AUTHENTICATED,
    payload: res,
    token: tokenString,
    error: errorThrown,
  });
};

/* 
	Login user
*/
export const authenticate = (username: string, password: string) => async (
  dispatch: Dispatch,
  getState: DispatchObj,
  api: AxiosInstance
) => {
  try {
    const response = await userAPI.adminSignUp(username, password);

    dispatch({
      type: actionTypes.AUTHENTICATE,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.AUTHENTICATE,
      payload: {
        data: {
          error: true,
        },
      },
    });
  }
};

/* 
	User signout
*/
export const signout = () => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.USER_SIGN_OUT,
  });
};
