import React from "react";
import { Container, Row, Col } from "reactstrap";

import error404Img from "../../../../assets/images/error404.png";
import Error404Image from "./Error404-Image";
import Error404LogoContainer from "./Error404-Logo-Container";

/**
 * @function Error404Logo => Error 404 display message in form of image.
 */
const Error404Logo: React.FC = () => {
  return (
    <Error404LogoContainer>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {" "}
          <Error404Image error404ImgUrl={error404Img} />
        </Col>
      </Row>
    </Error404LogoContainer>
  );
};

export default Error404Logo;
