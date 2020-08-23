import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* Redux actions to dispatch. */
import * as projectDetailActions from "../../../../redux/actions/project-detail/project-detail-actions";

/* Component to connect */
import ThemeChooser from "../../../../connected-components/admin/theme/Theme-Chooser";

/* Type checking. */
import ThemeChooserModelType from "../../../../../typescript/types/app/models/Theme-Chooser-Model-Type";

/* Reselect selectors. */
import { getProjectThemes } from "../../../selectors/project-details/project-detail-selectors";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: {
  projectDetail: {
    themes: ThemeChooserModelType[];
  };
}) => {
  return {
    themes: getProjectThemes(state.projectDetail),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(projectDetailActions, dispatch),
  };
};

/**
 * Creation of Redux connected component for toggling currently selected theme.
 */
const ThemeChooserContainer = connect(mapStateToProps, mapDispatchToProps)(ThemeChooser);

export default ThemeChooserContainer;
