import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(
  path.join(__dirname, "../greetings/**/*.graphql")
);

const typedefmerged = mergeTypeDefs(typesArray);

// console.log(`typedefs merged : ${JSON.stringify(typedefmerged, null, 2)}`);

export default typedefmerged;
