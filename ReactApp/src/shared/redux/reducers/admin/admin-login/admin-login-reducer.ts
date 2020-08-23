// Import of all actions types
import * as actionTypes from "../../../actions/action-types";
// Import initial state configuration
import initialState from "../../initial-state";

/* Cookie helper */
import {
  removeCookie,
  setCookie
} from "../../../../helpers/html/Cookie-Helper";

/* Type checking. */
import ReduxActionType from "../../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/**
 * @type ActionPayloadType => Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  data: {
    error: boolean;
    user: {
      token: string;
      isAuthenticated: boolean;
    };
  };
};

// Reducer must be created before the store object
const reducer = (
  state = initialState.currentUser,
  action: ReduxActionType<ActionPayloadType> & { error: boolean }
) => {
  switch (action.type) {
    case actionTypes.IS_USER_AUTHENTICATED:
      if (action.error) {
        // Error has been thrown
        return {
          ...state,
          auth: false
        };
      }

      return {
        ...state,
        auth: action.payload.data.user.isAuthenticated
      };

    case actionTypes.AUTHENTICATE:
      /* Invalid login credentials. */
      if (action.payload.data.error) {
        return {
          ...state,
          token: "",
          auth: false,
          failedLogin: true
        };
      }

      // Store token in cookie
      setCookie("auth", action.payload.data.user.token);

      return {
        ...state,
        token: action.payload.data.user.token,
        auth: true,
        failedLogin: false
      };

    case actionTypes.USER_SIGN_OUT:
      removeCookie("auth");

      return {
        ...state,
        auth: false
      };

    default:
      return state;
  }
};
export default reducer;
