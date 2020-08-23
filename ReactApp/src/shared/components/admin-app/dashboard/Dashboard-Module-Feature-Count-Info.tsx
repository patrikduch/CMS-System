import React from "react";
import { Col } from "reactstrap";
import PageTitle from "../../common/title/Page-Title";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  modulesCount: number;
  enabledModulesCount: number;

  featuresEnabledTotalCount: number;
  featuresTotalCount: number;
}

/**
 * @function DashboardModuleFeatureCountInfo => Component`s that displays module and feature count info.
 * @param featuresTotalCount => total features count.
 * @param featuresEnabledTotalCount => total count of enabled features.
 * @param enabledModulesCount => total count of enabled modules.
 * @param modulesCount => total modules count.
 */
const DashboardModuleFeatureCountInfo: React.FC<IProps> = ({
  featuresTotalCount,
  featuresEnabledTotalCount,
  enabledModulesCount,
  modulesCount,
}) => {
  return (
    <Col sm="12" md="6">
      <PageTitle>Moduly a featury</PageTitle>
      <p>Modulů celkem: {modulesCount}</p>
      <p>Modulů zapnuto: {enabledModulesCount}</p>
      <p>Featur celkem: {featuresTotalCount}</p>
      <p>Featur zapnuto: {featuresEnabledTotalCount}</p>
    </Col>
  );
};

export default DashboardModuleFeatureCountInfo;
