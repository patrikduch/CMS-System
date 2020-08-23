/**
 * @type ErrorPageSyncProps => Type anotation for Error page synchronization component.
 */
type ErrorPageSyncProps = {
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

export default ErrorPageSyncProps;
