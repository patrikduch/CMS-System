import apiConfig from "../../../api/api-config.json";

import keygen from "../../../helpers/dynamic-rendering/key-generator";

import React from "react";

import styled from "styled-components";
import GallerySystemItemModelType from "../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";
import { Col, Row } from "reactstrap";
import GalleryItem from "../../common/gallery/gallery-item/Gallery-Item";

interface IProps {
  imageItems: GallerySystemItemModelType[];
}

/**
 * @function GalleryList => Renders list of photographs on public side without CRUD manipulation.
 * @param imageItems => Photo object that has been passed into this arbitrary component.
 */
const GalleryList: React.FC<IProps> = ({ imageItems }) => {
  return (
    <Row>
      {imageItems.slice(0, 20).map((image: GallerySystemItemModelType) => {
        return (
          <Col key={keygen()} xs="12" md="12" lg="3">
            <GalleryItem
              photoId={image.id}
              key={keygen()}
              src={`${apiConfig.BASE_URL}/dist/uploads/images/thumbs/${image.original}`}
              alt={image.caption}
              isPublicSide
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default styled(GalleryList)``;
