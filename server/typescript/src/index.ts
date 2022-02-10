import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { Arg, Query, Resolver, ObjectType, Field, buildSchema } from 'type-graphql';

// || ========== Bootstrap Server Function ========== ||

async function bootstrap(resolvers) {
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);  
}

// || ========== In-Memory Database ========== ||

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

// || ========== Schema and Resolvers (Type-GraphQL) ========== ||

@ObjectType()
class SpaceshipGeneric {
  @Field()
  id: number;

  @Field()
  brand: string;

  @Field()
  model: string;

  @Field()
  capacity: number;
} 

@Resolver()
class SpaceshipGenericResolver {
  constructor() {};

  @Query(() => [SpaceshipGeneric])
  spaceshipGenerics() {
    return spaceshipGenerics;
  }

  @Query(() => SpaceshipGeneric)
  spaceshipGeneric(@Arg("id") id: number) {
    return spaceshipGenerics.find(spaceshipGeneric => spaceshipGeneric.id === id);
  }
}

const resolvers = [SpaceshipGenericResolver] as const;


// || ========== Start Server ========== ||

bootstrap(resolvers);
