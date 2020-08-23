import React from "react";
import { useInterval } from "../../../hooks/timing/interval.hook";
import GalleryPageSyncProps from "../../../../typescript/types/shared/connected-components/module-system/Gallery-Page/Gallery-Page-Sync-Props";


/**
 * @function GalleryPageSync => Component that is responsible for Gallery page interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const GalleryPageSync: React.FC<GalleryPageSyncProps> = ({
  children,
  item,
  isEnabled,
  gallerySystemAction,
  moduleSystemActions,
  featureSystemActions,
  projectDetailActions,
  ownerInfoActions,
}) => {
  useInterval(() => {
    if (isEnabled) {
      if (item.galleryPageId != null) {
        gallerySystemAction.fetchPagedPhotos(item.galleryPageId, 20);
      }

      moduleSystemActions.fetchModulesFeatures();
      moduleSystemActions.synchronizeModuleFeatures();
      featureSystemActions.fetchEnabledFeatures();
      projectDetailActions.fetchProjectDetail();
      ownerInfoActions.fetchOwnerInfoDetails();
    }
  }, 5000);

  return <>{children}</>;
};

export default GalleryPageSync;
