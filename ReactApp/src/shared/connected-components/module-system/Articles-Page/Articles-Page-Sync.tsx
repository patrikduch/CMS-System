import React, { useContext } from "react";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import ArticlesSyncPageProps from "../../../../typescript/types/shared/connected-components/module-system/Articles-Page/Articles-Page-Sync-Props";
import ArticlesListContext from "../../../contexts/article-pagination/articles.list.context";
import { useInterval } from "../../../hooks/timing/interval.hook";
import { getIdFromQuery } from "../../../../server/parsers/pagination/getIdFromQuery";

/**
 * @function ArticlesPageSync => Component that is responsible for Articles  page interactivity updates.
 * @param actions => Redux actions responsible for UI updates.
 * @param children => Nested JSX elements that are nested into this HOC.
 */
const ArticlesPageSync: React.FC<ArticlesSyncPageProps> = ({
  articlesSystemActions,
  children,
  featureSystemActions,
  isEnabled,
  moduleSystemActions,
  ownerInfoActions,
  projectDetailActions,
}) => {
  const articlesListContext = useContext(ArticlesListContext);

  useInterval(() => {
    if (isEnabled) {
      articlesSystemActions.fetchPagedArticles(articlesListContext.pageId, 5);
      articlesSystemActions.fetchPageCount(5),
        moduleSystemActions.fetchModulesFeatures();
      moduleSystemActions.synchronizeModuleFeatures();
      featureSystemActions.fetchEnabledFeatures();
      projectDetailActions.fetchProjectDetail();
      ownerInfoActions.fetchOwnerInfoDetails();
    }
  }, 5000);

  return <>{children}</>;
};

export default ArticlesPageSync;
