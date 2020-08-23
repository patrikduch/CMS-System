/**
 * @type Error404rops => Type anotation for Not found page (404).
 */
type Error404Props = {
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

export default Error404Props;
