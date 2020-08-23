import React from "react";
import { Container } from "reactstrap";
import PageTitle from "../../../components/common/title/Page-Title";

import { TopArticlesContainer } from "../../../redux/containers/article-system/articles/Articles-Container";

/**
 * @function TopArticlesModule => Module component  that displays top articles in the dashboard page.
 */
const TopArticlesModule: React.FC = () => {
  return (
    <Container>
      <PageTitle isPublicSide>Nejnovější články</PageTitle>
      <TopArticlesContainer />
    </Container>
  );
};

export default TopArticlesModule;
