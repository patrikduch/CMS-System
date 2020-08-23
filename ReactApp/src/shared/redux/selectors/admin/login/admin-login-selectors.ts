import { createSelector } from "reselect";
import AdminLoginStateType from "../../../../../typescript/types/shared/redux/containers/admin/login/Admin-Login-State-Type";

const adminLoginState = (state: AdminLoginStateType) => state;

/**
 * @function getAdminLoginDetails => Get cacheable admin login details.
 */
const getAdminLoginDetails = createSelector(
  [adminLoginState],
  (a) => a.adminlogin
);

export { getAdminLoginDetails };
