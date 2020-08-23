/**
 * @type LandingPageSyncProps => Type anotation for landing page synchronization component.
 */
type LandingPageSyncProps = {
  isEnabled?: boolean;

  children?: React.ReactNode;

  articlesSystemActions: {
    fetchPagedArticles(pageId: number, pageSize: number): void;
    fetchRecentArticles(): void;
    fetchPageCount(pageSize: number): void;
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

  socialIconsActions: {
    fetchSocialIcons(): void;
  };
};

export default LandingPageSyncProps;
