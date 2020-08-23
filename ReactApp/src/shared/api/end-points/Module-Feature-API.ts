import * as requestUtils from "../Request-Utils";

/**
 * @function getAll => Fetch all modules and features.
 */
export const getAll = () => {
  return requestUtils.sendGet("/modules/all", false);
};

/**
 * @function syncModuleFeatures => Fetch module features
 */
export const synchModuleFeatures = () => {
  return requestUtils.sendGet("/moduleFeatures/sync", false);
};

/**
 * @function getEnabledModules => Fetch all enabled modules and features.
 */
export const getEnabledModules = () => {
  return requestUtils.sendGet("/modules/enabled/all", false);
};

/**
 * @function getEnabledFeatures => Fetch all enabled features only.
 */
export const getEnabledFeatures = () => {
  return requestUtils.sendGet("/features/enabled", false);
};

/**
 * @function getPagedFeaturesModules => Fetch all features nad modules with pagination.
 * @param pageId
 * @param pageSize
 */
export const getPagedFeaturesModules = (pageId: number, pageSize: number) => {
  return requestUtils.sendGet(
    `/modulefeatures/getPaged/?pageId=${pageId}&pageSize=${pageSize}`,
    false
  );
};

/**
 * @function getChangedModules => Get all changed modules.
 */
export const getChangedModules = () => {
  return requestUtils.sendGet("/modules/changed/all", false);
};

/**
 * @function toggleModuleState => toggle state of choosen module by its identifier.
 * @param moduleId
 */
export const toggleModuleState = (moduleId: number) => {
  return requestUtils.sendPut(`/modules/toggle/${moduleId}`, {}, false);
};
