import ArticleListAddItem from "../create/Article-List-Add-Item";

import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import PaginationContainer from "../../../../../common/pagination/Pagination-Container";
import { useHistory, useLocation } from "react-router-dom";
import { getIdFromQuery } from "../../../../../../../server/parsers/pagination/getIdFromQuery";
import IStyledComponentProps from "../../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

import ArticleListTableBody from "./Article-List-Table-Body";
import useDidMount from "../../../../../../hooks/dom/component.didmount.hook";
import PageTitle from "../../../../../common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  articles: [];
  pageCount: number;
  actions: {
    fetchPageCount: (pageSize: number) => void;
    fetchAllArticles: () => void;
    fetchPagedArticles: (pageId: number, pageSize: number) => void;
    removeArticle: (articleId: number, pageId: number) => void;
  };
}

/**
 * @function ArticleList => Display list of articles on public side.
 * @param props => Properties that are passed into ArticleList component.
 */
const ArticleList: React.FC<IProps> = (props: IProps) => {
  /* Get current history object. */
  const history = useHistory();

  const location = useLocation();

  const [isMounted, setIsMounted] = useState(false);

  const [hasError, setHasError] = useState(false);

  /* Get passed page identifier from query string. */
  const [pageId, setPageId] = useState(getIdFromQuery(history.location.search));

  /**
   * @function removeArticle => Remove specified article by its identifier and page identifier.
   * @param articleId => Primary key of article item.
   * @param pageId => Page identifier for persisting currently choosen page.
   */
  const removeArticle = (articleId: number) => {
    props.actions.removeArticle(articleId, pageId === null ? 1 : pageId);
    setPageId(pageId);
    history.push(
      `/admin/articlepage/articles?pageId=${pageId === null ? 1 : pageId}`
    );

    /* Fetch updated items for currently selected page. */
    props.actions.fetchPagedArticles(
      pageId === null ? 1 : pageId === null ? 1 : pageId,
      5
    );
  };

  /**
   * @function changePage => Change currently selected page.
   * @param pageId => Identifier of newly selected page.
   */
  const changePage = (pageId: number) => {
    setPageId(pageId);
    props.actions.fetchPagedArticles(pageId, 5);
  };

  useDidMount(() => {
    props.actions.fetchPageCount(5);

    debugger;

    /*  Recovery from  404 error page on client side. */
    if (location.pathname == "/admin/error") {
      history.push("/admin/articlepage/articles");
    }

    if (location.search.length === 0) {
      setPageId(1);
      props.actions.fetchPagedArticles(1, 5);
    } else {
      const pageId = getIdFromQuery(location.search);

      if (pageId != null) {
        setPageId(pageId);
        props.actions.fetchPagedArticles(pageId, 5);
      } else {
        setPageId(1);
      }
    }

    setIsMounted(true);
  });

  useEffect(() => {
    debugger;

    props.actions.fetchPageCount(5);
    props.actions.fetchPagedArticles(pageId === null ? 1 : pageId, 5);
  }, [location]);

  useEffect(() => {
    /* Update current list if items needs to be reorganized. */
    props.actions.fetchPageCount(5);

    if (props.articles.length < 5 && pageId != props.pageCount) {
      props.actions.fetchPagedArticles(pageId === null ? 1 : pageId, 5);
    }

    if (props.articles.length == 0) {
      /* When we delete last items => we do not want to decrease page number from initial "1" to zero */
      if (pageId == 1) return;

      setPageId(pageId === null ? 1 : pageId - 1);
      history.push(
        `/admin/articlepage/articles?pageId=${pageId === null ? 1 : pageId - 1}`
      );
      props.actions.fetchPagedArticles(pageId === null ? 1 : pageId - 1, 5);
    }
  }, [props.articles]);

  useEffect(() => {
    if (props.articles.length == 0 && location.search.length > 0) {
      setHasError(false);
    }

    if (pageId == null && location.search.length > 0) {
      setHasError(true);
    }
  }, [pageId, props.articles]);

  if (!isMounted) return null;

  if (hasError) {
    history.push("/admin/error");
  }

  return (
    <Container className={props.className}>
      <PageTitle>Správa článků</PageTitle>
      <ArticleListAddItem />
      <Table>
        <thead>
          <tr>
            <th style={{ width: "8.6%" }}>Název</th>
            <th style={{ width: "25.6%" }}>Datum vytvoření</th>
          </tr>
        </thead>
        <tbody>
          <ArticleListTableBody
            pageId={pageId === null ? 1 : pageId}
            articles={props.articles}
            removeArticle={removeArticle}
          />
        </tbody>
      </Table>
      <PaginationContainer
        baseUrl="articles"
        totalCount={props.pageCount}
        currentPageId={pageId === null ? 1 : pageId}
        switchPageEvent={changePage}
        pageSize={5}
      />
    </Container>
  );
};

export default ArticleList;
