import React, { useContext, useState, useEffect } from "react";

import ArticleListHeadings from "../../articles/list/Article-List-Headings";
import ArticleListingItem from "../../../common/articles/Article-Listing-Item";

import NoContentBox from "../../../common/boxes/No-Content-Box";

import IRouterConnectedComponentProps from "../../../../../typescript/interfaces/shared/router/IRouter-Connected-Component-Props";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ArticleListContainer from "./Article-List-Container";
import ArticlesListContext from "../../../../contexts/article-pagination/articles.list.context";
import useDidMount from "../../../../hooks/dom/component.didmount.hook";
import Error404DisplayMessage from "../../../common/errors/404/Error404-Display-Message";
import { useLocation } from "react-router-dom";
import { getIdFromQuery } from "../../../../../server/parsers/pagination/getIdFromQuery";


/**
 * @interface IProps =>  Component`s props interface.
 */
interface IProps extends IStyledComponentProps, IRouterConnectedComponentProps {
  articles: [];
  pageCount: number;
  actions: {
    fetchPageCount: (pageSize: number) => void;
    fetchAllArticles: () => void;
    fetchPagedArticles: (pageId: number, pageSize: number) => void;
  };
}

/**
 * @function ArticleList => Render list of articles on public side.
 * @param props  => passed props data.
 */
const ArticleList: React.FC<IProps> = (props: IProps) => {
  /* Context API for storing  article identifier as solution for real-time-data manipulation in paggination component. */
  const articlesListCtx = useContext(ArticlesListContext);

  const location = useLocation();

  useDidMount(() => {
    props.actions.fetchPageCount(5);
    props.actions.fetchPagedArticles(articlesListCtx.pageId, 5);
    articlesListCtx.setTotalCount(props.pageCount);
  });

  useEffect(() => {

    if (
      articlesListCtx.pageId <= 0 ||
      (props.articles.length === 0 &&
        props.pageCount !== 0 &&
        articlesListCtx.pageId > props.pageCount)
    ) {

      articlesListCtx.setHasError();
    }

    if (articlesListCtx.hasError) {

      props.actions.fetchPageCount(5);
      props.actions.fetchPagedArticles(1, 5);
      articlesListCtx.setTotalCount(props.pageCount);

      articlesListCtx.setHasError();

    }

  }, [location])

  /**
   * @function changePage =>  Change of currently selected article page.
   * @param pageId => Numeric identifier of new page.
   */
  const changePage = (pageId: number) => {
    articlesListCtx.setPageId(pageId);
    props.actions.fetchPagedArticles(pageId, 5);
  };

  if (
    articlesListCtx.pageId <= 0 ||
    (props.articles.length === 0 &&
      props.pageCount !== 0 &&
      articlesListCtx.pageId > props.pageCount)
  ) {

    return <Error404DisplayMessage errorMessage="Článek nenalezen" />;
  }

  return (
    <ArticleListingItem>
      {props.articles.length == 0 ? (
        <NoContentBox />
      ) : (
        <>
          <ArticleListHeadings />
          <ArticleListContainer
            articles={props.articles}
            changePage={changePage}
            pageCount={props.pageCount}
            pageId={articlesListCtx.pageId}
          />
        </>
      )}
    </ArticleListingItem>
  );
};

export default ArticleList;
