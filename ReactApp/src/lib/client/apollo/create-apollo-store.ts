import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apolloClient = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: new HttpLink({
    uri: 'http://graphql-testservice-4291.rostiapp.cz/graphql',
  }),
  cache: new InMemoryCache().restore((window as any).__APOLLO_STATE__),
});

export default apolloClient;