import React from "react";
import Helmet from "react-helmet";
import { GalleryImagesAdminListContainer } from "../../../redux/containers/gallery-system/Gallery-System-Container";

/**
 * @funcion GalleryImageListPage => Nested page component for rendering list of gallery images.
 */
const GalleryImageListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Správa fotogalerie </title>
        <meta name="title" content="Bakalářská práce | Správa fotogalerie" />
      </Helmet>

      <GalleryImagesAdminListContainer />
    </>
  );
};

export default GalleryImageListPage;
