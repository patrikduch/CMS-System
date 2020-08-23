import React from "react";
import styled from "styled-components";
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {}

/**
 * @function CopyrightAuthor => Component that renders copyright authors name.
 * @param className => Class name that is generated via CSS procesor "styled components".
 */
const CopyrightAuthor: React.FC<IProps> = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default styled(CopyrightAuthor)`
  display: block;
`;
