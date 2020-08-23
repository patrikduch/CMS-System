import React from "react";
import ArticleContentSyncPageProps from "../../../../typescript/types/shared/connected-components/module-system/Article-Content-Page/Article-Content-Page-Sync-Props";

import { useInterval } from "../../../hooks/timing/interval.hook";

/**
 * @function ArticleContentPageSync => Component that is responsible for Article content page interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const ArticleContentPageSync: React.FC<ArticleContentSyncPageProps> = ({
  children,
  fetchArticle,
  featureSystemActions,
  isEnabled,
  item,
  moduleSystemActions,
  ownerInfoActions,
  projectDetailActions,
}) => {
  useInterval(() => {
    if (isEnabled) {
      fetchArticle(item.articleId);
      moduleSystemActions.fetchModulesFeatures();
      moduleSystemActions.synchronizeModuleFeatures();
      featureSystemActions.fetchEnabledFeatures();
      projectDetailActions.fetchProjectDetail();
      ownerInfoActions.fetchOwnerInfoDetails();
    }
  }, 5000);

  return <>{children}</>;
};

export default ArticleContentPageSync;
