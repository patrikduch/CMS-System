import { connect, ConnectedComponent } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* Redux actions to dispatch. */
import * as articlesSystemActions from "../../actions/articles/articles-actions";
import * as featureSystemActions from "../../actions/features/features-system-actions";
import * as moduleSystemActions from "../../actions/module-system/module-system-actions";
import * as projectDetailActions from "../../actions/project-detail/project-detail-actions";
import * as ownerInfoActions from "../../actions/owner-info/owner-info-actions";
import * as socialIconsActions from "../../actions/social-icons/social-icons-actions";

/* Components to connect. */
import Error404 from "../../../connected-components/errors/Error404";

/* Type checking. */
import Error404Props from "../../../../typescript/types/shared/connected-components/errors/Error404-Props";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    articlesSystemActions: bindActionCreators(articlesSystemActions, dispatch),
    moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
    ownerInfoActions: bindActionCreators(ownerInfoActions, dispatch),
    featureSystemActions: bindActionCreators(featureSystemActions, dispatch),
    socialIconsActions: bindActionCreators(socialIconsActions, dispatch),
  };
};

const Error404Container = connect(
  null,
  mapDispatchToProps
)(
  Error404 as ConnectedComponent<
    React.FC<Error404Props>,
    Pick<Error404Props, "children">
  >
);

export { Error404Container };
