import { createSelector } from "reselect";
import SocialIconsTypeState from "../../../../typescript/types/shared/connected-components/social-icons/Social-Icons-Type-State";

const socialIconsState = (state: SocialIconsTypeState) =>
  state.socialIconsReducer;

const getSocialIcons = createSelector([socialIconsState], (s) => s.socialIcons);

export { getSocialIcons };
