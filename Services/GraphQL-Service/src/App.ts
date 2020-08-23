import cors from 'cors';

import  express  from 'express';
import  { graphqlHTTP } from 'express-graphql';
import UserSchema from './shemas/schema';

const app = express();

app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema: UserSchema,
    graphiql: true,
}));

app.listen(8080, () =>  {
    console.log("Listening on port 8080")

});