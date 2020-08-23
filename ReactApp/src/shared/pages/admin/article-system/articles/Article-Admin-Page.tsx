import React from "react";
import Helmet from "react-helmet";

import * as articleActions from "../../../../redux/actions/articles/articles-actions";

/* Type checking */
import StoreType from "../../../../../typescript/types/shared/redux/StoreType";
import { RouteConfig, renderRoutes } from "react-router-config";
import IRoutePath from "../../../../../typescript/interfaces/shared/router/IRoutePath";
import { containsOnlyNumbers } from "../../../../helpers/regex/contains-only-numbers";

/**
 * @function ArticleAdminPage => Page component to handle articles in web administratio
 * @param route => React router config object.
 */
const ArticleAdminPage: React.FC<IRoutePath> = ({ route }: RouteConfig) => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Administrace </title>
        <meta name="title" content="Bakalářská práce | Administrace" />
      </Helmet>

      {renderRoutes(route.routes)}
    </>
  );
};

/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store  => Redux store server instance.
 * @param payload  => Data that has been passed with patrticular request.
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

  if (payload.queryString.pageId != undefined) {
    pageId = containsOnlyNumbers(`${payload.queryString.pageId}`);
  }

  if (pageId !== null) {
    if (pageId > 0) {
      /* Dispatch needed actions to render articles. */
      return Promise.all([
        store.dispatch(articleActions.fetchPagedArticles(pageId, 5)),
        store.dispatch(articleActions.fetchPageCount(5)),
      ]);
    }
  }
}

export default {
  component: ArticleAdminPage,
  loadData,
};
