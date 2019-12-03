import { importSchema } from 'graphql-import';
import * as path from 'path';

const typeDefs = importSchema( path.join( __dirname, './schema.graphql'));

export { typeDefs }