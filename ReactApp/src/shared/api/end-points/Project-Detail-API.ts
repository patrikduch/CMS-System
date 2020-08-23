import * as requestUtils from "../Request-Utils";

/**
 * @function getDetails => Fetch project details (projectName)
 */
export const getDetails = () => {
  return requestUtils.sendGet("/projectdetail/", false);
};

/**
 * @function getallThemes => Fetch all available themes.
 */
export const getAllThemes = () => {
  return requestUtils.sendGet("/projectdetail/themes/all", false);
};

/**
 * @function updateDetail => Update detail of project.
 * @param data  => Data object of new project detail.
 */
export const updateDetails = (data: { name: string; companyName: string }) => {
  return requestUtils.sendPut("/projectdetail/update", data, false);
};

/**
 * @function updateProjectTheme => Update current choosen theme.
 * @param themeId
 */
export const updateProjectTheme = (themeId: number) => {
  return requestUtils.sendPut(
    "/projectdetail/theme/update",
    {
      id: themeId,
    },
    false
  );
};
