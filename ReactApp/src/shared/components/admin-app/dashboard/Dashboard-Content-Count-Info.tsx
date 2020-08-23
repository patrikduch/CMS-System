import React from "react";
import { Col } from "reactstrap";
import PageTitle from "../../common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  articleCount: number;
  photosCount: number;
}

/**
 * @function DashboardArticleCountInfo => Component that displays article and gallery items count information.
 * @param articleCount => Article count passed from Redux container.
 * @param photosCount => Photos  count passed from Redux container.
 */
const DashboardContentCountInfo: React.FC<IProps> = ({
  articleCount,
  photosCount,
}) => {
  return (
    <Col sm="12" md="6">
      <PageTitle>Obsah</PageTitle>
      <p>Článků celkem: {articleCount}</p>
      <p>Fotografií celkem: {photosCount}</p>
    </Col>
  );
};

export default DashboardContentCountInfo;
