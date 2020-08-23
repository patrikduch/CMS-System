import React, { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";

import ModuleSystemList from "../../components/admin-app/module-system/Module-System-List";
import IRouterConnectedComponentProps from "../../../typescript/interfaces/shared/router/IRouter-Connected-Component-Props";
import FeatureSystemModel from "../../../typescript/types/app/models/Feature-System-Model";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import { Row, Col, Container } from "reactstrap";
import PageTitle from "../../components/common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IRouterConnectedComponentProps {
  features: FeatureSystemModel[];
  totalCount: number;

  featureActions: {
    toggleModuleFeatureState(moduleFeatureId: number): void;
  };

  actions: {
    fetchPaggedFeatureModules(pageId: number, pageSize: number): void;
  };
}

/**
 * @function ModuleAdminList => Component that display`s all modules (Admin-Section)
 * @param props => passed props data.
 */
const ModuleAdminList: React.FC<IProps> = (props: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const location = useLocation();

  const history = useHistory();

  /* Get page identifier */
  const pageId = getIdFromQuery(location.search);

  /**
   * @function dataInit => Data initialization, fetching modules for currently selected page.
   */
  const dataInit = () => {
    if (location.search.length === 0) {
      props.actions.fetchPaggedFeatureModules(1, 5);
    }

    if (pageId !== null) {
      props.actions.fetchPaggedFeatureModules(pageId, 5);
    }
  };

  useDidMount(() => {
    dataInit();
    setIsMounted(true);
  });

  /* Side effect that occurs when location data has been modified. */
  useEffect(() => {
    if (location.pathname === "/admin/modules") {
      dataInit();
    }
  }, [location]);

  if (!isMounted) return null;

  if (
    pageId === 0 ||
    (props.features.length === 0 && location.search.length > 0)
  ) {
    history.push("/admin/error");
  }

  if (pageId == null && location.search.length > 0) {
    history.push("/admin/error");
  }

  if (props.features.length === 0) {
    return null;
  }

  if (pageId === null && props.features.length === 0) {
    history.push("/admin/error");
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageTitle>Dostupné moduly</PageTitle>
        </Col>
      </Row>
      <ModuleSystemList
        dispatchFeatureAction={props.featureActions.toggleModuleFeatureState}
        pagginationAction={props.actions.fetchPaggedFeatureModules}
        features={props.features}
        totalCount={props.totalCount}
        actualPageId={pageId !== null ? pageId : 1}
      />
    </Container>
  );
};

export default ModuleAdminList;
