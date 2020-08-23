import React from "react";
import GlobalSettingsFormContainer from "../../redux/containers/admin/settings/Global-Settings-Form-Container";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";

/* Admin settings page. In here you can setup main detail about project. */
const SettingsAdminPage: React.FC<IRoutePath> = () => {
  return (
      <GlobalSettingsFormContainer />
  );
};

export default SettingsAdminPage;
