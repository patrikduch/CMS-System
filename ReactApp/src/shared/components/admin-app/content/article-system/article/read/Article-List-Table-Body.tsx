import ArticleItem from "./Article-Item";
import ArticleModelType from "../../../../../../../typescript/types/app/models/article-system/Article-Model-Type";
import keygen from "../../../../../../helpers/dynamic-rendering/key-generator";
import React from "react";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  articles: ArticleModelType[];
  pageId: number;
  removeArticle(articleId: number): void;
}

/**
 * @function ArticleListTableBody => Component for rendering list of articles.
 * @param articles => Collection of articles.
 * @param pageId => Page identifier of currently selected page.
 * @param removeArticle => Redux action for removing selected articles.
 */
const ArticleListTableBody: React.FC<IProps> = ({
  articles,
  pageId,
  removeArticle
}) => {
  const renderArticles = () => {
    return articles.map((article: ArticleModelType) => {
      return (
        <ArticleItem
          key={keygen()}
          article={article}
          pageId={pageId}
          removeArticle={removeArticle}
        />
      );
    });
  };

  return <>{renderArticles()}</>;
};

export default ArticleListTableBody;
