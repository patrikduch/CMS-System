import React from "react";
import { Container } from "reactstrap";
import PageTitle from "../../../common/title/Page-Title";

/**
 * @function ArticleListHeadings => Component that renders top of article`s listing.
 */
const ArticleListHeadings: React.FC = () => {
  return (
    <Container>
      <PageTitle isPublicSide>Články</PageTitle>
    </Container>
  );
};

export default ArticleListHeadings;
