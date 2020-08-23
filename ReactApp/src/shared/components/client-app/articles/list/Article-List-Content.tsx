import React from "react";
import ArticleModelType from "../../../../../typescript/types/app/models/article-system/Article-Model-Type";
import ArticleListing from "../../../common/articles/Article-Listings";
import TextUrlLink from "../../../common/links/Text-Url-Link";
import stringShortener from "../../../../helpers/data-types/strings/string-shortener";

import keygen from "../../../../helpers/dynamic-rendering/key-generator";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../../typescript/types/shared/themes/Theme-Type";
import stringToDate from "../../../../helpers/data-types/strings/string-to-date";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  articles: [];
}

/**
 * @function ArticleListContent => Component that renders content of article page (article entries).
 */
const ArticleListContent: React.FC<IProps> = ({ articles, className }) => {
  /**
   * @function renderArticles => Render of paged articles.
   */
  const renderArticles = () => {
    if (articles.length === 0) {
      return <p>Test</p>;
    }

    return articles.map((article: ArticleModelType) => {
      return (
        <ArticleListing key={keygen()}>
          <TextUrlLink
            url={`articles/${article.id}`}
            title={stringShortener(article.title, 35)}
          />
          <div>Datum vytvoření: {stringToDate(article.createdAt)}</div>
        </ArticleListing>
      );
    });
  };

  return <div className={className}> {renderArticles()} </div>;
};

export default styled(ArticleListContent)`
  margin-bottom: 2vh;

  /* Article container list spacing for low-high resolution devices. */
  @media only screen and (min-height: 0px) and (max-height: 149px) {
    margin-bottom: 10vh;
  }

  /* Article container list spacing for low-high resolution devices. */
  @media only screen and (min-height: 150px) and (max-height: 640px) {
    margin-bottom: 7vh;
  }
`;
