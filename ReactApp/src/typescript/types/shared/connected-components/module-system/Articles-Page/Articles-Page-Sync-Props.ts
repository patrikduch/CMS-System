/**
 * @type ArticleSyncPageProps => Type anotation for Articles pagee synchronization component.
 */
type ArticlesSyncPageProps = {
  isEnabled?: boolean;
  children?: React.ReactNode;

  articlesSystemActions: {
    fetchPagedArticles(pageId: number, pageSize: number): void;
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
};

export default ArticlesSyncPageProps;
