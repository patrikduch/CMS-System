import * as requestUtils from "../Request-Utils";

/**
 * @function getAll => Fetch all social icons.
 */
export const getAll = () => {
  return requestUtils.sendGet("/socialIcons/all", false);
};

/**
 * @function updateSocialIcon => Update social icon based on specified social icon code.
 * @param name => New name of social icon.
 * @param code => Code of social icon that you wish to update.
 * @param url => Url of social icon.
 */
export const updateSocialIcon = (name: string, code: string, url: string) => {
  return requestUtils.sendPut(
    `/socialIcons/update`,
    {
      name,
      code,
      url,
    },
    false
  );
};
