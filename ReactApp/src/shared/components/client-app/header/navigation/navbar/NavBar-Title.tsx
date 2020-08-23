import React from "react";
import { NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

// Styled component for displaying Header title
import HeaderTitle from "../../../../common/title/Header-Title";

import { ProjectNameContainer } from "../../../../../redux/containers/project-details/Project-Details-Container";


/**
 * @function NavbarTitle => Sub component of Bootstrap navigation component "Navigation-Bar.tsx".
 */
const NavbarTitle: React.FC = () => {

  return (
    <NavbarBrand to="/" title="Autor: Patrik Duch" tag={Link}>
      <HeaderTitle>
        <ProjectNameContainer />
      </HeaderTitle>
    </NavbarBrand>
  );
}

export default NavbarTitle;