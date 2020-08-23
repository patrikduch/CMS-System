import React from "react";

/* Type checking. */
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/*  Styled components requirements. */
import styled from "styled-components";
import ThemeType from "../../../../typescript/types/shared/themes/Theme-Type";

/* Common components imports. */
import BaseBootstrapButton from "../buttons/Base-Bootstrap-Button";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps, ThemeType {
  currentPageId: number;
  totalCount: number;
  isPublicSide?: boolean;
  moveToNextPage: () => void;
}

/**
 * @function PaginationNextButton => Next button that is rendered alongside the Pagination system.
 * @param className => Class  name that is generated via "Styled Components" JS library.
 * @param currentPageId => Currently selected page.
 * @param totalCount => Total number of pages.
 */
const PaginationNextButton: React.FC<IProps> = ({
  className,
  currentPageId,
  totalCount,
  moveToNextPage,
}) => {
  if (currentPageId >= totalCount) {
    return null;
  }

  return (
    <BaseBootstrapButton className={className} action={moveToNextPage}>
      Další
    </BaseBootstrapButton>
  );
};

export default styled(PaginationNextButton)`
  background: ${(props: IProps) =>
    props.isPublicSide? props.theme?.button.bgColor : "black"};

  color: ${(props: IProps) =>
    props.isPublicSide ? props.theme?.button.color : "white"};
  margin-left: 0.5vw;

  /* Border of the pagination item. */
  border: 0.5px solid black;

  :hover {
    opacity: 0.8;
    background: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.bgColor : "black"};
    color: ${(props: IProps) =>
      props.isPublicSide ? props.theme?.button.color : "white"};

    border: 0.5px solid black;
  }
`;
