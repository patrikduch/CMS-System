/* Import of all actions types */

import * as actionTypes from "../../actions/action-types";

/* Import initial state configuration */

import initialState from "../initial-state";

/* Type checking. */

import ProjectDetailTypeModel from "../../../../typescript/types/app/models/Project-Detail-Type-Model";
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/**
 * @type ActionPayloadType => Project detail reducer`s payload type.
 */
type ActionPayloadType = {
  data: ProjectDetailTypeModel;
};

/**
 * @function projectDetailReducer => Project detail info management.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into project detail`s reducer.
 */
const projectDetailReducer = (
  state = initialState.projectDetail,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    /* Fetch project detail info. */

    case actionTypes.FETCH_PROJECT_DETAIL:
      return {
        ...state,
        projectName: action.payload.data.name,
        themeCode: action.payload.data.theme,
        companyName: action.payload.data.companyName,
        domainUrl: action.payload.data.domainUrl
      };

    /* Update project name. */

    case actionTypes.UPDATE_PROJECT_NAME:
      return {
        ...state,
        projectName: action.payload.data.name
      };

    /* Fetch all project`s detail themes. */

    case actionTypes.FETCH_ALL_THEMES:
      return {
        ...state,
        themes: action.payload.data.themes
      };

    /* Update project detail which consists of project name and company name. */

    case actionTypes.UPDATE_PROJECT_DETAIL:
      return {
        ...state,
        projectName: action.payload.data.name,
        companyName: action.payload.data.companyName
      };

    /* Update currently chosen project theme. */

    case actionTypes.UPDATE_PROJECT_THEME:
      return {
        ...state,
        themeCode: action.payload.data.code
      };

    default:
      return state;
  }
};
export default projectDetailReducer;
