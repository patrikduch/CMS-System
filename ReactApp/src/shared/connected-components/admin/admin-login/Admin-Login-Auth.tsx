import React, { useEffect, ReactNode } from "react";
import { AdminLoginFormContainer } from "../../../redux/containers/admin/login/Admin-Login-Form-Container";

import DashboardContainer from "../../../components/admin-app/dashboard/DashBoard-Container";

/**
 * @interface IProps => Component`s props interface.
 */
interface IAdminLoginAuthProps {
  actions: {
    isUserAuthenticated: Function; // Mapped redux action to fetch authentication status
    signout: () => void; // Mapped redux action for invoking user logout
  };

  authRoutes: ReactNode; // Passed  React elements that will be rendered on successfull authentication

  adminLogin: {
    // Mapped property fetched from Redux store
    auth: boolean; // is user authenticated ?
  };
}

/**
 * @function AdminLoginAuth => Admin verification component which handels authorization and authentification.
 * @param actions => All Redux admin actions.
 * @param adminLogin = Redux state that stores information about auth process.
 * @param authRoutes => Routes where will be user redirect after success auth.
 */
const AdminLoginAuth: React.FC<IAdminLoginAuthProps> = ({
  actions,
  adminLogin,
  authRoutes,
}) => {
  /* Simulation of component did mount life-cycle */
  useEffect(() => {
    actions.isUserAuthenticated();
  }, []);

  if (adminLogin.auth) {
    return (
      <DashboardContainer signout={actions.signout} authRoutes={authRoutes} />
    );
  } else {
    /* Login process */
    return <AdminLoginFormContainer />;
  }
};

export default AdminLoginAuth;
