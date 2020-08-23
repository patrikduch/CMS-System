import React from "react";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import styled from "styled-components";

/**
 * @function Error404StyleContainer => Encapsulation style container for Errr404 Not found page.
 * @param children => Content node that is placed inside this arbitrary component.
 */
const Error404StyleContainer: React.FC<IStyledComponentProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export default styled(Error404StyleContainer)`
  margin-top: 20vh;
  margin-bottom: 25vh;

  /* Spacing fix for lover width devices. */
  @media only screen and (min-width: 0px) and (max-width: 995px) {
    margin-left: 16vw;
  }
`;
