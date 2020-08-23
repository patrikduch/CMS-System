import React from "react";
import { connect, ConnectedComponent } from "react-redux";

// Redux actions to map with connected components
import * as projectDetailActions from "../../../redux/actions/project-detail/project-detail-actions";

// Components to connect
import ProjectName from "../../../connected-components/project-details/Project-Name";
import AdminProjectName from "../../../connected-components/admin/project-details/Project-Name";

// Type checking
import ProjectNameTypeProps from "../../../../typescript/types/shared/connected-components/project-details/Project-Name-Type-Props";
import { bindActionCreators, Dispatch } from "redux";
import { getProjectDetail } from "../../selectors/project-details/project-detail-selectors";

/**
 * @function mapStateToProps => Mapping state from reducer to the  specific component.
 * @param state => State passed into props.
 */
const mapStateToProps = (state: { projectDetail: { projectName: string } }) => {
  return {
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
  };
};

/**
 * Creation of Connected Redux component for displaying project name.
 */
const ProjectNameContainer = connect(
  mapStateToProps,
  null
)(
  (ProjectName as unknown) as ConnectedComponent<
    React.FC<ProjectNameTypeProps>,
    Pick<{}, never>
  >
);

/**
 * Creation of Connected Redux componet for project name manipulation.
 */
const AdminProjectNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProjectName);

export { ProjectNameContainer, AdminProjectNameContainer };
