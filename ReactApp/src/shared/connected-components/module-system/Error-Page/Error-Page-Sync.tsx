import React from "react";

import { useInterval } from "../../../hooks/timing/interval.hook";
import ErrorPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Error-Page/Error-Page-Sync-Props";
import useDidMount from "../../../hooks/dom/component.didmount.hook";

/**
 * @function ErrorPageSync => Component that is responsible for Error page interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const ErrorPageSync: React.FC<ErrorPageSyncProps> = ({
  children,
  featureSystemActions,
  isEnabled,
  moduleSystemActions,
  ownerInfoActions,
  projectDetailActions,
}) => {
  useDidMount(() => {
    moduleSystemActions.fetchModulesFeatures();
    moduleSystemActions.synchronizeModuleFeatures();
    featureSystemActions.fetchEnabledFeatures();
    projectDetailActions.fetchProjectDetail();
    ownerInfoActions.fetchOwnerInfoDetails();
  });

  useInterval(() => {
    if (isEnabled) {
      moduleSystemActions.fetchModulesFeatures();
      moduleSystemActions.synchronizeModuleFeatures();
      featureSystemActions.fetchEnabledFeatures();
      projectDetailActions.fetchProjectDetail();
      ownerInfoActions.fetchOwnerInfoDetails();
    }
  }, 5000);

  return <>{children}</>;
};

export default ErrorPageSync;
