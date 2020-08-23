import React, { useState } from "react";
import { Collapse, Navbar, Nav } from "reactstrap";
import styled from "styled-components";
import NavbarTitle from "./NavBar-Title";
import FeatureSystemContainer from "../../../../../redux/containers/feature-system/Feature-System-Checker-Container";
import * as featureList from "../../../../../../lib/server/features/Features-List";
import NavigationbarLink from "../../../../common/navigation/navbar/Navigationbar-Link";
import NavigationHamburger from "./Navigation-Hamburger";
import ThemeType from "../../../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface INavigationBarProps {
  toggled: boolean; // Default state of toggled navigation bar
  className?: string | undefined;
}

/**
 * @function Navigation => Main Bootstrap navigation.
 * @param props => Passed props data.
 */
const Navigation = (props: INavigationBarProps) => {
  const [isOpen, setToggleState] = useState(props.toggled);

  // Toggle navigation (hamburger bar for mobile or small devices)
  const toggle = () => {
    setToggleState(!isOpen);
  };

  return (
      <div className={props.className} >
        <Navbar light expand="md">
          <NavbarTitle />
          <NavigationHamburger toggle={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavigationbarLink title="Domů" url="/" />
              <FeatureSystemContainer code={featureList.ARTICLE_SYSTEM_FEATURE}>
                <NavigationbarLink title="Články" url="/articles" />
              </FeatureSystemContainer>
              <FeatureSystemContainer code={featureList.GALLERY_SYSTEM_FEATURE}>
                <NavigationbarLink title="Galerie" url="/gallery/photos" />
              </FeatureSystemContainer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
};

Navigation.defaultProps = {
  toggled: false,
};

export default styled(Navigation)`
  border-bottom: 3px double ${(props: ThemeType) => props.theme?.header.borderColor};
`;
