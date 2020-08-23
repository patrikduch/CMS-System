import React, { ReactNode } from "react";
import { Container } from "reactstrap";
import NavBar from "../../sidebar/nav/Sidebar-Navbar";
import styled from "styled-components";

// Styled component interface
import IStyledReactComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface ISidebarContentProps => Component`s props interface.
 */
interface ISidebarContentProps extends IStyledReactComponentProps {
  signout: () => void; // Logout user
  isOpen: boolean; // Is sidebar toggled
  authRoutes: ReactNode;
  toggle: () => void;
}

/**
 * @function SidebarContent => Content of admin sidebar.
 * @param props  => passed props data.
 */
const SidebarContent = (props: ISidebarContentProps) => (
  <Container fluid className={props.className}>
    <NavBar
      signout={props.signout}
      isOpen={props.isOpen}
      toggle={props.toggle}
    />
    {props.authRoutes}
  </Container>
);

export default styled(SidebarContent)`
  padding: 20px;
  margin-left: 0;
  height: 100vh;

  ${(props: ISidebarContentProps) => {
    if (props.isOpen) {
      return `
			@media (max-width: 500px) {
				display: none;
			}
		`;
    }
  }}
`;
