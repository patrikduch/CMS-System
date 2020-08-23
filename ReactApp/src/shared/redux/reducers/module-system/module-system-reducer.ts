// Import of all actions types
import * as actionTypes from "../../actions/action-types";
// Import initial state configuration
import initialState from "../initial-state";

/* Type checking. */
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";
import { getModulesFromArray } from "../../../helpers/module-system/Module-System-Helper";

const getModules = (moduleFeatures: ModuleSystemType[], sectionId: number) => {
  return moduleFeatures.filter(
    (arg: ModuleSystemType) => arg.sectionId == sectionId
  );
};

/* Reducer`s payload type. */
type ActionPayloadType = {
  type: string;
  data: {
    total: number;
    moduleFeatures: [];
    modules: {
      header: ModuleSystemType[];

      body: ModuleSystemType[];

      footer: ModuleSystemType[];
    };

    feature: {
      id: number;
      isEnabled: boolean;
    };
  };
};

const reducer = (
  state = initialState.moduleSystem,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_ENABLED_MODULES:
      return {
        ...state,
        header: {
          modules: action.payload.data.modules.header,
        },

        body: {
          modules: action.payload.data.modules.body,
        },

        footer: {
          modules: action.payload.data.modules.footer,
        },
      };

    /* Fetch modules and features with specified pagination configuration. */
    case actionTypes.FETCH_PAGGED_MODULE_FEATURES:
      return {
        ...state,
        header: {
          modules: getModules(action.payload.data.moduleFeatures, 1),
        },

        body: {
          modules: getModules(action.payload.data.moduleFeatures, 2),
        },

        footer: {
          modules: getModules(action.payload.data.moduleFeatures, 3),
        },

        totalCount: action.payload.data.total,
      };

    /* Change module state  */
    case actionTypes.TOGGLE_MODULE_STATE:
      // Merge all section modules into one array
      const mergedModulesFeatures = state.header.modules
        .concat(state.footer.modules)
        .concat(state.body.modules);

      // Get module or feature by id
      const entity: ModuleSystemType[] = mergedModulesFeatures.filter(
        (arg: ModuleSystemType) => arg.id == action.payload.data.feature.id
      );

      // Get action passed identifier
      let identifier = 0;

      if (entity.length > 0) {
        identifier = entity[0].id;
      } else {
        return;
      }

      const newModulesFeatures = mergedModulesFeatures.map(
        (arg: ModuleSystemType) => {
          if (arg.id == identifier) {
            arg.isEnabled = action.payload.data.feature.isEnabled;
          }
          return arg;
        }
      );

      // Separation on to header, body, footer modules.

      const headerModules = newModulesFeatures.filter(
        (arg: ModuleSystemType) => arg.sectionId == 1
      );

      const bodyModules = newModulesFeatures.filter(
        (arg: ModuleSystemType) => arg.sectionId == 2
      );

      const footerModules = newModulesFeatures.filter(
        (arg: ModuleSystemType) => arg.sectionId == 3
      );

      return {
        ...state,
        header: {
          modules: headerModules,
        },
        body: {
          modules: bodyModules,
        },
        footer: {
          modules: footerModules,
        },
      };

    case actionTypes.FETCH_HEADER_MODULES:
      return {
        ...state,
        header: {
          modules: action.payload.data.modules.header,
        },
      };

    case actionTypes.FETCH_BODY_MODULES:
      return {
        ...state,
        body: {
          modules: action.payload.data.modules.body,
        },
      };

    case actionTypes.FETCH_FOOTER_MODULES:
      return {
        ...state,
        footer: {
          modules: action.payload.data.modules.footer,
        },
      };

    /* Process modules and features that we want to update. */
    case actionTypes.MUTATE_MODULES_FEATURES:
      return {
        ...state,
        header: {
          modules: getModules(action.payload.data.moduleFeatures, 1),
        },
        body: {
          modules: getModules(action.payload.data.moduleFeatures, 2),
        },

        footer: {
          modules: getModules(action.payload.data.moduleFeatures, 3),
        },
      };

    default:
      return state;
  }
};
export default reducer;
