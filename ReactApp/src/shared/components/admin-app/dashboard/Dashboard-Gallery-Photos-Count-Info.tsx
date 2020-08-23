import React from "react";
import { Col } from "reactstrap";
import PageTitle from "../../common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  photosCount: number;
}

/**
 * @function DashboardGalleryPhotosCountInfo => Component that displays gallery photos info.
 * @param articleCount => Gallery photos count passed from Redux container.
 */
const DashboardGalleryPhotosCountInfo: React.FC<IProps> = ({ photosCount }) => {
  return (
    <Col sm="12">
      <PageTitle>Fotografie</PageTitle>
      <p>Celkem: {photosCount}</p>
    </Col>
  );
};

export default DashboardGalleryPhotosCountInfo;
