import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* All redux actions that will be sent from container to the specific component. */
import * as featureSystemActions from "../../actions/features/features-system-actions";

/* Component to connect. */
import FeatureSystemChecker from "../../../connected-components/feature-system/Feature-System-Checker";
import FeatureSystemModel from "../../../../typescript/types/app/models/Feature-System-Model";

/* Reselect selectors */
import { getFeatures } from "../../selectors/feature-system/features-selectors";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: {
  featureSystem: { features: FeatureSystemModel[] };
}) => {
  return {
    features: getFeatures(state.featureSystem),
  };
};

/**
 * @function mapDispatchToProps => Mapping actions to the specific component.
 * @param dispatch => Dispatch method for triggering incoming Redux store manipulation.
 */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(featureSystemActions, dispatch),
  };
};

/**
 * Creation of Redux connected component for displaying only enabled features.
 */
const FeatureSystemCheckerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureSystemChecker);


export default FeatureSystemCheckerContainer;