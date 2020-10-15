import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";
import SayingHelloQuery from "../greetings/sayinghello/sayinghello.resolver";
import SayingByeQuery from "../greetings/sayingBye/sayingBye.resolver";

const resolvers = loadFilesSync(
  path.join(__dirname, "../greetings/**/*.resolver.*")
);

// const resolvers = [SayingHelloQuery, SayingByeQuery];

// console.log(`raw resolvers ${resolvers}`);

const Resolversmerged = mergeResolvers(resolvers);
// console.log(` resolvers merged: ${Resolversmerged.Query.sayGoodbye}`);


export default Resolversmerged;
