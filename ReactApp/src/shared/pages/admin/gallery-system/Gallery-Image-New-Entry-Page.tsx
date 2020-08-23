import React from "react";
import { Container } from "reactstrap";
import Helmet from "react-helmet";
import PageTitle from "../../../components/common/title/Page-Title";
import FileUpload from "../../../helpers/image-processing/File-Upload";
import TextUrlLink from "../../../components/common/links/Text-Url-Link";

/**
 * @function GalleryImageNewEntryPage => Root page component that handels uploading new photo into gallery.
 */
const GalleryImageNewEntryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Administrace </title>
        <meta
          name="title"
          content="Bakalářská práce | Nahrát novou fotografii"
        />
      </Helmet>

      <Container>
        <TextUrlLink url="/admin/gallery" title="Zpět na přehled fotografií" />

        <PageTitle>Galerie - nahrát novou fotografii</PageTitle>
        <FileUpload />
      </Container>
    </>
  );
};

export default GalleryImageNewEntryPage;
