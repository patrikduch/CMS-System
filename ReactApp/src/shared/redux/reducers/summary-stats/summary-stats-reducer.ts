/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";
/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking */
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/**
 * @type ActionPayloadType => Reducer`s payload type.
 */
type ActionPayloadType = {
  data: {
    articles: {
      totalCount: number;
    };
    modules: {
      totalCount: number;
      enabledCount: number;
    };

    features: {
      totalCount: number;
      enabledCount: number;
    };

    gallerySystem: {
      totalCount: number;
    };
  };
};

/**
 * @function reducer = Reducer that enables manipulation on summary stats.
 * @param state  => Passed state object.
 * @param action => Action that has been passed into this reducer.
 */
const reducer = (
  state = initialState.summaryStats,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_DASHBOARD_SUMMARY_STATS:
      return {
        ...state,
        articles: {
          totalCount: action.payload.data.articles.totalCount,
        },

        modules: {
          totalCount: action.payload.data.modules.totalCount,
          enabledCount: action.payload.data.modules.enabledCount,
        },

        features: {
          totalCount: action.payload.data.features.totalCount,
          enabledCount: action.payload.data.features.enabledCount,
        },

        gallerySystem: {
          photos: {
            totalCount: action.payload.data.gallerySystem.totalCount,
          },
        },
      };

    default:
      return state;
  }
};
export default reducer;
