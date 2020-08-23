import SocialIconModelType from "../../../app/models/Social-Icon-Model-Type";

/**
 * @type SocialIconsTypeState => Type anotation for state object of Social icons container connected component.
 */
type SocialIconsTypeState = {
  socialIconsReducer: {
    socialIcons?: SocialIconModelType[];
  };
};

export default SocialIconsTypeState;
