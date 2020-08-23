import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";

import SidebarLogoutButton from "../content/Sidebar-Logout-Button";
import BaseBootstrapButton from "../../../common/buttons/Base-Bootstrap-Button";


/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  toggle: () => void;
  signout: () => void;
  isOpen: boolean;
}

export default (props: IProps) => {
  const [isOpen, setOpen] = useState(props.isOpen);
  const toggle = () => setOpen(!isOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <BaseBootstrapButton action={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </BaseBootstrapButton>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <SidebarLogoutButton signout={props.signout} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
