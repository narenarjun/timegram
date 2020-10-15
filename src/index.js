import "@babel/polyfill/noConflict";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import logger from "morgan";
import typedefmerged from "./api/mergedtypedefs/index";
import Resolversmerged from "./api/mergedresolvers/index";

const Port = process.env.PORT || 6000;
const Path = process.env.GRAPHQLPATH
  ? `/${process.env.GRAPHQLPATH}`
  : "/graphql";

const app = express();


const server = new ApolloServer({
  typeDefs: typedefmerged,
  resolvers: Resolversmerged,
});
app.use(logger("dev"));

server.applyMiddleware({ app, path: Path });

const GraphqlServer = app.listen({ port: Port }, () => {
  console.log(
    `Server is running at http://localhost:${Port}${server.graphqlPath} 🚀🚀🚀 `
  );
});
