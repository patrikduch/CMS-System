import React from "react";
import styled from "styled-components";
import { NavbarToggler } from "reactstrap";

/* Type checking. */
import IStyledComponentProps from "../../../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  toggle: () => void;
}

/**
 * @function NavigationHamburger => Navigation component for rendering hamburger responsivity feature.
 */
const NavigationHamburger: React.FC<IProps> = ({ className, toggle }) => {
  return <NavbarToggler className={className} onClick={toggle} />;
};

export default styled(NavigationHamburger)`
  font-family: "Roboto Condensed", sans-serif; /* Bootstrap overriding. */
  background: ${(props: IProps) => props.theme?.primaryColor};
  color: ${(props: IProps) => props.theme?.secondaryColor};
`;
