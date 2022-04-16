import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // uri: process.env.REACT_APP_API_URL as any,
  // uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
  // uri: `http://localhost:9000/graphql` as any,
  uri: `https://car-rental-application-be.herokuapp.com/graphql` as any,
  cache: new InMemoryCache(),
});
