import React, { useState } from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GallerySystemItemModelType from "../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";
import styled from "styled-components";

import { Row, Col } from "reactstrap";
import PaginationContainer from "../../components/common/pagination/Pagination-Container";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";

import { withRouter, useLocation, useHistory } from "react-router-dom";
import GalleryAdminDisplayList from "../../components/admin-app/content/gallery-system/crud/read/Gallery-Admin-Display-List";

/* Type checking */
import IRouterConnectedComponentProps from "../../../typescript/interfaces/shared/router/IRouter-Connected-Component-Props";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import PageTitle from "../../components/common/title/Page-Title";
import BaseBootstrapButton from "../../components/common/buttons/Base-Bootstrap-Button";

/**
 * @interface IProps => Component`s props interface.
 */

interface IProps extends IStyledComponentProps, IRouterConnectedComponentProps {
  imageItems: GallerySystemItemModelType[];
  pageCount: number;
  gallerySystemActions: {
    fetchPagedPhotos(pageId: number, pageSize: number): void;
    removePhoto(photoId: number): void;
  };
}

/**
 * @function GalleryImagesAdminList => Connected component that process Redux store to fetch gallery data for administration.
 */
const GalleryImagesAdminList: React.FC<IProps> = ({
  className,
  gallerySystemActions,
  imageItems,
  pageCount,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [isMounted, setIsMounted] = useState(false);

  const [pageId, setPageId] = useState(getIdFromQuery(location.search));

  /* Change of currently selected article page. */
  const changePage = (pageId: number, pageSize: number) => {
    gallerySystemActions.fetchPagedPhotos(pageId, pageSize);
    setPageId(pageId);
  };

  const navigateToUpload = () => {
    history.push("/admin/gallery/add");
  };

  useDidMount(() => {
    if (location.search.length === 0) {
      setPageId(1);
      gallerySystemActions.fetchPagedPhotos(1, 20);
    } else {
      const pageId = getIdFromQuery(location.search);

      if (pageId != null) {
        setPageId(pageId);
        gallerySystemActions.fetchPagedPhotos(pageId, 20);
      }
    }

    setIsMounted(true);
  });

  if (imageItems.length == 0 && location.search.length > 0) {
    history.push("/admin/error");
  }

  if (pageId == null && location.search.length > 0) {
    history.push("/admin/error");
  }

  if (!isMounted || imageItems.length == 0) return <div />;

  return (
    <>
      <PageTitle>Správa fotogalerie</PageTitle>
      <BaseBootstrapButton action={navigateToUpload}>
        + Nová fotografie
      </BaseBootstrapButton>

      <div className={className}>
        <GalleryAdminDisplayList
          imageItems={imageItems}
          removePhoto={gallerySystemActions.removePhoto}
        />

        <Row>
          <Col md="12">
            <PaginationContainer
              baseUrl="/admin/gallery"
              totalCount={pageCount}
              currentPageId={pageId !== null ? pageId : 1}
              switchPageEvent={changePage}
              pageSize={20}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default withRouter(styled(GalleryImagesAdminList)`
  margin-top: 2.5vh;
  margin-bottom: 15vh;
`);
