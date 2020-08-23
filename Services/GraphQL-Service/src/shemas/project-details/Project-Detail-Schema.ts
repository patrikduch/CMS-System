import { GraphQLObjectType, GraphQLString } from 'graphql';


const ProjectDetailType =  new GraphQLObjectType({
    name: 'ProjectDetail',
    fields: {
        name: { type: GraphQLString},
    }
})



export default ProjectDetailType;