import React from "react";
/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* Styled components requirements. */
import styled from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";
import BaseBootstrapButton from "../buttons/Base-Bootstrap-Button";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  currentPageId: number;
  isPublicSide?: boolean;
  moveToPreviousPage: () => void;
}

const PaginationPreviousButton: React.FC<IProps> = ({
  className,
  currentPageId,
  moveToPreviousPage,
}) => {
  /* Previos page is not available.  */
  if (currentPageId <= 1) {
    return null;
  }

  return (
    <BaseBootstrapButton className={className} action={moveToPreviousPage}>
      Předchozí
    </BaseBootstrapButton>
  );
};

export default styled(PaginationPreviousButton)`
  margin-right: 0.9vw;

  background: ${(props: IProps) =>
    props.isPublicSide ? props.theme?.button.bgColor : "black"};

  color: ${(props: IProps) =>
    props.isPublicSide ? props.theme?.button.color : "white"};

  /* Border of the pagination item. */
  border: 0.5px solid black;

  /* Pagination previous button spacing for low resolution devices. */
  @media only screen and (min-height: 0px) and (max-height: 640px) {
    margin-right: 1.5vw;
  }

  :hover {
    opacity: 0.8;
    background: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.bgColor : "black"};

    border: 0.5px solid black;
    color: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.color : "white"};
  }
`;
