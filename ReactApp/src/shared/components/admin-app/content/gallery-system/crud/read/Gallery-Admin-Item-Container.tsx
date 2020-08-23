import React from "react";

import keygen from "../../../../../../helpers/dynamic-rendering/key-generator";

import { Col } from "reactstrap";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @function GalleryAdminItemContainer => Custom style modifications for gallery list that is beign rendered on admin side.
 * @param children => Nesteds set of components.
 * @param className => Class  name that is generated via "Styled Components" JS library.
 */
const GalleryAdminItemContainer: React.FC<IStyledComponentProps> = ({
  children,
  className,
}) => {
  return (
    <Col className={className} key={keygen()} xs="12" md="12" lg="4">
      {children}
    </Col>
  );
};

export default styled(GalleryAdminItemContainer)`
  margin-top: 4.5vh;
`;
