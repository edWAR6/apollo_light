import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: createHttpLink({uri: 'https://snowtooth.moonhighway.com'}),
  cache: new InMemoryCache()
});

const query = gql`
  query {
    allLifts {
      name
    }
  }
`;

client.query({
  query
}).then(console.log);

console.log(client);
