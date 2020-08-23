import { connect } from "react-redux";
import {
  signout,
  isUserAuthenticated,
} from "../../../actions/admin/admin-login/admin-login-actions";
import { bindActionCreators, Dispatch } from "redux";

/*
  Component where state and actions are passed.
*/
import AdminLoginAuth from "../../../../connected-components/admin/admin-login/Admin-Login-Auth";

/* Reselect selectors. */
import { getAdminAuth } from "../../../selectors/admin/login/admin-auth-selectors";
import AdminAuthStateType from "../../../../../typescript/types/shared/redux/containers/admin/login/Admin-Auth-State-Type";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: AdminAuthStateType) => {
  return {
    adminLogin: getAdminAuth(state),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      signout: bindActionCreators(signout, dispatch),
      isUserAuthenticated: bindActionCreators(isUserAuthenticated, dispatch),
    },
  };
};

/**
 * Creation of Redux connected component for handling admin auth.
 */
const AdminLoginAuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLoginAuth);

export { AdminLoginAuthContainer };
