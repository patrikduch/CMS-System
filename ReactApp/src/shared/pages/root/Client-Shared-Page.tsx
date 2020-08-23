import React from "react";
/* Tyoe-checking */
import StoreType from "../../../typescript/types/shared/redux/StoreType";

/* Redux requirements */
import { fetchProjectDetail } from "../../redux/actions/project-detail/project-detail-actions";
import { RouteConfig, renderRoutes } from "react-router-config";
import { fetchOwnerInfoDetails } from "../../redux/actions/owner-info/owner-info-actions";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";

/**
 * @function loadData => Process all neccessary requests for SSR-
 * @param store => Access to Redux store.
 */
function loadData(store: StoreType) {
  // We must merge multiple promise requests...
  return Promise.all([
    store.dispatch(fetchProjectDetail()),
    store.dispatch(fetchOwnerInfoDetails()),
  ]);
}

/**
 * @function ClientSharedPage => Parent page component to dispatch shared redux actions.
 * @param route => Route object that contains all nested routes.
 */
const ClientSharedPage: React.FC<IRoutePath> = ({ route }: RouteConfig) => {
  return <>{renderRoutes(route.routes)}</>;
};

export default {
  component: ClientSharedPage,
  loadData,
};
