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

interface ISpaceshipModel {
  make: string;
  name: string;
  capacity: number;
}

const spaceshipModelSchema = new Schema<ISpaceshipModel>({
  make: { type: String },
  name: { type: String },
  capacity: { type: Number },
})

const SpaceshipModels = model<ISpaceshipModel>('spaceship_models', spaceshipModelSchema);


// || ========== Schema and Resolvers (Type-GraphQL) ========== ||

@ObjectType()
class SpaceshipModel {
  @Field(type => ID)
  id: string;

  @Field()
  make: string;

  @Field()
  name: string;

  @Field()
  capacity: number;
} 

@InputType()
class SpaceshipModelInput {
  @Field()
  make: string;

  @Field()
  name: string;

  @Field()
  capacity: number;
}

@Resolver()
class SpaceshipModelResolver {
  constructor() {};

  @Query(() => [SpaceshipModel])
  async allSpaceshipModels() {
    return SpaceshipModels.find({});
  }

  @Query(() => SpaceshipModel)
  async spaceshipModel(@Arg("id") id: string) {
    return SpaceshipModels.findById(id);
  }

  @Mutation(() => SpaceshipModel)
  async addSpaceshipModel(@Arg("input") input: SpaceshipModelInput) {
    const newSpaceshipModel = new SpaceshipModels({
      make: input.make,
      name: input.name,
      capacity: input.capacity,
    });

    newSpaceshipModel.id = newSpaceshipModel._id;

    await newSpaceshipModel.save();
    return SpaceshipModels.findById(newSpaceshipModel.id);
  }

  @Mutation(() => SpaceshipModel)
  async updateSpaceshipModel(
    @Arg("id") id: string,
    @Arg("input") input: SpaceshipModelInput
  ) {
    return SpaceshipModels.findByIdAndUpdate(id, input, { new: true });
  }

  @Mutation(() => String)
  async deleteSpaceshipModel(@Arg("id") id: string) {
    await SpaceshipModels.findOneAndDelete({ _id: id });
    return `Spaceship Model with ID: ${id} was deleted`;
  }
}

const resolvers = [SpaceshipModelResolver] as const;


// || ========== Start Server ========== ||

bootstrap(resolvers);
