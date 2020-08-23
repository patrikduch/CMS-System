import React from "react";

/* Reactstrap components. */
import { Container } from "reactstrap";

import styled from "styled-components";
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @function Error404LogoContainer => Encapsulation component for Error404 logo image.
 * @param children => Content node that is placed inside this arbitrary component.
 * @param className => Generated classname via "styled-components" library.
 */
const Error404LogoContainer: React.FC<IStyledComponentProps> = ({
  children,
  className,
}) => {
  return <Container className={className}>{children}</Container>;
};

export default styled(Error404LogoContainer)`
  margin-top: 10vh;
`;
