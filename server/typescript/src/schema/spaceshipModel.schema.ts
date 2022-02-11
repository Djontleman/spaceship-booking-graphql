import { prop, Ref } from "@typegoose/typegoose";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";

import { Spaceship, SpaceshipInput } from "./spaceship.schema";

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

  @Field(type => [Spaceship])
  @prop({ ref: () => Spaceship})
  spaceships: Ref<Spaceship>[];
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

  // * cannot update spaceships with this input
//   @Field(type => ID, { nullable: true })
//   spaceships: Ref<Spaceship>[];
}
