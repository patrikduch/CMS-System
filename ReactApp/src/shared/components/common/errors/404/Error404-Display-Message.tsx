import React from "react";
import Error404Logo from "./Error404-Logo";
import Error404StyleContainer from "../../../client-app/errors/Error404-Style-Container";
import { Error404Container } from "../../../../redux/containers/errors/Error404-Container";

import Helmet from "react-helmet";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  errorMessage: string;
}

/**
 * @function Error404DisplayMessage => Encapsulation of Error404 message. Use case that is used when we dont want propage to the Notfound page component.
 */
const Error404DisplayMessage: React.FC<IProps> = ({ errorMessage }) => {
  return (
    <Error404StyleContainer>
      <>
        <Helmet>
          <title>{`Bakalářská práce | ${errorMessage}`} </title>
          <meta
            name="title"
            content={`Bakalářská práce | 404 - ${errorMessage}`}
          />
        </Helmet>
        <Error404Container />
      </>
    </Error404StyleContainer>
  );
};

export default Error404DisplayMessage;
