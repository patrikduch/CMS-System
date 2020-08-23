import React from "react";
import PageTitle from "../../../../components/common/title/Page-Title";
import { Container } from "reactstrap";

import { RouteConfig, renderRoutes } from "react-router-config";
import Helmet from "react-helmet";
import IRoutePath from "../../../../../typescript/interfaces/shared/router/IRoutePath";
import TextUrlLink from "../../../../components/common/links/Text-Url-Link";
import { ArticleAddContainer } from "../../../../redux/containers/article-system/articles/Article-Add-Container";

/**
 * @function ArticlesNewEntryPage => Page root component for adding new articles.
 * @param route
 */
const ArticlesNewEntryPage: React.FC<IRoutePath> = ({ route }: RouteConfig) => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Administrace </title>
        <meta name="title" content="Bakalářská práce | Administrace" />
      </Helmet>

      <Container>
        <TextUrlLink
          url="/admin/articlepage/articles"
          title="Zpět na všechny články"
        />
        <PageTitle>Vytvoření nového článku</PageTitle>
        <ArticleAddContainer />
      </Container>

      {renderRoutes(route.routes)}
    </>
  );
};

export default {
  component: ArticlesNewEntryPage,
};
