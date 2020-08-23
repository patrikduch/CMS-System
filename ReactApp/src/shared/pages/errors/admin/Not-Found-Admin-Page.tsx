import React from "react";
import Helmet from "react-helmet";
import Error404Logo from "../../../components/common/errors/404/Error404-Logo";

/**
 * @function NotFoundAdminPage => Notfound page for administration side.
 */
const NotFoundAdminPage = () => {
  return (
    <>
      <Helmet>
        <title>Bakalářská práce | Administrace - 404 </title>
        <meta name="title" content="Bakalářská práce | Administrace - 404" />
      </Helmet>

      <Error404Logo />
    </>
  );
};

export default NotFoundAdminPage;
