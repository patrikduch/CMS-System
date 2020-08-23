/* Import of all actions types */
import * as actionTypes from "../../actions/action-types";
/* Import initial state configuration */
import initialState from "../initial-state";

/* Type checking */
import ReduxActionType from "../../../../typescript/types/shared/redux/Redux-Action-Props-Type";
import SocialIconType from "../../../../typescript/types/app/models/Social-Icon-Model-Type";

/* Reducer`s payload type. */
type ActionPayloadType = {
  data: {
    socialIcons: SocialIconType[];
  };
};

const reducer = (
  state = initialState.socialIcons,
  action: ReduxActionType<ActionPayloadType>
) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_SOCIAL_ICONS:
      return {
        ...state,
        socialIcons: action.payload.data.socialIcons
      };

    default:
      return state;
  }
};
export default reducer;
