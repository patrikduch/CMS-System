import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import * as ProjectApi from "../../../api/end-points/Project-Detail-API";

/**
 * @function fetchProjectDetail - REST API call to fetch current details about project.
 * @returns {object} - Action object with type "FETCH_PROJECT_DETAIL"
 */
export const fetchProjectDetail = () => async (dispatch: Dispatch) => {
  try {
    const response = await ProjectApi.getDetails();

    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL,
      payload: response,
    });
  } catch {
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL,
      payload: {
        data: {
          name: "Chyba v načitání (Zkontrolovat tabulku ProjectDetail)",
          companyName: "Chyba v načitání (Zkontrolovat tabulku ProjectDetail)",
        },
      },
    });
  }
};

/**
 * @function fetchThemes - REST API call to fetch all themes.
 * @returns {object} - Action object with type "FETCH_ALL_THEMES".
 */
export const fetchThemes = () => async (dispatch: Dispatch) => {
  const res = await ProjectApi.getAllThemes();

  dispatch({
    type: actionTypes.FETCH_ALL_THEMES,
    payload: res,
  });
};

/**
 * @function updateProjectDetail - REST API call to change  details about project.
 * @returns {object} - Action object with type "UPDATE_PROJECT_DETAIL"
 */
export const updateProjectDetail = (data: {
  name: string;
  companyName: string;
}) => async (dispatch: Dispatch) => {
  const entity = await ProjectApi.updateDetails(data);

  dispatch({
    type: actionTypes.UPDATE_PROJECT_DETAIL,
    payload: entity,
  });
};

/**
 * @function updateProjectName - Update project name redux field when change in form occurs. (Redux manipulation only.)
 * @returns {object} - Action object with type "UPDATE_PROJECT_NAME".
 */
export const updateProjectName = (projectName: string) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: actionTypes.UPDATE_PROJECT_NAME,
    payload: {
      data: {
        name: projectName,
      },
    },
  });
};

/**
 * @function updateProjectTheme - REST API call to update current chosen project theme.
 * @returns {object} - Action object with type "UPDATE_PROJECT_THEME".
 */
export const updateProjectTheme = (themeId: number) => async (
  dispatch: Dispatch
) => {
  const entity = await ProjectApi.updateProjectTheme(themeId);

  dispatch({
    type: actionTypes.UPDATE_PROJECT_THEME,
    payload: entity,
  });
};
