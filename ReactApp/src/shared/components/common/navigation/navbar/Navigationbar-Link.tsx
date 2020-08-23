import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Type checking. */
import IStyledComponentProps from "../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ThemeType from "../../../../../typescript/types/shared/themes/Theme-Type";
import { NavItem } from "reactstrap";

/* Component`s props interface. */
interface IProps extends ThemeType, IStyledComponentProps {
  icon?: IconProp;
  url: string;
  title: string;
}

/**
 * @function NavbarLink => Component that renders navbar link based on provided properties.
 * @param props
 */
const NavbarLink = (props: IProps) => {
  return (
    <NavItem className={"nav-link"}>
      <Link className={props.className} to={props.url}>
        {props.icon != null && <FontAwesomeIcon icon={props.icon} />}
        {props.title}
      </Link>
    </NavItem>
  );
};

export default styled(NavbarLink)`
  font-size: 1em;

  color: ${(props: IProps) => props.theme?.link.color};
  :hover {
    color: ${(props: IProps) => props.theme?.link.color};
  }
`;
