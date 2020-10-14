import "@babel/polyfill/noConflict";

import { ApolloServer } from "apollo-server-express";
import express from "express";

const Port = process.env.PORT || 6000;
const Path = process.env.GRAPHQLPATH
  ? `/${process.env.GRAPHQLPATH}`
  : "/graphql";

const typeDefs = `
    type Query{
        hello: String!
    }
`;

const resolvers = {
  Query: {
    hello: () => "Hi",
  },
};

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: Path });

const GraphqlServer = app.listen({ port: Port }, () => {
  console.log(
    `Server is running at http://localhost:${Port}${server.graphqlPath} 🚀🚀🚀 `
  );
});
