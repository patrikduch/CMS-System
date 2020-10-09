import compress from "koa-compress";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import staticServe from "koa-static";
import Koa, { Context } from "koa";
import { responseHandler } from "../../../util/server/koa/handlers/promise/responseHandler";


// GraphQL
import graphqlHTTP from 'koa-graphql';
import graphqlMount from 'koa-mount';
import schema from '../../../schemas';


const setup = (app: Koa<Context, {}>) => {
  app
    .use(
      compress({
        threshold: 2048,
      })
    )
    .use(cors()) // Cross site request forgery
    .use(bodyParser()) // Processing post request (etc.)
    .use(responseHandler) // Response handler for handling promises

    .use(staticServe(".")). // Servubg static files


    use(graphqlMount('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true
    })));

};

export default {
  setup,
};
