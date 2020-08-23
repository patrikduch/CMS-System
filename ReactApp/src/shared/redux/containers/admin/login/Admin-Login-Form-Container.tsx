import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { authenticate } from "../../../actions/admin/admin-login/admin-login-actions";

/* Component to connect. */
import AdminLoginForm from "../../../../connected-components/admin/admin-login/Admin-Login-Form";

/* Type checking. */
import AdminLoginStateType from "../../../../../typescript/types/shared/redux/containers/admin/login/Admin-Login-State-Type";

import { getAdminLoginDetails } from "../../../selectors/admin/login/admin-login-selectors";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: AdminLoginStateType) => {
  return {
    adminLogin: getAdminLoginDetails(state),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      authenticate: bindActionCreators(authenticate, dispatch),
    },
  };
};

/**
 *  Creation of Redux connected component that enables administrators to sign in.
 */
const AdminLoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLoginForm);

export { AdminLoginFormContainer };
