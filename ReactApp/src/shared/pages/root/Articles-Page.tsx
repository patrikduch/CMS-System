import * as articlesActions from "../../redux/actions/articles/articles-actions";
import * as featureList from "../../../lib/server/features/Features-List";

import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import StoreType from "../../../typescript/types/shared/redux/StoreType";
import HeaderFooterComposer from "../../hoc/Header-Footer-Composer";

import FeatureSystemContainer from "../../redux/containers/feature-system/Feature-System-Checker-Container";
import { renderRoutes } from "react-router-config";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";
import { ArticlesContainerSync } from "../../redux/containers/module-system/Module-System-Sync-Container";
import { ArticlesContainer } from "../../redux/containers/article-system/articles/Articles-Container";

/* Context API */
import ArticlesListContext from "../../contexts/article-pagination/articles.list.context";
import { useLocation, useHistory } from "react-router-dom";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";
import NotFoundPage from "../errors/public-side/Not-Found-Page";
import { fetchModulesFeatures } from "../../redux/actions/module-system/module-system-actions";
import { containsOnlyNumbers } from "../../helpers/regex/contains-only-numbers";

/**
 * @function ArticlesPage => Page component`s to display articles.
 */
const ArticlesPage: React.FC<IRoutePath> = ({ route }) => {
  /* Get History API object. */
  const history = useHistory();

  /* Get location object from History API. */
  const location = useLocation();

  /* Local state that is propagated into nested components via Context API. */
  const [articlePageId, setArticlePageId] = useState(
    location.search.length === 0 ? 1 : getIdFromQuery(location.search)
  );
  /* Error flag for articles page. */
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setArticlePageId(
      location.search.length === 0 ? 1 : getIdFromQuery(location.search)
    );
  }, [location]);

  const [totalCount, setTotalCount] = useState(0);

  const togglePageId = (pageId: number) => {
    if (isNaN(pageId)) {
      setArticlePageId(1);
    } else {
      setArticlePageId(pageId);
    }
  };

  /**
   * @function toggleErrorState => Toggling current error flag of "Articles" page.
   */
  const toggleErrorState = () => {
    setHasError(!hasError);
  }

  if (articlePageId == null) {
    history.push("/error");
    return null; // Prevent flickering effect due the change to 404 error page.
  }

  return (
    <ArticlesListContext.Provider
      value={{
        pageId: articlePageId,
        totalCount,
        setPageId: togglePageId,
        setTotalCount,
        hasError,
        setHasError: toggleErrorState
      }}
    >
      <ArticlesContainerSync isEnabled={true}>
        <FeatureSystemContainer
          isPage
          code={featureList.ARTICLE_SYSTEM_FEATURE}
        >
          <HeaderFooterComposer>
            <>
              <Helmet>
                <title>Bakalářská práce | Články </title>
                <meta name="title" content="Bakalářská práce | Články" />
              </Helmet>
              <ArticlesContainer />

              {renderRoutes(route.routes)}
            </>
          </HeaderFooterComposer>
        </FeatureSystemContainer>
      </ArticlesContainerSync>
    </ArticlesListContext.Provider>
  );
};

/**
 * @function loadData => Process all neccessary request for SSR
 * @param store => Store reference for invoking dispatch on store object.
 * @param payload => Passed optional payLoad in this case is passed pageId, but every loadData function can have different structure of this object.
 */
function loadData(
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
  }
) {
  let pageId: number | null = 1;

  // No params were filled
  if (payload.queryString.pageId != undefined) {
    pageId = containsOnlyNumbers(`${payload.queryString.pageId}`);
  }

  const promiseArray = [];
  promiseArray.push(store.dispatch(fetchModulesFeatures()));

  if (pageId !== null) {
    if (pageId > 0) {
      promiseArray.push(
        store.dispatch(articlesActions.fetchPagedArticles(pageId, 5))
      );
      promiseArray.push(store.dispatch(articlesActions.fetchPageCount(5)));
    }
  }

  return Promise.all(promiseArray);
}

export default {
  component: ArticlesPage,
  loadData,
};
