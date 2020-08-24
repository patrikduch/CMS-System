import 'isomorphic-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';

import express, { Response, Request } from "express";

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  ApolloProvider,
  getDataFromTree,
} from 'react-apollo';


import Html from './lib/server/ssr/Html';


import App from './App';


/* Server instance */
const app = express();

/* Serve up static files from this directory */
app.use(express.static("dist"));


/*
  All routes are matched to this rule
*/
app.get("*", async function (req: Request, res: Response) {
  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://graphql-testservice-4291.rostiapp.cz/graphql',
    }),
    cache: new InMemoryCache(),
  });
  const app = (
    <ApolloProvider client={client}>
      <Router location={req.url} context={{}}>
        <App />
      </Router>
    </ApolloProvider>
  );
  // Executes all graphql queries for the current state of application
  await getDataFromTree(app);
  // Extracts apollo client cache 
  const state = client.extract();
  const content = ReactDOMServer.renderToStaticMarkup(app);
  const helmet = Helmet.renderStatic();

  res.status(200);
  res.send(`<!doctype html>${Html(content, helmet, state)}`);
  res.end();
});

/*
  App listening 
  (PORT 8080 is port needed to be deployed on production)
*/
app.listen(8080);
