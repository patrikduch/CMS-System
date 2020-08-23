import React, { useState, useEffect } from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import GallerySystemItemModelType from "../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";

import { Row, Col } from "reactstrap";
import PageTitle from "../../components/common/title/Page-Title";
import PaginationContainer from "../../components/common/pagination/Pagination-Container";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";

/* Type checking */
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import { useLocation } from "react-router-dom";
import areArraysEqual from "../../helpers/data-types/array/deep-comparision/are-Arrays-Equal";

import GalleryList from "../../components/client-app/gallery/Gallery-List";
import GallerySystemListContainer from "../../components/client-app/gallery/Gallery-System-List-Container";
import Error404DisplayMessage from "../../components/common/errors/404/Error404-Display-Message";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  imageItems: GallerySystemItemModelType[];
  pageCount: number;
  gallerySystemActions: {
    fetchPagedPhotos(pageId: number, pageSize: number): void;
  };
}

/**
 * @function GallerySystemImagesList => Connected component that process Redux store to fetch gallery data.
 * @param className => className that is generated via "Styled-components" library.
 * @param gallerySystemActions => Redux action for handling gallery manipulations.
 * @param imageItems => Items that represents static urls of fetched photographs.
 * @param pageCount => Total number of pages.
 */
const GallerySystemImagesList: React.FC<IProps> = ({
  gallerySystemActions,
  imageItems,
  pageCount,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  /* Get location object from history API. */
  const location = useLocation();

  /* Get page identifier */
  const queryPageId = getIdFromQuery(location.search);

  const [pageId, setPageId] = useState(queryPageId);

  const [hasError, setHasError] = useState(false);

  useDidMount(() => {
    gallerySystemActions.fetchPagedPhotos(
      queryPageId !== null ? queryPageId : 1,
      20
    );
    setIsMounted(true);
  });

  useEffect(() => {

    if (
      (pageId == null && location.search.length > 0) ||
      (imageItems.length == 0 && location.search.length > 0)
    ) {
      setHasError(true)
    }

    if (hasError) {
      gallerySystemActions.fetchPagedPhotos(
        1,
        20
      );

      setPageId(1);

      setHasError(false);

    }

    

  }, [location]);

  /**
   * @function changePage => Functionality for changing current gallery page.
   * @param pageId => numeric identifier of newly selected page.
   * @param pageSize  => Size of each page.
   */
  const changePage = (pageId: number, pageSize: number) => {
    gallerySystemActions.fetchPagedPhotos(pageId, pageSize);
    setPageId(pageId);
  };

  if (!isMounted) return <div />;

  if (
    (pageId == null && location.search.length > 0) ||
    (imageItems.length == 0 && location.search.length > 0)
  ) {
    return <Error404DisplayMessage errorMessage="stránka nenalezena" />;
  }

  return (
    <GallerySystemListContainer>
      <Row>
        <Col>
          <PageTitle isPublicSide>Fotogalérie</PageTitle>
        </Col>
      </Row>

      <GalleryList imageItems={imageItems} />

      <Row>
        <Col md="12">
          <PaginationContainer
            baseUrl="/gallery/photos"
            totalCount={pageCount}
            currentPageId={pageId === null ? 1 : pageId}
            switchPageEvent={changePage}
            pageSize={20}
            isPublicSide
          />
        </Col>
      </Row>
    </GallerySystemListContainer>
  );
};

export default React.memo(
  GallerySystemImagesList,
  (previousProps: IProps, nextProps: IProps) => {
    const isEqual =
      areArraysEqual(
        previousProps.imageItems as [],
        nextProps.imageItems as []
      ) && nextProps.imageItems.length === previousProps.imageItems.length;

    return isEqual;
  }
);
