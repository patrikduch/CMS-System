import React, { useState } from "react";
import { FormGroup, Form } from "reactstrap";

import WysiwygEditor from "../../wysiwyg/editor/Wysiwyg-Editor";

/* Helpers */
import draftToHtml from "../../../../../../helpers/wysiwyg/draftToHtml";
import { EditorState } from "react-draft-wysiwyg";

/* React router. */
import { useHistory } from "react-router-dom";

/* Type checking */
import IEventHandlerHTMLElement from "../../../../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Html-Element";
import IEventHandlerForm from "../../../../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";

/* Common components imports. */
import InputBasic from "../../../../../common/inputs/Input-Basic";
import BaseBootstrapButton from "../../../../../common/buttons/Base-Bootstrap-Button";
import LabelBasic from "../../../../../common/labels/Label-Basic";
import ErrorFieldDisplayer from "../../../../../../hoc/styled-components/forms/Error-Field-Displayer";
import isContentInValid from "../../../../../../helpers/wysiwyg/is-Content-Invalid";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps{
  submitAction(data: {
    articleCategoryId: number;
    content: string;
    title: string;
  }): void;
}

/**
 * @function ArticleAddForm => Component for creating new article entries.
 * @param props => Props objects that contains all properties needed for new article creation.
 */
const ArticleAddForm: React.FC<IProps> = (props: IProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("" as String);

  const [contentError, setContentError] = useState(false);
  const [titleError, setTitleError] = useState(false);

  const history = useHistory();

  /**
   * @function onTitleChangeHandler - event handler to manage changes on article title.
   * @param event - reference to the current event.
   */
  const onTitleChangeHandler = (event: IEventHandlerHTMLElement) => {
    setTitle(event.target.value);
  };

  /**
   * @function onContentChangeHandler - event handler to manage changes on article content.
   * @param childData - data that comes from child component to the parent.
   */
  const onContentChangeHandler = async (childData: EditorState) => {
    const html = await draftToHtml(childData);
    setContent(html);
  };

  /**
   * @function submitProcessHandler => Handler for creation of new article.
   * @param event
   */
  const submitProcessHandler = (event: IEventHandlerForm) => {
    event.preventDefault();

    if (title == "") {
      /* When title is not filled its needed to change error flag. */
      setTitleError(true);
    }

    if (isContentInValid(content)) {
      setContentError(true);
    } else {
      setContentError(false);
    }

    if (content.trim() == "<p></p>" || title == "") {
      return; /* If one of the field is in invalid state => cancel execution. */
    }

    props.submitAction({
      articleCategoryId: 1,
      title: title,
      content: content as string,
    });

    history.push("/admin/articlepage/articles");
  };

  return (
    <Form onSubmit={submitProcessHandler}>
      <FormGroup>
        <LabelBasic elementRef="articleTitleLabel">Název článku</LabelBasic>
        <ErrorFieldDisplayer hasErrorOccured={title == "" && titleError}>
          <InputBasic
            type="text"
            name="articleTitle"
            id="articleTitleLabel"
            value={title}
            onChange={onTitleChangeHandler}
          />
        </ErrorFieldDisplayer>
      </FormGroup>

      <FormGroup>
        <ErrorFieldDisplayer
          hasErrorOccured={isContentInValid(content) && contentError}
        >
          <WysiwygEditor sendEditorContent={onContentChangeHandler} />
        </ErrorFieldDisplayer>
      </FormGroup>
      <BaseBootstrapButton>Vytvořit</BaseBootstrapButton>
    </Form>
  );
};

export default (ArticleAddForm);
