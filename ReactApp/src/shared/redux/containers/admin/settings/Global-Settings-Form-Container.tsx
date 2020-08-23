import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as projectDetailActions from "../../../actions/project-detail/project-detail-actions";
import * as ownerInfoActions from "../../../actions/owner-info/owner-info-actions";

/* Component to connect. */
import GlobalSettingsForm from "../../../../connected-components/admin/settings/Global-Settings-Form";
import { getProjectDetail } from "../../../selectors/project-details/project-detail-selectors";
import { getAdminOwnerInfo } from "../../../selectors/owner-info/owner-info-selectors";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: {
  ownerInfo: {
    companyName: string;
    ico: string;
    dic: string;
    contactInfo: {
      street: string;
      city: string;
      zipCode: string;
      email: string;
    };
  };
  projectDetail: { projectName: string };
}) => {
  return {
    ownerInfo: getAdminOwnerInfo(state),
    projectDetail: getProjectDetail(state.projectDetail),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
  };
};

/**
 *  Creation of Redux connected component for manipulation with general settings (name of project, owner e-mail address etc.)
 */

const GlobalSettingsFormContainer = connect(mapStateToProps, mapDispatchToProps)(GlobalSettingsForm);

export default GlobalSettingsFormContainer;
