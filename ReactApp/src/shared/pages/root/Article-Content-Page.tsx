import React, { useState } from "react";
import HeaderFooterComposer from "../../hoc/Header-Footer-Composer";
import Helmet from "react-helmet";

import * as articleActions from "../../redux/actions/articles/articles-actions";
import * as featureList from "../../../lib/server/features/Features-List";

import StoreType from "../../../typescript/types/shared/redux/StoreType";
import FeatureSystemContainer from "../../redux/containers/feature-system/Feature-System-Checker-Container";

import { ArticleContentContainer } from "../../redux/containers/article-system/articles/Article-Content-Container";

/* Helpers */
import { getParamId } from "../../helpers/url/get-param-id";
import { ArticleContentContainerSync } from "../../redux/containers/module-system/Module-System-Sync-Container";

import { useLocation } from "react-router";
import { fetchModulesFeatures } from "../../redux/actions/module-system/module-system-actions";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import { getDigits } from "../../helpers/regex/get-digits";


/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store => Store reference for invoking dispatch on store object.
 * @param payload => Passed optional payLoad in this case is passed pageId, but every loadData function can have different structure of this object.
 */
function loadData(
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
    path: string;
  }
) {
  const articleId = getParamId(payload.path.replace("/articles/", ""));

  const promiseArray = [];

  if (articleId != null) {
    promiseArray.push(store.dispatch(articleActions.fetchArticle(articleId)));
  }

  promiseArray.push(store.dispatch(fetchModulesFeatures()));

  return Promise.all(promiseArray);
}

/**
 * @function ArticleContentPage => Page componennt that represents article detail.
 */
const ArticleContentPage: React.FC = () => {
  const location = useLocation();

  const [isMounted, setIsMounted] = useState(false);

  const inputString = location.pathname.replace("/articles/", "");
  const articleId = getDigits(inputString);

  useDidMount(() => {
    setIsMounted(true);
  });

  if (!isMounted) return null;

  return (
    <ArticleContentContainerSync
      item={{ articleId: articleId as number }}
      isEnabled={true}
    >
      <FeatureSystemContainer isPage code={featureList.ARTICLE_SYSTEM_FEATURE}>
        <HeaderFooterComposer>
          <>
            <Helmet>
              <title>{`Bakalářská práce | Id článku: ${articleId}`} </title>
              <meta
                name="title"
                content={`Bakalářská práce | Id článku: ${articleId}`}
              />
            </Helmet>

            <ArticleContentContainer />
          </>
        </HeaderFooterComposer>
      </FeatureSystemContainer>
    </ArticleContentContainerSync>
  );
};

export default {
  component: ArticleContentPage,
  loadData,
};
