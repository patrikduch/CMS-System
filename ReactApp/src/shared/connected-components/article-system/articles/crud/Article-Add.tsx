import React from "react";
import ArticleAddForm from "../../../../components/admin-app/content/article-system/article/create/Article-Add-Form";

/* Type checking. */
import ArticleAddProps from "../../../../../typescript/types/shared/connected-components/article-system/articles/crud/Article-Add-Props";

/**
 * @function ArticleAdd => Redux connected component that encapsulates logic for creation of new articles. (Administration)
 * @param props => Properties that are passed from Redux store object.
 */
const ArticleAdd: React.FC<ArticleAddProps> = (props: ArticleAddProps) => {
  return <ArticleAddForm submitAction={props.actions.createArticle} />;
};

export default ArticleAdd;
