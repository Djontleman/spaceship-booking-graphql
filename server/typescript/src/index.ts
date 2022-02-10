import { ApolloServer, gql } from 'apollo-server';

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);  
}



const spaceshipGenerics = [
  {
    id: 1,
    brand: 'SpaceX',
    model: 'Falcon 9',
    capacity: 5,
  },
  {
    id: 2,
    brand: 'SpaceX',
    model: 'Falcon Heavy',
    capacity: 8,
  }
]

const typeDefs = gql`
  type SpaceshipGeneric {
    id: Int
    brand: String
    model: String
    capacity: Int
  }

  type Query {
    spaceshipGenerics: [SpaceshipGeneric]
    spaceshipGeneric(id: Int): SpaceshipGeneric
  }
`;

const resolvers = {
  Query: {
    spaceshipGenerics: () => {
      return spaceshipGenerics;
    },
    spaceshipGeneric: (_, { id }) => {
      return spaceshipGenerics.find(spaceshipGeneric => spaceshipGeneric.id === id);
    },
  }
  
}


startApolloServer(typeDefs, resolvers);
