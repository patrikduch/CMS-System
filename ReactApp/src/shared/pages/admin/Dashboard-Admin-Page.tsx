import React from "react";
import DashboardSummaryContainer from "../../redux/containers/summary-stats/Dashboard-Summary-Container";


/**
 * @function DashboardAdminPage => Admin dashboard page that contains all statistic about webpage.
 */
const DashboardAdminPage: React.FC = () => {
  return (
      <DashboardSummaryContainer />
  );
};

export default DashboardAdminPage;
