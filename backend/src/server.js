import {GraphQLServer} from 'graphql-yoga';
import path from 'path';

/*Al importar la carpeta resolver, él va a buscar directamente
el archivo index */
import resolvers from './graphql/resolvers';

export const server = new GraphQLServer({
  /*typeDefs requiere direcciones absolutas, por lo tanto
  vamos a hacer uso de path de Node para lograr esto */
  typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
  /*resolvers:resolvers queda resumido como está abajo*/
  resolvers
})