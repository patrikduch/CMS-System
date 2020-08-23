import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import IStyledReactComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import { ProjectNameContainer } from "../../../redux/containers/project-details/Project-Details-Container";

/**
 * @function SidebarTitle => Component that renders project name inside admin sidebar.
 * @param props
 */
const SidebarTitle = (props: IStyledReactComponentProps) => {
  return (
    <Link to="/admin">
      {" "}
      <h3 className={props.className}>
        <ProjectNameContainer />
      </h3>
    </Link>
  );
};

export default styled(SidebarTitle)`
  background: white;
  border-bottom: 1px solid black;
`;
