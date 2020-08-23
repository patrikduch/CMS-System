import { connect, ConnectedComponent } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as projectDetailActions from "../../actions/project-detail/project-detail-actions";
import * as socialIconActions from "../../actions/social-icons/social-icons-actions";
import * as moduleSystemActions from "../../actions/module-system/module-system-actions";

// Module system header component which will be connected from header container.
import ModuleSystemHeader from "../../../connected-components/module-system/Module-System-Header";

// Module system body component which will be connected from body container.
import ModuleSystemBody from "../../../connected-components/module-system/Module-System-Body";

/* Module system footer component which will be connected from footer container */
import ModuleSystemFooter from "../../../connected-components/module-system/Module-System-Footer";

/* Type checking. */
import ModuleSystemType from "../../../../typescript/types/app/models/Module-System-Type";
import ModuleSystemFooterProps from "../../../../typescript/types/shared/connected-components/module-system/Module-System-Footer-Props";

/* State contact for footer container. */
interface IFooterState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystem: {
    footer: {
      modules: ModuleSystemType[];
    };
  };
}

/* State contact for header container. */
interface IHeaderState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystem: {
    header: {
      modules: ModuleSystemType[];
    };
  };
}

/* State contact for body container. */
interface IBodyState {
  projectDetail: {
    name: string;
    themeCode: string;
  };

  moduleSystem: {
    body: {
      modules: ModuleSystemType[];
    };
  };
}

/* Module-system header properties for Redux to connect */
const headerProps = {
  mapStateToProps: (state: IHeaderState) => {
    return {
      modules: state.moduleSystem.header.modules,
      projectDetail: state.projectDetail,
    };
  },

  mapDispatchToProps: (dispatch: Dispatch) => {
    return {
      actions: bindActionCreators(moduleSystemActions, dispatch),
      projectDetailActions: bindActionCreators(projectDetailActions, dispatch),
      moduleSystemActions: bindActionCreators(moduleSystemActions, dispatch),
    };
  },
};

/* Module-system body properties for Redux connect */
const bodyProps = {
  mapStateToProps: (state: IBodyState) => {
    return {
      modules: state.moduleSystem.body.modules,
      projectDetail: state.projectDetail,
    };
  },

  mapDispatchToProps: (dispatch: Dispatch) => {
    return {
      actions: bindActionCreators(moduleSystemActions, dispatch),
      socialIconActions: bindActionCreators(socialIconActions, dispatch),
    };
  },
};

// Module-system footer properties for Redux to connect
const footerProps = {
  mapStateToProps: (state: IFooterState) => {
    return {
      modules: state.moduleSystem.footer.modules,
      projectDetail: state.projectDetail,
    };
  },

  mapDispatchToProps: (dispatch: Dispatch) => {
    return {
      actions: bindActionCreators(moduleSystemActions, dispatch),
    };
  },
};

const ModuleSystemBodyContainer = connect(
  bodyProps.mapStateToProps,
  bodyProps.mapDispatchToProps
)(ModuleSystemBody);

const ModuleSystemHeaderContainer = connect(
  headerProps.mapStateToProps,
  headerProps.mapDispatchToProps
)(ModuleSystemHeader);

const ModuleSystemFooterContainer = connect(
  footerProps.mapStateToProps,
  footerProps.mapDispatchToProps
)(
  ModuleSystemFooter as ConnectedComponent<
    React.FC<ModuleSystemFooterProps>,
    Pick<ModuleSystemFooterProps, "modules" | "projectDetail">
  >
);

export {
  ModuleSystemBodyContainer,
  ModuleSystemHeaderContainer,
  ModuleSystemFooterContainer,
};
