import { addResolversToSchema, mergeSchemas, mergeSchemasAsync } from "@graphql-tools/schema";
import typedefmerged from "../api/mergedtypedefs/index";
import Resolversmerged from "../api/mergedresolvers/index";

// console.log(`resolvers merged : ${Resolversmerged.Query}`);

// const schemawithtypedefresolver = addResolversToSchema({
//   schema: typedefmerged,
//   resolvers: Resolversmerged,
// });
// const schemawithtypedefresolver = mergeSchemas({
//   schema: typedefmerged,
//   resolvers: Resolversmerged,
// });
// console.log(`merged schema : ${schemawithtypedefresolver}`);

// export default schemawithtypedefresolver;
