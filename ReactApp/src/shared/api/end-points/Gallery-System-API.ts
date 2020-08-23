import * as requestUtils from "../Request-Utils";

/**
 * @function uploadSinglePhoto => Upload  single  photography into "Gallery system".
 * @param data => Data that represents file content.
 * @param header => Header configuration for particular request.
 */
export const uploadSinglePhoto = (data: {}, header: {}) => {
  return requestUtils.sendPost("/gallery/photos/upload", false, data, header);
};

/**
 * @function fetchAllImages => Fetch all images.
 * @param data
 * @param header
 */
export const fetchAllImages = () => {
  return requestUtils.sendGet("/gallery/all", false);
};

/**
 * @function saveNewImage => Save details about new image.
 * @param data
 * @param header
 */
export const saveNewImage = (data: {}, header: {}) => {
  return requestUtils.sendPost(
    "/gallery/photos/upload/save",
    false,
    data,
    header
  );
};

/**
 * @function removePhoto => Remove photo be numeric identifier.
 * @param id => Primary key identifier for gallery item.
 * @param header
 */
export const removePhoto = (id: number) => {
  return requestUtils.sendDel(`/gallery/photos/${id}`, false);
};

/**
 * @function getPagedPhotos => Fetch all photos for current specified page identifier.
 * @param pageId => Id of desired page.
 * @param pageSize => Size of each page.
 */
export const getPagedPhotos = (pageId: number, pageSize: number) => {
  return requestUtils.sendGet(
    `/gallery/photos/getPaged?id=${pageId}&pageSize=${pageSize}`,
    false
  );
};
