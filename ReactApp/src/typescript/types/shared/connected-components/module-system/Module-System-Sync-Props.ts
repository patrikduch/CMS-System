/**
 * @type ModuleSystemSyncProps => Type anotation for modules synchronization component.
 */
type ModuleSystemSyncProps = {
  isEnabled?: boolean;

  children?: React.ReactNode;

  actions: {
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

  socialIconsActions: {
    fetchSocialIcons(): void;
  };
};

export default ModuleSystemSyncProps;
