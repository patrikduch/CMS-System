import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

// Styled component base interface
import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface ISidebarHeaderProps => Component`s props interface.
 */
interface ISidebarHeaderProps extends IStyledReactComponentProps {
  children: ReactNode[];
  isOpen: boolean;
}

/**
 * @function SidebarHeader => Parent components that contains root stylization for admin sidebar.
 * @param props => passed props data.
 */
const SidebarHeader = (props: ISidebarHeaderProps) => {
  return <div className={props.className}>{props.children}</div>;
};

export default styled(SidebarHeader)`
  h3 {
    /* Title of sidebar (Bakalářská práce) */
    color: black;
    padding: 1em;
  }

  ${(props: ISidebarHeaderProps) => {
    if (props.isOpen) {
      /* Show toggler */
      return css`
        span {
          display: unset;
        }
      `;
    }
  }}

  @media (max-width: 500px) {
    span {
      position: relative;
      float: right;
      margin: 0.5em;
      font-size: 2rem;
      cursor: pointer;
      display: unset;
    }
  }

  @media (min-width: 501px) {
    span {
      position: relative;
      float: right;
      margin: 0.5em;
      font-size: 2rem;
      cursor: pointer;
      display: none;
    }
  }
`;
