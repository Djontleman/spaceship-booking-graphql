import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";

// || ========== Schema Type ========== ||

@ObjectType() // type-graphQL type
export class SpaceshipModel {
  @Field(type => ID)
  id: string;

  @Field() // type-graphQL property
  @prop() // typegoose property
  make: string;

  @Field()
  @prop()
  name: string;

  @Field(type => Int) // tell graphQL specifically Int
  @prop()
  capacity: number;
}

// || ========== Input Types ========== ||

@InputType() // type-graphql input
export class SpaceshipModelInput implements Partial<SpaceshipModel>{
  @Field()
  make: string;

  @Field()
  name: string;

  @Field(type => Int)
  capacity: number;
}

// construct model with typegoose
export const SpaceshipModels = getModelForClass(SpaceshipModel); 