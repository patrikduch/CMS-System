import React from "react";
import { Container } from "reactstrap";
import PaginationContainer from "../../../common/pagination/Pagination-Container";
import ArticleListContent from "./Article-List-Content";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  articles: [];
  pageCount: number;
  pageId: number;
  changePage: Function;
}

/**
 * @function ArticleListContainer => Main component for rendering list of all article`s entries.
 */
const ArticleListContainer: React.FC<IProps> = ({
  articles,
  changePage,
  pageCount,
  pageId,
}) => {
  return (
    <Container>
      <ArticleListContent articles={articles} />
      <PaginationContainer
        baseUrl="/articles"
        switchPageEvent={changePage}
        totalCount={pageCount}
        currentPageId={pageId}
        pageSize={5}
        isPublicSide
      />
    </Container>
  );
};

export default ArticleListContainer;
