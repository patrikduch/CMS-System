import React from "react";
import styled from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {}

/**
 * @function ParagraphBasic => Common component that represents basic paragraph under theme provider.
 * @param children => Nested elements that are passed into common component.
 */
const ParagraphBasic: React.FC<IProps> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default styled(ParagraphBasic)`
  color: ${(p: IProps) => p.theme?.secondaryColor};
  margin-bottom: 0.5vh;
`;
