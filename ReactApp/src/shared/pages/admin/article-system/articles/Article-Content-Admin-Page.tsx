import React, { useState } from "react";
import { getParamId } from "../../../../helpers/url/get-param-id";
import ArticleEditContainer from "../../../../components/admin-app/content/article-system/article/update/Article-Edit-Container";

import { useLocation, useHistory } from "react-router-dom";

import StoreType from "../../../../../typescript/types/shared/redux/StoreType";

import { fetchArticle } from "../../../../redux/actions/articles/articles-actions";
import { fetchModulesFeatures } from "../../../../redux/actions/module-system/module-system-actions";

import { ArticleEditContentContainer } from "../../../../redux/containers/article-system/articles/Article-Content-Container";

/**
 * @function ArticleContentAdminPage => Component that for rendering article detail (manipulation its content).
 */
const ArticleContentAdminPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const urlEnd = location.pathname.replace("/admin/articles/", "");

  const [articleId] = useState(getParamId(urlEnd));

  const regex = new RegExp("^[1-9][0-9]*$");

  if (articleId == null || !regex.test(urlEnd)) {
    history.push("/admin/error");
  }

  return <ArticleEditContentContainer articleId={articleId} />;
};

/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store  => Redux store server instance.
 * @param payload  => Data that has been passed with patrticular request.
 */
const loadData = (
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
    path: string;
  }
) => {
  const articleDetailId = getParamId(payload.path);

  return Promise.all([
    store.dispatch(fetchModulesFeatures()),
    store.dispatch(fetchArticle(articleDetailId)),
  ]);
};

export default {
  component: ArticleContentAdminPage,
  loadData,
};
