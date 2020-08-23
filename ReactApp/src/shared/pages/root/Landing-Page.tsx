import React, { useState } from "react";
import Helmet from "react-helmet";

import StoreType from "../../../typescript/types/shared/redux/StoreType";


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

            <p>Patrik Duch</p>
          </>

  );
};

export default LandingPage;