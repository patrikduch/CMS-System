import React from "react";
import Helmet from "react-helmet";
import useProjectDetail from "../../data/qql/project-details/useProjectDetail";


/**
 * @function LandingPage => Page component for root page of  web application.
 */
const LandingPage: React.FC = () => {


  const projectDetail = useProjectDetail();

  return (
          <>
            <Helmet>
              <title>Bakalářská práce | Index </title>
              <meta name="title" content="Bakalářská práce | Index" />
            </Helmet>

            <h1>{projectDetail.projectName}</h1>
            
          </>

  );
};

export default {
  component: LandingPage
}