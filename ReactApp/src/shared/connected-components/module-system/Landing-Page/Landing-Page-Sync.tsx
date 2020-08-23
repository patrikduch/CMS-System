import React from "react";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import LandingPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Landing-Page/Landing-Page-Sync-Props";
import { useInterval } from "../../../hooks/timing/interval.hook";

/**
 * @function LandingPageSync => Component that is responsible for Landing page interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const LandingPageSync: React.FC<LandingPageSyncProps> = ({
  articlesSystemActions,
  featureSystemActions,
  moduleSystemActions,
  projectDetailActions,
  socialIconsActions,
  ownerInfoActions,
  children,
  isEnabled,
}) => {
  useDidMount(() => {
    articlesSystemActions.fetchRecentArticles();
    socialIconsActions.fetchSocialIcons();
  });

  useInterval(() => {
    if (isEnabled) {
      /* Dispatch only if synchronization is enabled. Props isEnabled is passed with value "true". */
      socialIconsActions.fetchSocialIcons();
      articlesSystemActions.fetchRecentArticles();
      moduleSystemActions.fetchModulesFeatures();
      moduleSystemActions.synchronizeModuleFeatures();
      featureSystemActions.fetchEnabledFeatures();
      projectDetailActions.fetchProjectDetail();
      ownerInfoActions.fetchOwnerInfoDetails();
    }
  }, 5000);

  return <>{children}</>;
};

export default LandingPageSync;
