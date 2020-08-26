import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


const ProjectDetailType =  new GraphQLObjectType({
    name: 'ProjectDetail',
    fields: {
        id: {type: GraphQLInt},
        name: { type: GraphQLString},
        domainUrl: {type: GraphQLString}
    }
})



export default ProjectDetailType;