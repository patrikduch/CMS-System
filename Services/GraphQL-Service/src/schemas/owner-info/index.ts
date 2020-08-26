import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';


const OwnerInfoType=  new GraphQLObjectType({
    name: 'OwnerInfo',
    fields: {
        id: { type: GraphQLInt },
        companyName: { type: GraphQLString },
        dic: { type: GraphQLString },
        ico: { type: GraphQLString },
        street: { type: GraphQLString },
        city : { type: GraphQLString },
        zipCode : { type: GraphQLString },
        email : { type: GraphQLString },
    }
})



export default OwnerInfoType;