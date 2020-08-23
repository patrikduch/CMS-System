import React, { useState, useContext } from "react";
import { Input, FormGroup, Label } from "reactstrap";
import * as articleAPI from "../../../../../api/end-points/Articles-Api";
/* React hook life-cycle methods. */
import useDidMount from "../../../../../hooks/dom/component.didmount.hook";

/* Type checking. */
import IEventHandlerHTMLElement from "../../../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";

/* Common components imports. */
import InputBasic from "../../../../common/inputs/Input-Basic";
import LabelBasic from "../../../../common/labels/Label-Basic";
import ArticleDetailWysiwygContext from "../../../../../contexts/article-wysiwyg/article-detail-wysiwyg.context";
import ErrorFieldDisplayer from "../../../../../hoc/styled-components/forms/Error-Field-Displayer";
import isContentInValid from "../../../../../helpers/wysiwyg/is-Content-Invalid";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  isNew?: boolean;
  articleId: number | null;
  sendData(input: string): void;
}

/**
 * @interface IResponseData => Component`s initialization response interface.
 */
interface IResponseData {
  data: {
    article: {
      title: string;
    };
  };
}

/**
 * @function ArticleTitleDetail => Article`s title manipulation component.
 * @param props => passed props data.
 */
const ArticleTitleDetail: React.FC<IProps> = (props: IProps) => {
  const [title, setTitle] = useState("");

  useDidMount(() => {
    if (props.isNew) {
      articleAPI.getArticle(props.articleId).then((response: IResponseData) => {
        setTitle(response.data.article.title);
      });
    }
  });

  const articleDetailWysiwygContext = useContext(ArticleDetailWysiwygContext);

  /**
   * @function onTitleChange - event handler to manage title field change.
   * @param event => referrence to the current event object.
   */
  const onTitleChange = (event: IEventHandlerHTMLElement) => {
    const value = event.target.value;
    setTitle(value);
    props.sendData(value);
  };

  return (
    <FormGroup>
      <LabelBasic elementRef="articleTitleLabel">Název článku</LabelBasic>

      <ErrorFieldDisplayer
        hasErrorOccured={
          isContentInValid(articleDetailWysiwygContext.title) &&
          articleDetailWysiwygContext.hasTitleError
        }
      >
        <InputBasic
          type="text"
          name="articleTitle"
          id="articleTitleLabel"
          value={title}
          onChange={onTitleChange}
        />
      </ErrorFieldDisplayer>
    </FormGroup>
  );
};

export default ArticleTitleDetail;
