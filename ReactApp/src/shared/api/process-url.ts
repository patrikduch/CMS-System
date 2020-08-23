import apiconfig from "./api-config.json";

/**
 * @function processUrl =>  Transform url of api call.
 * @param url => Generate the correct API url for production and development environment.
 * @param isExternal
 */
const processUrl = (url: string, isExternal: boolean) => {
  if (!isExternal) {
    return `${apiconfig.BASE_URL}${url}`;
  } else {
    return `${url}`;
  }
};

export default processUrl;
