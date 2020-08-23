import apiConfig from "../../../../../../api/api-config.json";
import keygen from "../../../../../../helpers/dynamic-rendering/key-generator";

import React from "react";
import GallerySystemItemModelType from "../../../../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";
import { Col, Row } from "reactstrap";
import GalleryItem from "../../../../../common/gallery/gallery-item/Gallery-Item";
import GalleryAdminItemContainer from "./Gallery-Admin-Item-Container";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  imageItems: GallerySystemItemModelType[];
  removePhoto(photoId: number): void;
}

/**
 * @function GalleryAdminDisplayList => Renders the gallery list with crud manipulation.
 */
const GalleryAdminDisplayList: React.FC<IProps> = ({
  imageItems,
  removePhoto,
}) => {
  return (
    <Row>
      {imageItems.slice(0, 20).map((image: GallerySystemItemModelType) => {
        return (
          <GalleryAdminItemContainer>
            <GalleryItem
              photoId={image.id}
              key={keygen()}
              src={`${apiConfig.BASE_URL}/dist/uploads/images/thumbs/${image.original}`}
              alt={image.caption}
              removePhoto={removePhoto}
            />
          </GalleryAdminItemContainer>
        );
      })}
    </Row>
  );
};

export default GalleryAdminDisplayList;
