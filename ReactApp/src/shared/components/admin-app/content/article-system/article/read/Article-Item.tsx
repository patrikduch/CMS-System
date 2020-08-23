import React from "react";
import { Button } from "reactstrap";
import ArticleModelType from "../../../../../../../typescript/types/app/models/article-system/Article-Model-Type";

import stringShortener from "../../../../../../helpers/data-types/strings/string-shortener";
import stringToDate from "../../../../../../helpers/data-types/strings/string-to-date";
import TextUrlLink from "../../../../../common/links/Text-Url-Link";

/**
 * @interface IProps =>  Component`s props interface.
 */
interface IProps {
  article: ArticleModelType;
  pageId: number;
  removeArticle(articleId: number): void;
}

/**
 * @function ArticleItem => Renders single article item.
 * @param props => Passed props data.
 */
const ArticleItem: React.FC<IProps> = (props: IProps) => {
  const createdAtDate = new Date(props.article.createdAt);

  return (
    <tr>
      <td>
        <TextUrlLink
          title={stringShortener(props.article.title, 35)}
          url={`/admin/articles/${props.article.id}`}
        />
      </td>
      <td>
        {stringToDate(createdAtDate.toString())}
        <span style={{ marginLeft: "5vw" }}>
          <Button
            onClick={() => props.removeArticle(props.article.id)}
            color="danger"
            size="sm"
          >
            X
          </Button>
        </span>
      </td>
    </tr>
  );
};

export default ArticleItem;
