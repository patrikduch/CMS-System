import React from "react";
import PaginationButtonItem from "./Pagination-Button-Item";

import keyGen from "../../../helpers/dynamic-rendering/key-generator";

/**
 * @interface IProps => Component`s props interface.
 */
interface IProps {
  totalCount: number;
  currentPageId: number;
  isPublicSide?: boolean;
  togglePage(currentPageId: number): void;
}


/**
 * @function PaginationRightItems => Renders all pagination items that goes from middle to right.
 * @param props => passed props data.
 */
const PaginationRightItems: React.FC<IProps> = (props: IProps) => {
  /**
   * @function prerenderProcess => Renders the right part of pagination from the middle point (which is right now selected page).
   */
  const prerenderProcess = () => {
    const ret = [];
    for (let i = props.currentPageId + 1; i <= props.totalCount; i++) {
      ret.push(
        <PaginationButtonItem
          key={keyGen()}
          togglePage={() => props.togglePage(i)}
          currentPageId={i}
          isPublicSide={props.isPublicSide}
        />
      );
    }

    return ret;
  };

  return <>{prerenderProcess()}</>;
};

export default PaginationRightItems;
