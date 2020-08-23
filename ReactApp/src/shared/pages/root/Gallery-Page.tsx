import React, { useState } from "react";
import Helmet from "react-helmet";
import HeaderFooterComposer from "../../hoc/Header-Footer-Composer";

import * as featureList from "../../../lib/server/features/Features-List";
import * as gallerySystemActions from "../../redux/actions/gallery-system/gallery-system-actions";

import styled from "styled-components";
import FeatureSystemContainer from "../../redux/containers/feature-system/Feature-System-Checker-Container";
import IRoutePath from "../../../typescript/interfaces/shared/router/IRoutePath";
import { GalleryImagesListContainer } from "../../redux/containers/gallery-system/Gallery-System-Container";

/* Type checking. */
import StoreType from "../../../typescript/types/shared/redux/StoreType";
import { GalleryPageSyncContainer } from "../../redux/containers/module-system/Module-System-Sync-Container";
import { fetchModulesFeatures } from "../../redux/actions/module-system/module-system-actions";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";
import { useLocation } from "react-router-dom";
import { useUpToDatePagination } from "../../hooks/sync/pagination.sync.hook";

const LandingStyle = styled.div``;

/**
 * @function loadData => Process all neccessary request for SSR
 * @param store => Store reference for invoking dispatch on store object.
 * @param payload => Passed optional payLoad in this case is passed pageId, but every loadData function can have different structure of this object.
 */
function loadData(
  store: StoreType,
  payload: {
    queryString: {
      pageId: number;
    };
  }
) {
  let pageId = 1;

  // No params were filled
  if (payload.queryString.pageId != undefined) {
    pageId = payload.queryString.pageId;
  }

  const promiseArray = [];

  if (pageId && pageId > 1) {
    promiseArray.push(
      store.dispatch(gallerySystemActions.fetchPagedPhotos(pageId, 20))
    );
  }

  promiseArray.push(store.dispatch(fetchModulesFeatures()));

  return Promise.all(promiseArray);
}

/**
 * @function GalleryPage => Root component that is used to diplay  photo gallery.
 */
const GalleryPage: React.FC<IRoutePath> = () => {
  const location = useLocation();
  const [pageId, setPageId] = useState(getIdFromQuery(location.search));

  useUpToDatePagination(pageId, setPageId);

  return (
    <GalleryPageSyncContainer isEnabled={true} item={{ galleryPageId: pageId }}>
      <FeatureSystemContainer isPage code={featureList.GALLERY_SYSTEM_FEATURE}>
        <LandingStyle>
          <HeaderFooterComposer>
            <>
              <Helmet>
                <title>Bakalářská práce | Fotogalerie </title>
                <meta name="title" content="Bakalářská práce | Fotogalerie" />
              </Helmet>
              <GalleryImagesListContainer />
            </>
          </HeaderFooterComposer>
        </LandingStyle>
      </FeatureSystemContainer>
    </GalleryPageSyncContainer>
  );
};

export default {
  component: GalleryPage,
  loadData,
};
