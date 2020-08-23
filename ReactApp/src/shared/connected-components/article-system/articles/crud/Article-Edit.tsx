import * as articleAPI from "../../../../api/end-points/Articles-Api";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useDidMount from "../../../../hooks/dom/component.didmount.hook";
import { Container, Form } from "reactstrap";
import TextUrlLink from "../../../../components/common/links/Text-Url-Link";
import PageTitle from "../../../../components/common/title/Page-Title";
import ArticleDetailWysiwygContext from "../../../../contexts/article-wysiwyg/article-detail-wysiwyg.context";
import ArticleTitleDetail from "../../../../components/admin-app/content/article-system/article/Article-Title-Detail";
import ArticleContentDetail from "../../../../components/admin-app/content/article-system/article/Article-Content-Detail";
import BaseBootstrapButton from "../../../../components/common/buttons/Base-Bootstrap-Button";
import { EditorState } from "draft-js";
import draftToHtml from "../../../../helpers/wysiwyg/draftToHtml";
import IEventHandlerForm from "../../../../../typescript/interfaces/shared/event-handlers/IEvent-Handler-Form";
import isContentInValid from "../../../../helpers/wysiwyg/is-Content-Invalid";
import ArticleEditProps from "../../../../../typescript/types/shared/connected-components/article-system/articles/crud/Article-Edit-Props";

const ArticleEdit: React.FC<ArticleEditProps> = ({
  articleId,
  updateArticle,
}) => {
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

  /**
   * @function getArticleContent => Get article content from child component.
   * @param val
   */
  const getArticleContent = async (val: EditorState) => {
    const html = await draftToHtml(val);
    setContent(html as string);
  };

  const getData = (val: string) => {
    setTitle(val);
  };

  /**
   * @function saveChanges => Save changes from form to the database.
   * @param event => Current event instance.
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
      updateArticle(articleId, {
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
        <Container>
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

export default ArticleEdit;
