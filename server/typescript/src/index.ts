import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { 
  buildSchema, 
  ObjectType, Field, InputType,
  Resolver, Query, Mutation, Arg
} from 'type-graphql';

// || ========== Bootstrap Server Function ========== ||

async function bootstrap(resolvers) {
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);  
}

// || ========== In-Memory Database ========== ||

const spaceshipGenericDataBase = [
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

@InputType()
class SpaceshipGenericInput {
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
    return spaceshipGenericDataBase;
  }

  @Query(() => SpaceshipGeneric)
  spaceshipGeneric(@Arg("id") id: number) {
    return spaceshipGenericDataBase.find(spaceshipGeneric => spaceshipGeneric.id === id);
  }

  @Mutation(() => SpaceshipGeneric)
  addSpaceshipGeneric(@Arg("input") input: SpaceshipGenericInput) {
    const id = spaceshipGenericDataBase.length + 1;
    
    const newSpaceshipGeneric = {
      id: id,
      brand: input.brand,
      model: input.model,
      capacity: input.capacity,
    }

    spaceshipGenericDataBase.push(newSpaceshipGeneric);
    return spaceshipGenericDataBase[id - 1];
  }

  @Mutation(() => SpaceshipGeneric)
  updateSpaceshipGeneric(
    @Arg("id") id: number,
    @Arg("input") input: SpaceshipGenericInput
  ) {
    const updatedSpaceshipGeneric = {
      id: id,
      brand: input.brand,
      model: input.model,
      capacity: input.capacity,
    }

    spaceshipGenericDataBase[id - 1] = updatedSpaceshipGeneric;
    return spaceshipGenericDataBase[id - 1];
  }

  // * works but not in use due to current ID implementation
  // @Mutation(() => String)
  // deleteSpaceshipGeneric(@Arg("id") id: number) {
  //   spaceshipGenericDataBase.splice(id - 1, 1);
  //   return `SpaceshipGeneric with ID: ${id} was deleted`;
  // }
}

const resolvers = [SpaceshipGenericResolver] as const;


// || ========== Start Server ========== ||

bootstrap(resolvers);
