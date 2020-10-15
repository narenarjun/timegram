import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const resolvers = loadFilesSync(
  path.join(__dirname, "../greetings/**/*.resolver.*")
);

const Resolversmerged = mergeResolvers(resolvers);

export default Resolversmerged;
