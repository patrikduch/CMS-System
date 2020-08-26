import gql from 'graphql-tag';

export const PROJECTNAME_QUERY = gql`
query{
    projectDetail {
      name
    }
    
  }
`;