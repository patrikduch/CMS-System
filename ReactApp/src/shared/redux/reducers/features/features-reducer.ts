/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";

/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking. */
import FeatureSystemModel from "../../../../typescript/types/app/models/Feature-System-Model";
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";

/**
 * @type ActionPayloadType =>  Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  data: {
    feature: FeatureSystemModel;
    features: FeatureSystemModel[];
  };
};

const reducer = (
  state = initialState.featureSystem,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_ENABLED_FEATURES:
      return {
        features: action.payload.data.features
      };

    case actionTypes.ADD_FEATURE:
      return {
        features: action.payload
      };

    case actionTypes.FETCH_ALL_FEATURES:
      return {
        features: action.payload.data.features
      };

    /* 
      Toggle state of chossen feature. Disabled to Enabled and vice versa.
    */
    case actionTypes.TOGGLE_FEATURE_STATE:
      const result = state.features.find((arg: FeatureSystemModel) => {
        if (arg.id != action.payload.data.feature.id) {
          return undefined;
        } else {
          return arg.id == action.payload.data.feature.id;
        }
      }) as FeatureSystemModel | undefined;

      const newArray: FeatureSystemModel[] = [];

      if (result != null) {
        const currentState = result.isEnabled;
        result.isEnabled = !currentState;
        newArray.push(result);
      }

      state.features.forEach((arg: FeatureSystemModel) => {
        if (arg.id != action.payload.data.feature.id) {
          newArray.push(arg);
        }
      });

      /* Features */
      newArray.filter((arg: FeatureSystemModel) => arg.isFeature);

      return {
        features: newArray
      };

    default:
      return state;
  }
};
export default reducer;
