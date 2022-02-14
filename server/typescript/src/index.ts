import "reflect-metadata";
import { connect } from 'mongoose';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers/index';

const MONGO_DB_URL = 'mongodb://localhost/spaceshipBookingDB';

// || ========== Bootstrap Server Function ========== ||

async function bootstrap() {
  try {
    // connect to MongoDb database
    await connect(MONGO_DB_URL);
    console.log("Connected to Database");
    
    // build schema using resolvers
    const schema = await buildSchema({ resolvers });
    
    // build Apollo server
    const server = new ApolloServer({ schema });
    
    // listen on port
    const { url } = await server.listen();
    console.log(`🚀 Server ready at ${url}`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// || ========== Start Server ========== ||

bootstrap();
