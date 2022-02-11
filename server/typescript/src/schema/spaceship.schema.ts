import { prop, Ref } from "@typegoose/typegoose";
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

  @Field(type => SpaceshipModel)
  @prop({ ref: () => SpaceshipModel })
  model: Ref<SpaceshipModel>;
}

// || ========== Input Types ========== ||

@InputType() // type-graphql input
export class SpaceshipInput implements Partial<Spaceship> {
  @Field()
  callSign: string;

  @Field(type => ID)
  model: Ref<SpaceshipModel>;
}

@InputType()
export class UpdateSpaceshipInput implements Partial<SpaceshipInput> {
  @Field()
  callSign?: string;
}
