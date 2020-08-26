
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ProjectDetailSchema from '../schemas/project-detail';


import IoC from "../ioc/inversify-config";
import { TYPES } from "../ioc/types";
import IUnitOfWork from '../typescript/interfaces/uow/IUnitOfWork';
import ProjectDetail from '../models/project-detail/ProjectDetail';
import OwnerInfoType from './owner-info';
import OwnerInfo from '../models/project-detail/OwnerInfo';

const Uow = IoC.get<IUnitOfWork>(TYPES.IUnitOfWork);

const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projectDetail: {

            type: ProjectDetailSchema,

            resolve: async (_) => {

                const projectDetailResult = await Uow.getRepository(ProjectDetail).findFirst();

                return projectDetailResult;
            }
        },

        ownerInfo: {

            type: OwnerInfoType,

            resolve: async(_) => {
                const ownerInfoResult = await Uow.getRepository(OwnerInfo).findFirst();
                return ownerInfoResult;
            }
        }
    }

})


const schema = new GraphQLSchema({
    query: RootQuery
});


export default schema;