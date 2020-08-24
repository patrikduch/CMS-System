import React from "react";
import Helmet from "react-helmet";


/**
 * @function LandingPage => Page component for root page of  web application.
 */
const LandingPage: React.FC = () => {

  return (
          <>
            <Helmet>
              <title>CMS system | Index </title>
              <meta name="title" content="CMS system| Index" />
            </Helmet>
          </>
  );
};

export default {
  component: LandingPage
}