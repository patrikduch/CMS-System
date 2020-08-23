import { createSelector } from "reselect";
import AdminAuthStateType from "../../../../../typescript/types/shared/redux/containers/admin/login/Admin-Auth-State-Type";

const adminAuthState = (state: AdminAuthStateType) => state;

/**
 * @function getAdminAuth => Get cacheable admin auth details.
 */
const getAdminAuth = createSelector([adminAuthState], (a) => a.adminlogin);

export { getAdminAuth };
