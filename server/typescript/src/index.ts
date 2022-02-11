import "reflect-metadata";
import { connect } from 'mongoose';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers/index';

// || ========== Bootstrap Server Function ========== ||

async function bootstrap(resolvers) {
  // connect to MongoDb database
  await connect('mongodb://localhost/spaceshipBookingDB')
    .catch(err => console.log(err));

  // build schema using resolvers
  const schema = await buildSchema({ resolvers });

  // build Apollo server
  const server = new ApolloServer({ schema });

  // listen on port
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);  
}

// || ========== Start Server ========== ||

bootstrap(resolvers);
