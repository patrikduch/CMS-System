import React from "react";
import useDidMount from "../../hooks/dom/component.didmount.hook";
import DashboardContentCountInfo from "../../components/admin-app/dashboard/Dashboard-Content-Count-Info";
import { Container, Row, Col } from "reactstrap";
import DashboardModuleFeatureCountInfo from "../../components/admin-app/dashboard/Dashboard-Module-Feature-Count-Info";

/**
 * @interface IProps
 */
interface IProps {
  articles: {
    totalCount: number;
  };

  features: {
    totalCount: number;
    enabledCount: number;
  };

  gallerySystem: {
    photos: {
      totalCount: number;
    };
  };

  modules: {
    totalCount: number;
    enabledCount: number;
  };

  actions: {
    fetchDashboardStatistics: () => void;
  };
}

/**
 * @function DashboardSummary => Dashboard summary component that separates each statistics information.
 * @param props
 */
const DashboardSummary: React.FC<IProps> = (props: IProps) => {
  useDidMount(() => {
    props.actions.fetchDashboardStatistics();
  });
  return (
    <Container>
      <Row>
        <DashboardContentCountInfo
          articleCount={props.articles.totalCount}
          photosCount={props.gallerySystem.photos.totalCount}
        />
        <DashboardModuleFeatureCountInfo
          modulesCount={props.modules.totalCount}
          enabledModulesCount={props.modules.enabledCount}
          featuresTotalCount={props.features.totalCount}
          featuresEnabledTotalCount={props.features.enabledCount}
        />
      </Row>
    </Container>
  );
};

export default DashboardSummary;
