import { createSelector } from "reselect";
import GallerySystemItemModelType from "../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Model-Type";
import GallerySystemItemFetchedType from "../../../../typescript/types/app/models/gallery-system/Gallery-System-Item-Fetched-Type";

/**
 * @interface IState => State selector`s interface.
 */
interface IState {
  items: GallerySystemItemFetchedType[];
}

/**
 * @function galleryItemsState => State separation that handles determination of gallery system state based on previosly fetched data that comes from data layer.
 * This transformed is needed for correctly display needed data.
 * @param state => Previous state object.
 */
const galleryItemsState = (state: IState) => {
  return state.items.map((item: GallerySystemItemFetchedType) => {
    return {
      id: item.id,
      caption: item.description,
      original: item.imageUrl,
      thumbnail: item.imageUrl.replace("images", "images/thumbnails"),
      isSelected: false,
      thumbnailWidth: 320,
      thumbnailHeight: 213,
    } as GallerySystemItemModelType;
  });
};

/**
 * @function getPageCountState => State separation that handels getting total number of photos.
 * @param state => Previous state object.
 */
const getPageCountState = (state: { pageCount: number }) => state;

/**
 * @function getGalleryItems => Reselect selector for fetching gallery photos.
 */
const getGalleryItems = createSelector([galleryItemsState], (g) => g);

/**
 * @function getPageCount => Reselect selector for fetching total number of photos.
 */
const getPageCount = createSelector([getPageCountState], (t) => t.pageCount);

export { getGalleryItems, getPageCount };
