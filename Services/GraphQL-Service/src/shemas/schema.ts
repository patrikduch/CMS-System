import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ProjectDetailSchema from '../shemas/project-details/Project-Detail-Schema';


const projectdetail = {
    name: 'CMS system'
};


const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projectDetail: {

            type: ProjectDetailSchema,

            resolve: (_) => {
                return projectdetail;
            }
        }
    }

})


const UserSchema = new GraphQLSchema({
    query: RootQuery
});


export default UserSchema;

