import { connect } from "react-redux";
import { withRouter } from "react-router";

import ModuleList from "../../../connected-components/module-system/Module-Admin-List";

/* Actions */
import * as moduleSystemActions from "../../actions/module-system/module-system-actions";
import * as featureActions from "../../actions/features/features-system-actions";
import { bindActionCreators, Dispatch } from "redux";
import FeatureSystemModel from "../../../../typescript/types/app/models/Feature-System-Model";
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";

/* mapping actions to the specific component */
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators(moduleSystemActions, dispatch),
    featureActions: bindActionCreators(featureActions, dispatch)
  };
};

/**
 *  @interface IState => Contract for state object for mapStateToProps method.
 */
interface IState {
  featureSystem: {
    features: FeatureSystemModel[];
  };
  moduleSystem: {
    header: {
      modules: ModuleSystemType[];
    };

    body: {
      modules: ModuleSystemType[];
    };

    footer: {
      modules: ModuleSystemType[];
    };

    totalCount: number;
  };
}

/* mapping state from reducer to the  specific component */
const mapStateToProps = (state: IState) => {
  const mergedModulesFeatures = (state.featureSystem.features as [])
    .concat(state.moduleSystem.header.modules as [])
    .concat(state.moduleSystem.footer.modules as [])
    .concat(state.moduleSystem.body.modules as []);

  return {
    modules: state.moduleSystem,
    features: mergedModulesFeatures,
    totalCount: state.moduleSystem.totalCount
  };
};

const ModuleAdminListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModuleList)
);

export { ModuleAdminListContainer };
