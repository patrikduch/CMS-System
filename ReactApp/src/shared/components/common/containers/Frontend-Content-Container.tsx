import React from "react";
import { Container } from "reactstrap";

import styled from "styled-components";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @function FrontendContentContainer => Shared common stylization for  all root Page component`s that display anything on public side.
 */
const FrontendContentContainer: React.FC<IStyledComponentProps> = ({
  children,
  className,
}) => {
  return <Container className={className}>{children}</Container>;
};

export default styled(FrontendContentContainer)`
  margin-top: 2vh;
  height: 100%;
  padding-bottom: 25vh;
`;
