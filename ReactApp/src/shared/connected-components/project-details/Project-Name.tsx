import React from "react";

/* Utils helpers. */
import _ from "lodash";


import gql from 'graphql-tag';
import { Query } from "react-apollo";


const GET_PROJECTNAME = gql`
  query {
    projectDetail {
      projectName
    } 
  }
`;



class ProjectName extends React.Component {

  state = {
    isMounted: false
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    })
  }


  render() {

    if (!this.state.isMounted) return null;

    return (
      <>
      <Query query={GET_PROJECTNAME}>
        {({ loading, data }: any) => {
          if (!loading && data != null) {
            debugger;
          return <>{data.projectDetail.projectName}</>;
          } else {
            return <div></div>;
          }
        }}
      </Query>

      </>
    )
  }

}


export default ProjectName;



/*

React.memo(
  ProjectName,
  (previousProps: ProjectNameTypeProps, nextProps: ProjectNameTypeProps) => {
    const isEqual =
      previousProps.projectDetail.projectName ===
      nextProps.projectDetail.projectName;

    return isEqual;
  }
);

*/