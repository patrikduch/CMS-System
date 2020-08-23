import React, { useState, useEffect } from "react";
import ArticleContentDetail from "../Article-Content-Detail";
import ArticleTitleDetail from "../Article-Title-Detail";
import { Form, Container } from "reactstrap";

import * as articleAPI from "../../../../../../api/end-points/Articles-Api";

/* Helpers */
import draftToHtml from "../../../../../../helpers/wysiwyg/draftToHtml";

/* React hooks life-cycle methods. */
import useDidMount from "../../../../../../hooks/dom/component.didmount.hook";
import { EditorState } from "react-draft-wysiwyg";

/* Type checking. */
import IEventHandlerForm from "../../../../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import IStyledComponentProps from "../../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* Common components */
import BaseBootstrapButton from "../../../../../common/buttons/Base-Bootstrap-Button";
import PageTitle from "../../../../../common/title/Page-Title";
import TextUrlLink from "../../../../../common/links/Text-Url-Link";

import styled from "styled-components";
import { useHistory } from "react-router-dom";
import isContentInValid from "../../../../../../helpers/wysiwyg/is-Content-Invalid";
import ErrorFieldDisplayer from "../../../../../../hoc/styled-components/forms/Error-Field-Displayer";
import ArticleDetailWysiwygContext from "../../../../../../contexts/article-wysiwyg/article-detail-wysiwyg.context";


/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  articleId: number | null;
}

/**
 * @function ArticleEditContainer => Encapsulation component that contains all tools for editting currently selected article.
 * @param articleId => Id of selected article.
 * @param className => Class name that is generated via "Styled Components" library.
 */
const ArticleEditContainer: React.FC<IProps> = ({ articleId, className }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("" as string);

  const [isMounted, setIsMounted] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [hasContentError, setHasContentError] = useState(false);
  const [hasTitleError, setHasTitleError] = useState(false);

  const history = useHistory();

  useDidMount(() => {
    articleAPI
      .getArticle(articleId)
      .then((response: { data: { article: { title: string } } }) => {
        setIsFetched(true);

        if (Object.keys(response.data.article).length == 0) {
          setHasError(true);
        }

        setTitle(response.data.article.title);
      });

    setIsMounted(true);
  });

  const getData = (val: string) => {
    setTitle(val);
  };


  /**
   * @function getArticleContent => Get article content  and save as HTML into component`s state.
   * @param val => Current value of Wysiwyg editor.
   */
  const getArticleContent = async (val: EditorState) => {
    const html = await draftToHtml(val);
    setContent(html as string);
  };

  /**
   * @function saveChanges => Save changes from form to the database.
   * @param event
   */
  const saveChanges = (event: IEventHandlerForm) => {
    event.preventDefault();

    if (title == "") {
      /* When title is not filled its needed to change error flag. */
      setHasTitleError(true);
    }

    if (isContentInValid(content)) {
      setHasContentError(true);
    } else {
      setHasContentError(false);
    }

    if (content.trim() == "<p></p>" || title == "") {
      return; /* If one of the field is in invalid state => cancel execution. */
    }

    if (articleId != null) {
      articleAPI.updateArticle(articleId, {
        title,
        content,
      });
    }

    history.push("/admin/articlepage/articles");
  };

  if (!isMounted && !hasError && !isFetched) return null;

  if (articleId == null || (hasError && isFetched)) {
    history.push("/admin/error");
  }

  return (
    <>
      {isMounted && isFetched && (
        <Container className={className}>
          <TextUrlLink
            url="/admin/articlepage/articles"
            title="Zpět na všechny články"
          />
          <PageTitle>Editace článku: {title}</PageTitle>

          <Form onSubmit={saveChanges}>
            <ArticleDetailWysiwygContext.Provider
              value={{
                content,
                hasContentError,
                title,
                hasTitleError,
              }}
            >
              <ArticleTitleDetail
                isNew
                sendData={getData}
                articleId={articleId}
              />

              <ArticleContentDetail
                content={title}
                sendArticleContent={getArticleContent}
                articleId={articleId}
                articleTitle={title}
              />
            </ArticleDetailWysiwygContext.Provider>

            <BaseBootstrapButton>Uložit změny</BaseBootstrapButton>
          </Form>
        </Container>
      )}
    </>
  );
};

export default styled(ArticleEditContainer)`
  padding-bottom: 25vh;
`;
