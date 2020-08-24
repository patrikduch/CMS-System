import React from "react";
import Helmet from "react-helmet";


/**
 * @function LandingPage => Page component for root page of  web application.
 */
const LandingPage: React.FC = () => {

  return (
          <>
            <Helmet>
              <title>Bakalářská práce | Index </title>
              <meta name="title" content="Bakalářská práce | Index" />
            </Helmet>
          </>
  );
};

export default {
  component: LandingPage
}