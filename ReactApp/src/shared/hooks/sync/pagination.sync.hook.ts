import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getIdFromQuery } from "../../../server/parsers/pagination/getIdFromQuery";

/**
 * @function useUpToDatePagination =>  Hook for ensuring update state of pagination identifier.
 * @param pageId  => Actual page identifier.
 * @param setPageId  => Method that is used for chaning currently selected page.
 */
const useUpToDatePagination = (
  pageId: number | null,
  setPageId: (pageId: number | null) => void
) => {
  const location = useLocation();

  useEffect(() => {
    const currentPageId = getIdFromQuery(location.search);

    if (pageId == null && location.search.length == 0) {
      setPageId(1);
    } else {
      if (currentPageId != null) {
        setPageId(currentPageId);
      }
    }
  }, [location]);
};

export { useUpToDatePagination };
