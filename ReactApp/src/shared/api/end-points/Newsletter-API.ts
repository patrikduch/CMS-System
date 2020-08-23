import * as requestUtils from "../Request-Utils";

/**
 * @function addSusbriber =>  Create new subscription for newsletter..
 */
export const addSubscriber = (email: string) => {
  return requestUtils.sendPost("/newsletter/add", false, { email }, null);
};
