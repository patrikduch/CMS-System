import React from "react";
import PaginationButtonItem from "./Pagination-Button-Item";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  currentPageId: number;
  isPublicSide?: boolean;
  togglePage(currentPageId: number): void;
}

/**
 * @function PaginationMiddleItem => Middle item of pagination  which represents currently selected item.
 * @param props => passed props data.
 */
const PaginationMiddleItem: React.FC<IProps> = (props: IProps) => {
  return (
      <PaginationButtonItem
        togglePage={() => props.togglePage(props.currentPageId)}
        currentPageId={props.currentPageId}
        isMiddle
        isPublicSide={props.isPublicSide}
      />
  );
};

export default PaginationMiddleItem;
