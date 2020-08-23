import React from "react";
import useDidMount from "../../../hooks/dom/component.didmount.hook";
import keygen from "../../../helpers/dynamic-rendering/key-generator";
import ArticleItem from "../../../components/common/articles/Article-Item";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  articles: [];

  actions: {
    fetchPagedArticles(pageId: number, pageSize: number): void;
  };
}

/**
 * @function TopArticles => Renders top articles.
 * @param props => Passed props articles.
 */
const TopArticles: React.FC<IProps> = (props: IProps) => {
  useDidMount(() => {
    //props.actions.fetchPagedArticles(1, 5);
  });

  /**
   * @function renderArticles => Render fuctionality of displaying recent articles.
   */
  const renderArticles = () => {
    if (props.articles == null) {
      return <p>Žádný článek nebyl nalezen.</p>;
    }

    return props.articles.map((article: { id: number; title: string }) => {
      return (
        <ArticleItem
          key={keygen()}
          title={article.title}
          url={`/articles/${article.id}`}
        />
      );
    });
  };

  return <>{renderArticles()}</>;
};

export default TopArticles;
