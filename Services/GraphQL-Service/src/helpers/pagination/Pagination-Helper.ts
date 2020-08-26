/**
 * @class PaginationHelper => Pagination helper class.
 */
class PaginationHelper {
  /**
   * @function getPageCount => Get total page count calculated from itemsCount.
   * @param itemsCount => Total number of items.
   * @param pageSize => Size of single page.
   */
  static getPageCount = (itemsCount: number, pageSize: number) => {
    let result = Math.trunc(itemsCount / pageSize);

    /* Check for existence elements for next page. */

    if ((itemsCount / pageSize) % 1 !== 0) {
      result += 1;
    }

    return result;
  };
}

export default PaginationHelper;
