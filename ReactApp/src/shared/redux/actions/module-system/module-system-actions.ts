import * as actionTypes from "../action-types";
import { Dispatch } from "redux";
import { DispatchObj } from "../../../../typescript/types/shared/redux/StoreType";

import * as moduleFeatureAPI from "../../../api/end-points/Module-Feature-API";
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";

/**
 * @function fetchPaggedFeatureModules => Fetch all pagged features and modules.
 * @param pageId
 * @param pageSize
 */
export const fetchPaggedFeatureModules = (
  pageId: number,
  pageSize: number
) => async (dispatch: Dispatch, getState: DispatchObj) => {
  const res = await moduleFeatureAPI.getPagedFeaturesModules(pageId, pageSize);

  const features = res.data.moduleFeatures as ModuleSystemType[];
  const newFeatures = features.filter((arg: ModuleSystemType) => {
    return arg.isFeature == true;
  }) as ModuleSystemType[];

  dispatch({
    type: actionTypes.FETCH_PAGGED_MODULE_FEATURES,
    payload: res,
  });

  dispatch({
    type: actionTypes.ADD_FEATURE,
    payload: newFeatures,
  });
};

/**
 * @function fetchModulesFeatures => Fetch all modules and features. And separate them into header, footer, body modules and features.
 *This aproch eliminates request number.
 */
export const fetchModulesFeatures = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  const res = await moduleFeatureAPI.getAll();

  const features = res.data.modules.filter((arg: ModuleSystemType) => {
    return arg.isFeature == true;
  });

  const headerModules = res.data.modules.filter((arg: ModuleSystemType) => {
    return (
      arg.isFeature == false && arg.sectionId != null && arg.sectionId == 1
    );
  });

  const bodyModules = res.data.modules.filter((arg: ModuleSystemType) => {
    return (
      arg.isFeature == false && arg.sectionId != null && arg.sectionId == 2
    );
  });

  const footerModules = res.data.modules.filter((arg: ModuleSystemType) => {
    return (
      arg.isFeature == false && arg.sectionId != null && arg.sectionId == 3
    );
  });

  /* Dispatch all features */

  dispatch({
    type: actionTypes.FETCH_ALL_FEATURES,
    payload: {
      data: {
        features: features,
      },
    },
  });

  /* Dispatch header modules */

  dispatch({
    type: actionTypes.FETCH_HEADER_MODULES,
    payload: {
      data: {
        modules: {
          header: headerModules,
        },
      },
    },
  });

  /* Dispatch body modules */

  dispatch({
    type: actionTypes.FETCH_BODY_MODULES,
    payload: {
      data: {
        modules: {
          body: bodyModules,
        },
      },
    },
  });

  /* Dispatch footer modules */
  dispatch({
    type: actionTypes.FETCH_FOOTER_MODULES,
    payload: {
      data: {
        modules: {
          footer: footerModules,
        },
      },
    },
  });
};

/**
 * @fuction synchronizeModuleFeatures => update changed modules and features.
 */
export const synchronizeModuleFeatures = () => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  const res = await moduleFeatureAPI.synchModuleFeatures();

  dispatch({
    type: actionTypes.MUTATE_MODULES_FEATURES,
    payload: res,
  });
};

/**
 * @fuction toggleModuleState  => Action to create isEnabled state of specific module by indentifier.
 * @param moduleId => Numeric identifier of module (primary key.)
 */
export const toggleModuleState = (moduleId: number) => async (
  dispatch: Dispatch,
  getState: DispatchObj
) => {
  const res = await moduleFeatureAPI.toggleModuleState(moduleId);

  dispatch({
    type: actionTypes.TOGGLE_MODULE_STATE,
    payload: res,
  });
};
