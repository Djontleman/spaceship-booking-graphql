import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, ID, InputType } from "type-graphql";

import { SpaceshipModel } from "./spaceshipModel.schema";

// || ========== Schema Type ========== ||

@ObjectType() 
export class Spaceship {
  @Field(type => ID)
  id: string;

  @Field() 
  @prop()
  callSign: string;

  @Field(type => ID)
  @prop({ ref: () => SpaceshipModel })
  model: string;
}

// || ========== Input Types ========== ||

@InputType() // type-graphql input
export class SpaceshipInput implements Partial<Spaceship>{
  @Field()
  callSign: string;

  @Field(type => ID)
  model: string;
}

// construct model with typegoose
export const Spaceships = getModelForClass(Spaceship); 