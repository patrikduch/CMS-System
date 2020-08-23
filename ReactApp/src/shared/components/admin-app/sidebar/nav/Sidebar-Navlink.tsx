import React from "react";
import { NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * @interface IProps => Component`s props interface.
 */
interface Props {
  title: string;
  icon: IconDefinition;
  url?: string;
  className?: string;
}

/**
 * @function SidebarNavlink => Navlink for admin sidebar.
 * @param props => passed props data.
 */
const SidebarNavlink = (props: Props) => {
  return (
    <NavLink className={props.className} tag={Link} to={props.url}>
      <FontAwesomeIcon icon={props.icon} className="mr-2" />
      {props.title}
    </NavLink>
  );
};

export default styled(SidebarNavlink)`
  color: #3b5998; /* Default color of sidebar navigation item. */
  :hover {
    opacity: 0.7;
    background: white;
    color: #3b5998;
  }
`;
