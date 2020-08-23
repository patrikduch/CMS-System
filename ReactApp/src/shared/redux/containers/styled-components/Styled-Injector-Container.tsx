import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

/* 
  All redux actions that will be sent from container to the specific component.
*/
import * as projectDetailActions from "../../../redux/actions/project-detail/project-detail-actions";

/*
  Component where state and actions are passed.
*/
import StyledInjector from "../../../connected-components/styled-components/Styled-Injector";

/* Reselect selectors. */

import { getProjectDetailThemes } from "../../selectors/project-details/project-detail-selectors";

/**
 * @interface IState => Container`s state interface.
 */
interface IState {
  projectDetail: {
    themeCode: string;
  };
}

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: IState) => {
  return {
    projectDetail: getProjectDetailThemes(state.projectDetail),
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
 * Creation of Connected Redux component for stylization setup of public side.
 */
const StyledInjectorContainer = connect(mapStateToProps, mapDispatchToProps)(StyledInjector);


export default StyledInjectorContainer;

