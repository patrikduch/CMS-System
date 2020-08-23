import React from "react";

import ThemeSettingsContainer from "../../components/admin-app/settings/Theme-Settings-Container";

import * as projectDetailActions from "../../redux/actions/project-detail/project-detail-actions";

// Redux store interface
import StoreType from "../../../typescript/types/shared/redux/StoreType";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";

// Process all neccessary request for SSR
function loadData(store: StoreType) {
  // We must merge multiple promise requests...
  return Promise.all([store.dispatch(projectDetailActions.fetchThemes())]);
}

const ThemesAdminPage: React.FC<IRoutePath> = () => {
  return <ThemeSettingsContainer />;
};

export default {
  component: ThemesAdminPage,
  loadData
};
