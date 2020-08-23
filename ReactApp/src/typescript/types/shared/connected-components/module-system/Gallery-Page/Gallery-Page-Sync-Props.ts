/**
 * @type GalleryPageSyncProps => Type anotation for Articles pagee synchronization component.
 */
type GalleryPageSyncProps = {
  isEnabled?: boolean;
  children?: React.ReactNode;

  item: {
    galleryPageId: number | null;
  };

  gallerySystemAction: {
    fetchPagedPhotos(pageId: number, pageSize: number): void;
  };

  moduleSystemActions: {
    synchronizeModuleFeatures(): void;
    fetchModulesFeatures(): void;
  };

  projectDetailActions: {
    fetchProjectDetail(): void;
  };

  ownerInfoActions: {
    fetchOwnerInfoDetails(): void;
  };

  featureSystemActions: {
    fetchEnabledFeatures(): void;
  };
};

export default GalleryPageSyncProps;
