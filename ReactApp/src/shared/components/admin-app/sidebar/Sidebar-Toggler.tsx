import React from "react";
import styled from "styled-components";

// Styled component props interface
import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface ISidebarTogglerProps => Component`s props interface.
 */
interface ISidebarTogglerProps extends IStyledReactComponentProps {
  toggle: () => void;
}

/**
 * @function SidebarToggler => Component that renders sidebar toggler when its needed.
 * @param props => passed props data.
 */
const SidebarToggler = (props: ISidebarTogglerProps) => {
  return (
    <span onClick={props.toggle} className={props.className}>
      &times;
    </span>
  );
};

export default styled(SidebarToggler)`
  color: black;
`;
