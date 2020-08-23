import "babel-polyfill";
// Apollo requirements
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
// React-Redux requirements
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import * as Bundles from "./Bundles";
import Routes from "./Routes";

const bundleSet: any = Bundles;
import window from "global";

/* Redux */
import getClientStore from "./lib/client/redux/store/get-client-store";

/* SEO (Helmet) */
import { HelmetProvider } from "react-helmet-async";

/* Styled components integration */
import StyledInjectorContainer from "./shared/redux/containers/styled-components/Styled-Injector-Container";

/*
  Type checking
*/
import IWindowObject from "./typescript/interfaces/shared/dom/IWindowObject";

const helmetContext = {};

const splitPoints = (window as IWindowObject).splitPoints || [];

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://graphql-testservice-4291.rostiapp.cz/graphql"
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});



Promise.all(
  splitPoints.map((chunk: string) => bundleSet[chunk].loadComponent())
).then(() => {
  const mountNode = document.getElementById("app");

  ReactDOM.hydrate(
            <HelmetProvider context={helmetContext}>
              <ApolloProvider client={apolloClient}>
                  <Provider store={getClientStore(window)}>
                    <StyledInjectorContainer>
                        <BrowserRouter>{renderRoutes(Routes as RouteConfig[])}</BrowserRouter>
                    </StyledInjectorContainer>
                  </Provider>
              </ApolloProvider>
            </HelmetProvider>
          ,
    mountNode
  );
});
