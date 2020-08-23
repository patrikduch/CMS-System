import React from "react";
import { Container } from "reactstrap";
import { renderRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";

import StoreType from "../../../typescript/types/shared/redux/StoreType";
import { containsOnlyNumbers } from "../../helpers/regex/contains-only-numbers";

import { fetchPagedPhotos } from "../../redux/actions/gallery-system/gallery-system-actions";

/**
 * @function GalleryAdminPage => Navigate to root page component that handels gallery management.
 * @param props
 */
const GalleryAdminPage: React.FC<IRoutePath> = (props: IRoutePath) => {
  return <Container>{renderRoutes(props.route.routes)}</Container>;
};

/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store  => Redux store server instance.
 * @param payload  => Data that has been passed with patrticular request.
 */
const loadData = (
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
  }
) => {
  let pageId: number | null = 1;

  if (payload.queryString.pageId != undefined) {
    pageId = containsOnlyNumbers(`${payload.queryString.pageId}`);
  }

  if (pageId !== null) {
    if (pageId > 0) {
      return Promise.all([store.dispatch(fetchPagedPhotos(pageId, 20))]);
    }
  }
};

export default {
  component: withRouter(GalleryAdminPage),
  loadData,
};
