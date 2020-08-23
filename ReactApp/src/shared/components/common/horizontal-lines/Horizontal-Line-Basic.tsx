import React from "react";
import styled from "styled-components";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {}

/**
 * @function HorizontalBasicLine => Renders common component that represents horizontal line.
 */
const HorizontalBasicLine: React.FC<IProps> = ({ className }) => {
  return <hr className={className} />;
};

export default styled(HorizontalBasicLine)`
  border-top: 3px double ${(props: IProps) => props.theme?.hr.color};

  /* Not to display line for small width devices. */
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    display: none;
  }
`;
