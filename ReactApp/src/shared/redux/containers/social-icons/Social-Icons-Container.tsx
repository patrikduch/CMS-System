import { connect } from "react-redux";
import SocialIconsList from "../../../connected-components/modules/body/social-icons/Social-Icons-List";

/* actions. */
import * as socialIconsActions from "../../actions/social-icons/social-icons-actions";
import { bindActionCreators, Dispatch } from "redux";
import SocialIconModelType from "../../../../typescript/types/app/models/Social-Icon-Model-Type";
import SocialIconsTypeState from "../../../../typescript/types/shared/connected-components/social-icons/Social-Icons-Type-State";

/* Reselect selectors. */
import { getSocialIcons } from "../../selectors/social-icons/social-icons-selectors";

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(socialIconsActions, dispatch),
  };
};

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: SocialIconsTypeState) => {
  return {
    ...state,
    socialIcons: getSocialIcons(state),
  };
};

/**
 * Creation of Connected Redux component for displaying social icons.
 */
const SocialIconsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialIconsList);

export { SocialIconsContainer };
