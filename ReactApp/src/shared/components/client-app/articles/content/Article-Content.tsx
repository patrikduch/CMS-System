import React, { useState } from "react";

import { Row, Col } from "reactstrap";

// Page title
import PageTitle from "../../../common/title/Page-Title";

/* Hooks life-cycle methods.*/
import useDidMount from "../../../../hooks/dom/component.didmount.hook";
import useDidUnMount from "../../../../hooks/dom/component.didunmount.hook";
import { useLocation } from "react-router-dom";

/* Utitilites helpers... */
import { getParamId } from "../../../../helpers/url/get-param-id";
import stringToDate from "../../../../helpers/data-types/strings/string-to-date";

/* Common stylization components. */
import FrontendContentContainer from "../../../common/containers/Frontend-Content-Container";
import HorizontalLineBasic from "../../../common/horizontal-lines/Horizontal-Line-Basic";
import ArticleContentHeading from "./Article-Content-Heading";
import Error404DisplayMessage from "../../../common/errors/404/Error404-Display-Message";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  article: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  };

  pageId: number | undefined | null;

  actions: {
    fetchArticle(id: number): void;
    resetActualArticle(): void;
  };
}

/**
 * @function ArticleContent => Display of article content detail for public side of application.
 * @param props => Propertie that are passed from Page component to this nested one.
 */
const ArticleContent: React.FC<IProps> = (props: IProps) => {
  const location = useLocation();

  const [articleDetailId] = useState(
    getParamId(location.pathname.replace("/articles/", ""))
  );

  useDidMount(() => {
    if (articleDetailId != null) {
      props.actions.fetchArticle(articleDetailId);
    }
  });

  useDidUnMount(() => {
    props.actions.resetActualArticle();
  });

  if (articleDetailId == null || articleDetailId <= 0) {
    return <Error404DisplayMessage errorMessage="detail článku nenalezen" />;
  }

  if (props.article == null) {
    return <FrontendContentContainer></FrontendContentContainer>;
  }

  if (props.article != null && Object.keys(props.article).length == 0) {
    return <Error404DisplayMessage errorMessage="detail článku nenalezen" />;
  }

  return (
    <FrontendContentContainer>
      <ArticleContentHeading
        resetActualArticle={props.actions.resetActualArticle}
      />
      <Row>
        <Col>
          <PageTitle isPublicSide>
            Název článku: {props.article.title}
          </PageTitle>
        </Col>
      </Row>
      <Row>
        <Col>{stringToDate(props.article.createdAt)}</Col>
      </Row>
      <Row>
        <Col>
          <HorizontalLineBasic />
          <div
            dangerouslySetInnerHTML={{
              __html: props.article.content,
            }}
          ></div>
        </Col>
      </Row>
    </FrontendContentContainer>
  );
};

export default ArticleContent;
