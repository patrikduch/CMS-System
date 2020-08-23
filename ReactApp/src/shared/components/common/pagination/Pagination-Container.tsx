import React from "react";
import styled from "styled-components";
import PaginationLeftItems from "./Pagination-Left-Items";
import PaginationMiddleItem from "./Pagination-Middle-Item";
import PaginationRightItems from "./Pagination-Right-Items";
import PaginationPreviousButton from "./Pagination-Previous-Button";
import PaginationNextButton from "./Pagination-Next-Button";
import IStyledComponentProps from "../../../../typescript/interfaces/shared/styled-components/IStyled-React-Component-Props";

/* React-router hook to access history object. */
import { useHistory } from "react-router";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  baseUrl: string;
  switchPageEvent: Function;
  totalCount: number;
  currentPageId: number;
  pageSize?: number;
  isPublicSide?: boolean;
}

/**
 * @function PaginationContainer => Common component that is used for Pagination functionality. 
 * @param props => passed props data.
 */
const PaginationContainer: React.FC<IProps> = (props: IProps) => {
  const currentPageId = props.currentPageId;
  const history = useHistory();

  const togglePage = (pageId: number) => {
    history.push(`${props.baseUrl}?pageId=${pageId}`);
    props.switchPageEvent(pageId, props.pageSize);
  };


  return (
    <div className={props.className}>
      <PaginationPreviousButton
        currentPageId={props.currentPageId}
        moveToPreviousPage={() => togglePage(currentPageId - 1)}
        isPublicSide={props.isPublicSide}
      />

      <PaginationLeftItems
        currentPageId={currentPageId}
        totalCount={props.totalCount}
        togglePage={togglePage}
        isPublicSide={props.isPublicSide}
      />
      <PaginationMiddleItem
        currentPageId={currentPageId}
        togglePage={togglePage}
        isPublicSide={props.isPublicSide}
      />
      <PaginationRightItems
        currentPageId={currentPageId}
        totalCount={props.totalCount}
        togglePage={togglePage}
        isPublicSide={props.isPublicSide}
      />

      <PaginationNextButton
        currentPageId={props.currentPageId}
        totalCount={props.totalCount}
        moveToNextPage={() => togglePage(currentPageId + 1)}
        isPublicSide={props.isPublicSide}
      />
    </div>
  );
};

export default styled(PaginationContainer)`
  margin-top: 3vh; /* Spacing from the top of root component. */
  margin-bottom: 4vh;

  /* Pagination spacing for low resolution devices. */
  @media only screen and (min-height: 0px) and (max-height: 666px) {
    margin-bottom: 7vh;
  }
`;
