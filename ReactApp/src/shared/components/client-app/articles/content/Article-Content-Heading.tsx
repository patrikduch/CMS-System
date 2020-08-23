import React from "react";
import { Row, Col } from "reactstrap";
import TextUrlLink from "../../../common/links/Text-Url-Link";
import styled from "styled-components";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  resetActualArticle(): void;
}

/**
 * @function ArticleContentHeading => Top content for article content that displays url to get back to all articles.
 */
const ArticleContentHeading: React.FC<IProps> = ({
  className,
  resetActualArticle,
}) => {
  return (
    <Row className={className}>
      <Col>
        <TextUrlLink
          action={() => resetActualArticle()}
          isPublicSide
          url="/articles?pageId=1"
          title="Zpět na všechny články"
        />
      </Col>
    </Row>
  );
};

export default styled(ArticleContentHeading)`
  margin-bottom: 0.8vh;
`;
