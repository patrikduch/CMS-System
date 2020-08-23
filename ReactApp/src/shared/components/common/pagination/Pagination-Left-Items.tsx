import React from "react";
import PaginationButtonItem from "./Pagination-Button-Item";

/* Key generation import */
import keyGen from "../../../helpers/dynamic-rendering/key-generator";


/**
 * @interface IProps =>  Component`s props interface.
 */
interface IProps {
  totalCount: number;
  currentPageId: number;
  togglePage(currentPageId: number): void;
  isPublicSide?: boolean;
}

/**
 * @function PaginationLeftItems => Renders all pagination items that goes from middle to left.
 * @param props => passed props data.
 */
const PaginationLeftItems: React.FC<IProps> = (props: IProps) => {
  /**
   *  @function prerenderProcess => Renders the left part of pagination from the middle point (which is right now selected page). 
   */
  const prerenderProcess = () => {
    const ret = [];

    if (props.currentPageId > 1) {
      for (
        let i = props.currentPageId - 1;
        i < props.currentPageId && i > 0;
        i++
      ) {
        ret.push(
          <PaginationButtonItem
            key={keyGen()}
            togglePage={() => props.togglePage(i)}
            currentPageId={i}
            isPublicSide={props.isPublicSide}
          />
        );
      }
    }

    return ret;
  };

  return <>{prerenderProcess()}</>;
};

export default PaginationLeftItems;
