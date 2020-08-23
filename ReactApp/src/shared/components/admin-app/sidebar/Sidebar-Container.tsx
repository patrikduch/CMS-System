import React from "react";
import {
  faHome,
  faPuzzlePiece,
  faBullhorn,
  faPalette,
  faPaperPlane,
  faHammer,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, Nav } from "reactstrap";

import SidebarHeader from "../sidebar/Sidebar-Header";
import SideMenu from "../sidebar/nav/Sidebar-Menu";
import SidebarNavlink from "../sidebar/nav/Sidebar-Navlink";

import SidebarTitle from "../sidebar/Sidebar-Title";
import SidebarToggler from "../sidebar/Sidebar-Toggler";
import styled, { css } from "styled-components";

import SubMenu from "./Submenu";

// Styled component props interface
import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface ISidebarContainerProps => Component`s props interface.
 */
interface ISidebarContainerProps extends IStyledReactComponentProps {
  toggle: () => void;
  isOpen: boolean;
}

const submenus = [
  [
    {
      title: "Články",
      target: "/admin/articlepage/articles",
    },
    {
      title: "Galerie",
      target: "/admin/gallery",
    },
  ],
];

const marketingSubmenus = [
  [
    {
      title: "Sociální sítě",
      target: "/admin/marketing/social-networks",
    },
  ],
];

const SideBar = (props: ISidebarContainerProps) => (
  <div className={props.className}>
    <SidebarHeader isOpen={props.isOpen}>
      <SidebarToggler toggle={props.toggle} />
      <SidebarTitle />
    </SidebarHeader>

    <SideMenu>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <SidebarNavlink title="Dashboard" icon={faHome} url="/admin" />
        </NavItem>

        <SubMenu icon={faCopy} title="Obsah" items={submenus[0]} />

        <SubMenu
          icon={faBullhorn}
          title="Marketing"
          items={marketingSubmenus[0]}
        />

        <NavItem>
          <SidebarNavlink
            title="Moduly a funkce"
            icon={faPuzzlePiece}
            url="/admin/modules"
          />
        </NavItem>

        <NavItem>
          <SidebarNavlink
            title="Šablony"
            icon={faPalette}
            url="/admin/themes"
          />
        </NavItem>

        <NavItem>
          <SidebarNavlink
            title="Nastavení IS"
            icon={faHammer}
            url="/admin/settings"
          />
        </NavItem>

        <NavItem>
          <SidebarNavlink
            title="Autor"
            icon={faPaperPlane}
            url="/admin/contact"
          />
        </NavItem>
      </Nav>
    </SideMenu>
  </div>
);

export default styled(SideBar)`
  min-width: 250px;
  max-width: 250px;
  background: white;
  color: #fff;
  margin-left: -250px;
  transition: all 0.5s;

  ${(props: ISidebarContainerProps) => {
    `@media (max-width: 500px) {
			body {
				overflow: hidden;
			}

			span {
				display: unset;
			}

			min-width: 100%;
			max-width: 100%;
			margin-left: 0;
			transition: all 0.5s, height 0s;
		}`;
    if (props.isOpen) {
      return css`
        @media (max-width: 500px) {
          body {
            overflow: hidden;
          }

          span {
            display: unset;
          }

          min-width: 100%;
          max-width: 100%;
          margin-left: 0;
          transition: all 0.5s, height 0s;
        }
        margin-left: 0;
        transition: 0.5s;
      `;
    }
  }}
`;
