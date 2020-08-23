import React, { useState } from "react";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import SidebarNavlink from "./nav/Sidebar-Navlink";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * @type => Type anotation for sub menu item.
 */
type SubmenuType = {
  target: string;
  title: string;
};

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  title: string;
  icon: IconDefinition;
  items: SubmenuType[];
}

/**
 * @function Submenu => Renders sub links menu inside admin sidebar.
 * @param props => passed props data.
 */
const SubMenu: React.FC<IProps> = (props: IProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { items } = props;

  return (
    <div>
      <NavItem onClick={toggleNavbar}>
        <SidebarNavlink title={props.title} icon={props.icon} url={"#"} />
      </NavItem>
      <Collapse isOpen={!collapsed} navbar>
        {items.map((item: { title: string; target: string }, index: number) => (
          <NavItem key={index}>
            <NavLink tag={Link} to={item.target}>
              <span style={{ color: "black" }}>{item.title}</span>
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
