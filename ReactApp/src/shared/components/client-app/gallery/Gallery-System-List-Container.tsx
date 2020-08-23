import React from "react";
import { Container } from "reactstrap";

import styled from "styled-components";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @function GallerySystemListContainer => Container that encapsulates list of photos that are displayed on the public side.
 * @param children => Nesteds set of components.
 * @param className => Class  name that is generated via "Styled Components" JS library.
 */
const GallerySystemListContainer: React.FC<IStyledComponentProps> = ({
  className,
  children,
}) => {
  return <Container className={className}>{children}</Container>;
};

export default styled(GallerySystemListContainer)`
  padding-bottom: 10vh;
`;
