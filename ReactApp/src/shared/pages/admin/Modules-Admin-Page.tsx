import React from "react";
import * as moduleSystemActions from "../../redux/actions/module-system/module-system-actions";
import StoreType from "../../../typescript/types/shared/redux/StoreType";
import { containsOnlyNumbers } from "../../helpers/regex/contains-only-numbers";
import { ModuleAdminListContainer } from "../../redux/containers/module-system/Modules-List-Container";

/**
 * @function ModulesAdminPage => Root page component for module management.
 */
const ModulesAdminPage: React.FC = () => {
  return <ModuleAdminListContainer />;
};

/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store  => Redux store server instance.
 * @param payload  => Data that has been passed with patrticular request.
 */
function loadData(
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
  }
) {
  let pageId: number | null = 1;

  if (payload.queryString.pageId != undefined) {
    pageId = containsOnlyNumbers(`${payload.queryString.pageId}`);
  }

  if (pageId !== null) {
    if (pageId > 0) {
      return Promise.all([
        store.dispatch(
          moduleSystemActions.fetchPaggedFeatureModules(pageId, 5)
        ),
      ]);
    }
  }
}

export default {
  component: ModulesAdminPage,
  loadData,
};
