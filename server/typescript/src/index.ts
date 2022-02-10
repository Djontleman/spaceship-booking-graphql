import "reflect-metadata";
import { connect, Schema, Types, model } from 'mongoose';
import { 
  buildSchema, 
  ObjectType, Field, InputType, ID,
  Resolver, Query, Mutation, Arg
} from 'type-graphql';
import { ApolloServer } from 'apollo-server';

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

// || ========== MongoDB Models ========== ||

interface spaceshipGeneric {
  brand: string;
  model: string;
  capacity: number;
}

const spaceshipGenericSchema = new Schema<spaceshipGeneric>({
  brand: { type: String },
  model: { type: String },
  capacity: { type: Number },
})

const SpaceshipGenericModel = model<spaceshipGeneric>('spaceship_generics', spaceshipGenericSchema);


// || ========== Schema and Resolvers (Type-GraphQL) ========== ||

@ObjectType()
class SpaceshipGeneric {
  @Field(type => ID)
  id: string;

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
  async spaceshipGenerics() {
    return SpaceshipGenericModel.find({});
  }

  @Query(() => SpaceshipGeneric)
  async spaceshipGeneric(@Arg("id") id: string) {
    return SpaceshipGenericModel.findById(id);
  }

  @Mutation(() => SpaceshipGeneric)
  async addSpaceshipGeneric(@Arg("input") input: SpaceshipGenericInput) {
    const newSpaceshipGeneric = new SpaceshipGenericModel({
      brand: input.brand,
      model: input.model,
      capacity: input.capacity,
    });

    newSpaceshipGeneric.id = newSpaceshipGeneric._id;

    await newSpaceshipGeneric.save();
    return SpaceshipGenericModel.findById(newSpaceshipGeneric.id);
  }

  @Mutation(() => SpaceshipGeneric)
  async updateSpaceshipGeneric(
    @Arg("id") id: string,
    @Arg("input") input: SpaceshipGenericInput
  ) {
    return SpaceshipGenericModel.findByIdAndUpdate(id, input, { new: true });
  }

  @Mutation(() => String)
  async deleteSpaceshipGeneric(@Arg("id") id: string) {
    await SpaceshipGenericModel.findOneAndDelete({ _id: id });
    return `SpaceshipGeneric with ID: ${id} was deleted`;
  }
}

const resolvers = [SpaceshipGenericResolver] as const;


// || ========== Start Server ========== ||

bootstrap(resolvers);
