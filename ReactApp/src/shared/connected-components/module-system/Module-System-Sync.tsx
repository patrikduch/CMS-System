import React from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import ModuleSystemSyncProps from "../../../typescript/types/shared/connected-components/module-system/Module-System-Sync-Props";

/**
 * @function ModuleSystemSync => Component that is responsible for interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const ModuleSystemSync: React.FC<ModuleSystemSyncProps> = ({
  actions,
  featureSystemActions,
  projectDetailActions,
  socialIconsActions,
  ownerInfoActions,
  children,
  isEnabled,
}) => {
  useDidMount(() => {
    /* Necessary request call when we are on different page and we navigate back via client React Router. */
    socialIconsActions.fetchSocialIcons();

    if (isEnabled) {
      /* Perform only when this feature is enabled. */
      actions.fetchModulesFeatures();

      setInterval(() => {
        actions.synchronizeModuleFeatures();
        featureSystemActions.fetchEnabledFeatures();
        projectDetailActions.fetchProjectDetail();
        ownerInfoActions.fetchOwnerInfoDetails();
      }, 5000);
    }
  });

  return <>{children}</>;
};

export default ModuleSystemSync;
