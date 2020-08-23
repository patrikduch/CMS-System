import React, { useState } from "react";
import Helmet from "react-helmet";

import StoreType from "../../../typescript/types/shared/redux/StoreType";

// Redux actions to dispatch
import { fetchSocialIcons } from "../../redux/actions/social-icons/social-icons-actions";

import HeaderFooterComposer from "../../hoc/Header-Footer-Composer";
import { ModuleSystemBodyContainer } from "../../redux/containers/module-system/Module-System-Container";
import { fetchModulesFeatures } from "../../redux/actions/module-system/module-system-actions";
import { fetchRecentArticles } from "../../redux/actions/articles/articles-actions";

import { LandingPageContainerSync } from "../../redux/containers/module-system/Module-System-Sync-Container";
import NotificationSystemContext from "../../contexts/notification-system/notification-system.context";


/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store => Access to Redux store.
 */
function loadData(store: StoreType) {
  return Promise.all([
    store.dispatch(fetchModulesFeatures()),
    store.dispatch(fetchSocialIcons()),
    store.dispatch(fetchRecentArticles()),
  ]);
}
/**
 * @function LandingPage => Page component for root page of  web application.
 */
const LandingPage: React.FC = () => {
  const [notificationVisibility, setNotificationVisibility] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  /**
   * @function displayNotification => Display notification on the top of all body modules.
   * @param message
   */
  const displayNotification = (message: string) => {
    setNotificationMessage(message);
    setNotificationVisibility(true);
  };

  /**
   * @function resetNotificationState => Reset state of current notification.
   */
  const resetNotificationState = () => {
    setNotificationMessage("");
    setNotificationVisibility(false);
  };

  return (
    <NotificationSystemContext.Provider
      value={{
        message: notificationMessage,
        isVisible: notificationVisibility,
        displayNotification,
        resetNotificationState,
      }}
    >
      <LandingPageContainerSync isEnabled={true}>
        <HeaderFooterComposer>
          <>
            <Helmet>
              <title>Bakalářská práce | Index </title>
              <meta name="title" content="Bakalářská práce | Index" />
            </Helmet>
          </>
          <ModuleSystemBodyContainer />
        </HeaderFooterComposer>
      </LandingPageContainerSync>
    </NotificationSystemContext.Provider>
  );
};

export default {
  component: LandingPage,
  loadData,
};
