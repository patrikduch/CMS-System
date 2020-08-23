import React from "react";

import Helmet from "react-helmet";
import HeaderFooterComposer from "../../../hoc/Header-Footer-Composer";
import { Error404Container } from "../../../redux/containers/errors/Error404-Container";

import StoreType from "../../../../typescript/types/shared/redux/StoreType";
import { fetchOwnerInfoDetails } from "../../../redux/actions/owner-info/owner-info-actions";
import { fetchProjectDetail } from "../../../redux/actions/project-detail/project-detail-actions";
import { fetchModulesFeatures } from "../../../redux/actions/module-system/module-system-actions";
import Error404StyleContainer from "../../../components/client-app/errors/Error404-Style-Container";

/**
 * @function loadData => Process all neccessary request for SSR.
 * @param store 
 */
function loadData(store: StoreType) {
  return Promise.all([
    store.dispatch(fetchProjectDetail()),
    store.dispatch(fetchModulesFeatures()),
    store.dispatch(fetchOwnerInfoDetails()),
  ]);
}

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  staticContext: {
    notFound: boolean;
  };
}

/**
 * @function NotFoundPage => Notfound page for public side.
 */
const NotFoundPage: React.FC<IProps> = ({ staticContext }) => {
  if (staticContext != undefined) {
    staticContext.notFound = true;
  }

  return (
      <HeaderFooterComposer>
        <>
          <Helmet>
            <title>Bakalářská práce | 404 </title>
            <meta name="title" content="Bakalářská práce | 404" />
          </Helmet>

          <Error404StyleContainer>
            <Error404Container />
          </Error404StyleContainer>
        </>
      </HeaderFooterComposer>
  );
};

export default {
  component: NotFoundPage,
  loadData,
};
