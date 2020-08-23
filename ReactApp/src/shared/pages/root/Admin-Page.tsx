import React, { Dispatch } from "react";
import { Helmet } from "react-helmet";
import { AdminLoginAuthContainer } from "../../redux/containers/admin/login/Admin-Login-Auth-Container";

// Nested routes import dependencies
import { renderRoutes, RouteConfig } from "react-router-config";

// Redux store interface
import StoreType, {
  DispatchObj,
} from "../../../typescript/types/shared/redux/StoreType";

import * as adminActions from "../../redux/actions/admin/admin-login/admin-login-actions";
import * as projectDetailActions from "../../redux/actions/project-detail/project-detail-actions";
import * as summaryStatsActions from "../../redux/actions/summary-stats/summary-stats-actions";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";


/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store => Access to Redux store.
 */
function loadData(store: StoreType) {
  return Promise.all([
    store.dispatch(summaryStatsActions.fetchDashboardStatistics()),
    store.dispatch(projectDetailActions.fetchProjectDetail()),
    store.dispatch(adminActions.isUserAuthenticated() as DispatchObj),
  ]);
}

/**
 * @function AdminPage => Root page component that handels admin auth process.
 * @param param0
 */
const AdminPage: React.FC<IRoutePath> = ({ route }: RouteConfig) => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Administrace </title>
        <meta name="title" content="Bakalářská práce | Administrace" />
      </Helmet>

      <AdminLoginAuthContainer authRoutes={renderRoutes(route.routes)} />
    </>
  );
};

export default {
  component: AdminPage,
  loadData,
};
