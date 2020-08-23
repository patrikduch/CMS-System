import React from "react";
import styled, { css } from "styled-components";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import BaseBootstrapButton from "../buttons/Base-Bootstrap-Button";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  togglePage(actualPageId: number): void;
  currentPageId: number;
  isMiddle?: boolean /* Is pagination item in the middle? */;
  isPublicSide?: boolean /* Separation of stylization for public and admin side. */;
}

/* This component represents single items in pagination (first page, second page) etc. */

/**
 * @function PaginationButtonItem 
 * @param props => passed props data.
 */
const PaginationButtonItem: React.FC<IProps> = (props: IProps) => {
  return (
    <BaseBootstrapButton
      className={props.className}
      action={() => props.togglePage(props.currentPageId)}
    >
      {props.currentPageId}
    </BaseBootstrapButton>
  );
};

export default styled(PaginationButtonItem)`
  background: white;
  color: black;

  :hover {
    background: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.bgColor : "black"};
    /* Border of the pagination item. */
    border: 0.5px solid black;
  }

  margin-right: 0.3vw;

  /* Border of the pagination item. */
  border: 0.5px solid black;

  /* Pagination button item spacing for low-height resolution devices. */
  @media only screen and (min-height: 0px) and (max-height: 640px) {
    margin-right: 0.9vw;
  }

  /* Pagination button item spacing for low-width resolution devices. */
  @media only screen and (max-width: 1045px) {
    margin-right: 0.9vw;
  }

  ${(props: IProps) => {
    /* Style for currently choosen page button item. */
    if (props.isMiddle) {
      return css`
        color: black;
        background: white;
        border: 2px solid
          ${props.isPublicSide ? props.theme?.button.bgColor : "black"};

        :hover {
          color: black;
          background: white;
          border: 2px solid
            ${props.isPublicSide ? props.theme?.button.bgColor : "black"};
        }
      `;
    }
  }}
`;
