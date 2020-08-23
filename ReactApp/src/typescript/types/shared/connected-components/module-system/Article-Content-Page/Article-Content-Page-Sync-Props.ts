/**
 * @type ArticleContentSyncPageProps => Type anotation for Article content page synchronization component.
 */
type ArticleContentSyncPageProps = {
  item: {
    articleId: number;
  };
  isEnabled?: boolean;

  children?: React.ReactNode;

  fetchArticle(articleId: number): void;

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

export default ArticleContentSyncPageProps;
