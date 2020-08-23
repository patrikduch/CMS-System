import React from "react";
import { ArticlesAdminContainer } from "../../../../redux/containers/article-system/articles/Articles-Container";
import IRoutePath from "../../../../../typescript/interfaces/shared/router/IRoutePath";

/**
 * @function ArticlesAdminPage => Nested page component that renders list of articles..
 */
const ArticlesAdminPage: React.FC<IRoutePath> = () => {
  return (
    <>
      <ArticlesAdminContainer />
    </>
  );
};

export default ArticlesAdminPage;
