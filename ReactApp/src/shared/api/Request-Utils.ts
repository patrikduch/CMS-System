import axios from "axios";
import processUrl from "./process-url";

/**
 * @function sendGet => GET request handler.
 * @param url  => REST API endpoint.
 * @param isExternal => Is request outside of project domain?
 */
export const sendGet = (url: string, isExternal: boolean) => {
  if (!isExternal) {
    return axios.get(processUrl(url, isExternal));
  } else {
    return axios.get(processUrl(url, isExternal));
  }
};

/**
 * @function sendPost => POST request handler.
 * @param url  => REST API endpoint.
 * @param data => Data object of propetiest to create.
 * @param isExternal => Is request outside of project domain?
 * @param headers
 */
export const sendPost = (
  url: string,
  isExternal: boolean,
  data: {},
  headers: null | object
) => {
  if (!isExternal) {
    return axios.post(processUrl(url, isExternal), data);
  } else {
    return axios.post(processUrl(url, isExternal), data);
  }
};

/**
 *
 * @function sendPut => PUT request handler.
 * @param url  => REST API endpoint.
 * @param data => Data object of propetiest to update.
 * @param isExternal => Is request outside of project domain?
 */
export const sendPut = (url: string, data: {}, isExternal: boolean) => {
  if (!isExternal) {
    return axios.put(processUrl(url, isExternal), data);
  } else {
    return axios.put(processUrl(url, isExternal), data);
  }
};

/**
 * @function sendDel => DELETE request handler.
 * @param url =>  REST API endpoint.
 * @param isExternal => Is request outside of project domain?
 */
export const sendDel = (url: string, isExternal: boolean) => {
  if (!isExternal) {
    return axios.delete(processUrl(url, isExternal));
  } else {
    return axios.delete(processUrl(url, isExternal));
  }
};
