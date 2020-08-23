import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import * as gallerySystemAPI from "../../../api/end-points/Gallery-System-API";

/**
 * @function uploadImage => Upload new image to the gallery.
 */
export const saveNewImage = () => async (dispatch: Dispatch) => {
  dispatch({
    type: actionTypes.GALLERY_SYSTEM_NEW_IMAGE,
  });
};

/**
 * @function removePhoto => Remove photo based on numeric identifier.
 * @param id
 */
export const removePhoto = (id: number) => async (dispatch: Dispatch) => {
  await gallerySystemAPI.removePhoto(id);

  dispatch({
    type: actionTypes.GALLERY_SYSTEM_DELETE_IMAGE,
    payload: {
      data: {
        photoId: id,
      },
    },
  });
};

/**
 * @function fetchAllImages => Fetch all gallery images.
 */
export const fetchAllImages = () => async (dispatch: Dispatch) => {
  const res = await gallerySystemAPI.fetchAllImages();

  dispatch({
    type: actionTypes.FETCH_ALL_IMAGES,
    payload: res,
  });
};

/**
 * @function fetchPagedPhotos =< Fetch all photos for specified page specification.
 * @param pageId => Numeric identifier of desired page.
 * @param pageSize => Numeric identifier of each page.
 */
export const fetchPagedPhotos = (pageId: number, pageSize: number) => async (
  dispatch: Dispatch
) => {
  const res = await gallerySystemAPI.getPagedPhotos(pageId, pageSize);

  dispatch({
    type: actionTypes.FETCH_ALL_IMAGES,
    payload: {
      data: {
        items: res.data.photos,
        pageCount: res.data.pageCount,
      },
    },
  });
};
